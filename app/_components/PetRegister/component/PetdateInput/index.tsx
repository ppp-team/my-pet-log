import * as styles from "./style.css";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState, useEffect, useRef } from "react";
import { Options } from "vanilla-calendar-pro";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import { IFormInput } from "@/app/_components/PetRegister";
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside); // 클릭 이벤트 핸들러 등록
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 컴포넌트가 언마운트될 때 클릭 이벤트 핸들러 정리
    };
  }, [calendarRef]);
  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem", position: "relative", marginBottom: "0.8rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <Image src={CalendarIcon} alt="calendar icon" width={20} height={20} style={{ position: "absolute", right: "1.4rem", top: "1.3rem" }} />
        <input className={styles.input} value={dateValue} readOnly {...register(id)} disabled={isDisabled} />
      </div>
      {isCalendarOpen && (
        <div className={styles.calendarWrapper} ref={calendarRef}>
          <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%" }} />
        </div>
      )}
      <OptionalMessage message="기억이 나지 않아요" onClearInput={clearDate} />
    </div>
  );
};

export default PetDateInput;
