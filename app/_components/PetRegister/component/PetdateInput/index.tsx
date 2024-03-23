import * as styles from "./style.css";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState } from "react";
import { Options } from "vanilla-calendar-pro";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import CalendarIcon from "@/public/icons/calendarIcon.svg?url";
import Image from "next/image";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormInput } from "@/app/_components/PetRegister";

interface DateInputProps {
  register: UseFormRegister<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
  getValue: UseFormGetValues<IFormInput>;
  id: "birthday" | "firstMeet";
}

const PetDateInput = ({ register, setValue, getValue, id }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isOptionActive, setIsOptionActive] = useState(!Boolean(getValue(id)));

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
        setIsOptionActive(false);
      },
    },
  };

  const clearDate = () => {
    setValue(id, null);
    setIsOptionActive((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem", position: "relative", marginBottom: "0.6rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <Image src={CalendarIcon} alt="calendar icon" width={20} height={20} style={{ position: "absolute", right: "1.4rem", top: "1.3rem" }} />
        <input className={styles.input} readOnly {...register(id)} placeholder="날짜 선택" />
      </div>
      {isCalendarOpen && (
        <div className={styles.calendarWrapper}>
          <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%" }} />
        </div>
      )}
      <OptionalMessage message="기억이 나지 않아요" onClearInput={clearDate} isActive={isOptionActive} />
    </div>
  );
};

export default PetDateInput;
