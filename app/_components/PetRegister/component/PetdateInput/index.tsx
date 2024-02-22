import * as styles from "./style.css";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState, useEffect, useRef } from "react";
import { Options } from "vanilla-calendar-pro";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import { IFormInput } from "@/app/_components/PetRegister/PetRegisterForm";
import CalendarIcon from "@/public/icons/calendarIcon.svg?url";
import Image from "next/image";

interface DateInputProps {
  register: UseFormRegister<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
  getValue: UseFormGetValues<IFormInput>;
  id: "birthday" | "firstMeet";
}

const PetDateInput = ({ register, setValue, getValue, id }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState("날짜 선택");
  const [isDisabled, setIsDisabled] = useState(false);
  const calendarRef = useRef(null); //

  const handleClick = () => {
    setIsCalendarOpen((prev) => !prev);
  };

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
        e.stopPropagation();
        console.log("날짜클릭");
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  return (
    <div className={styles.inputWrapper} ref={calendarRef}>
      <div style={{ display: "flex", gap: "1rem", position: "relative" }} onClick={handleClick}>
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
