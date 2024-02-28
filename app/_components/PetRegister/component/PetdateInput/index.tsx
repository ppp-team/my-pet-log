import * as styles from "./style.css";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState } from "react";
import { Options } from "vanilla-calendar-pro";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import CalendarIcon from "@/public/icons/calendarIcon.svg?url";
import Image from "next/image";

interface DateInputProps {
  register: any;
  setValue: any;
  getValue: any;
  id: "birthday" | "firstMeet";
}
const PetDateInput = ({ register, setValue, getValue, id }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState(getValue(id) || "날짜 선택");
  const [isDisabled, setIsDisabled] = useState(false);

  const options: Options = {
    type: "default",
    settings: {
      selected: {
        dates: getValue(id) ? [getValue(id) as string] : [],
      },
    },
    actions: {
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;

        if (id === "birthday" || "firstMeet") {
          setValue(id, `${self.selectedDates[0]}`);
          setDateValue(getValue(id) || "");
        }
      },
    },
  };

  const clearDate = () => {
    setDateValue("");
    setValue(id, null);
    setIsDisabled((prev) => !prev);
  };

  if (id !== "birthday" && id !== "firstMeet") return null;
  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem", position: "relative", marginBottom: "0.6rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <Image src={CalendarIcon} alt="calendar icon" width={20} height={20} style={{ position: "absolute", right: "1.4rem", top: "1.3rem" }} />
        <input className={styles.input} value={dateValue} readOnly {...register(id)} disabled={isDisabled} />
      </div>
      {isCalendarOpen && (
        <div className={styles.calendarWrapper}>
          <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%" }} />
        </div>
      )}
      <OptionalMessage message="기억이 나지 않아요" onClearInput={clearDate} />
    </div>
  );
};

export default PetDateInput;
