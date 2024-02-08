import * as styles from "./style.css";
import { InputProps } from "@/components/Diary/ImageInput";
import VanillaCalendar from "@/components/@common/VanillaCalendar";
import { getPrettyTime, getPrettyToday } from "@/utils/getPrettyToday";
import { useEffect, useState } from "react";
import { Options } from "vanilla-calendar-pro";
import { FieldValues, UseFormGetValues } from "react-hook-form";

interface DateInputProps extends InputProps {
  getValue: UseFormGetValues<FieldValues>;
}
const DateInput = ({ register, setValue, getValue }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState(getPrettyToday());
  const [timeValue, setTimeValue] = useState(getPrettyTime());

  const options: Options = {
    settings: {
      selected: {
        dates: [getValue("date")],
        time: getValue("time"),
      },
      selection: {
        time: true,
      },
      iso8601: false,
      visibility: {
        theme: "light",
      },
    },
    actions: {
      changeTime(e, self) {
        setValue("time", `${self.selectedTime}`);
        // setTimeValue(getValue("time"));
      },
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;

        setValue("date", `${self.selectedDates[0]}`);
        setDateValue(getValue("date"));
      },
    },
  };

  useEffect(() => {
    setTimeValue(getValue("time"));
  }, [isCalendarOpen]);

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>날짜*</label>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input className={styles.input} value={dateValue} readOnly {...register("date")} />
        <input className={styles.input} value={timeValue} suppressHydrationWarning readOnly {...register("time")} />
      </div>
      {isCalendarOpen && (
        <div className={styles.calendarWrapper}>
          <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%", minHeight: "30rem", height: "35rem" }} />
        </div>
      )}
    </div>
  );
};

export default DateInput;
