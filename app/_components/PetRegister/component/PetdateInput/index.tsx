import * as styles from "./style.css";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState } from "react";
import { Options } from "vanilla-calendar-pro";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import { IFormInput } from "@/app/_components/PetRegister";

interface DateInputProps {
  register: UseFormRegister<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
  getValue: UseFormGetValues<IFormInput>;
  id: "birthday" | "firstMeet";
}
const PetDateInput = ({ register, setValue, getValue, id }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState("날짜 입력");
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
        setValue(id, `${self.selectedDates[0]}`);
        setDateValue(getValue(id) || "");
      },
    },
  };

  const clearDate = () => {
    setDateValue("");
    setValue(id, null);
    setIsDisabled((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
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
