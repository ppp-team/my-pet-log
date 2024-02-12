import * as styles from "./style.css";
import { InputProps } from "@/app/diary/_components/ImageInput";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { useState } from "react";
import { Options } from "vanilla-calendar-pro";
import { FieldValues, UseFormGetValues } from "react-hook-form";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";

interface DateInputProps extends InputProps {
  getValue: UseFormGetValues<FieldValues>;
}
const PetDateInput = ({ register, setValue, getValue, id }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState("날짜 입력");
  const [isDisabled, setIsDisabled] = useState(false);

  const options: Options = {
    type: "default",
    settings: {
      selected: {
        dates: [getValue("date")],
      },
    },
    actions: {
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;
        setValue("date", `${self.selectedDates[0]}`);
        setDateValue(getValue("date"));
      },
    },
  };

  const clearDate = () => {
    setDateValue("");
    setValue("date", null);
    setIsDisabled((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input id={id} className={styles.input} value={dateValue} readOnly {...register("date")} disabled={isDisabled} />
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
