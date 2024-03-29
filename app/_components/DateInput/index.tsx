import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { getPrettyTime, getPrettyToday } from "@/app/_utils/getPrettyToday";
import { useEffect, useState } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Options } from "vanilla-calendar-pro";
import * as styles from "./style.css";

interface DateInputProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
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
      <label className={styles.label}>날짜 *</label>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input className={styles.input} value={dateValue} readOnly {...register("date")} />
        <input className={styles.input} value={timeValue} suppressHydrationWarning readOnly {...register("time")} />
      </div>
      {isCalendarOpen && (
        <div className={styles.calendarWrapper}>
          <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%", minHeight: "30rem", height: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default DateInput;
