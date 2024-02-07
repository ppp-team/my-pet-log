import * as styles from "@/app/diary/edit/style.css";
import { InputProps } from "@/components/Diary/ImageInput";
import VanillaCalendar from "@/components/@common/VanillaCalendar";
import { getPrettyTime, getPrettyToday } from "@/utils/getPrettyToday";
import { useEffect, useState } from "react";
import { Options } from "vanilla-calendar-pro";
import { FieldValues, UseFormGetValues } from "react-hook-form";

interface DateInputProps extends InputProps {
  getValue: UseFormGetValues<FieldValues>;
}
const PetDateInput = ({ register, setValue, getValue }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState("날짜 입력");

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

  return (
    <div className={styles.inputWrapper}>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input className={styles.input} value={dateValue} readOnly {...register("date")} />
      </div>
      {isCalendarOpen && <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%" }} />}
    </div>
  );
};

export default PetDateInput;
