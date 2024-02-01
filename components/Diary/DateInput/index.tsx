import * as styles from "@/app/diary/edit/style.css";
import { InputProps } from "@/components/Diary/ImageInput";
import VanillaCalendar from "@/components/VanillaCalendar";
import { getPrettyTime, getPrettyToday } from "@/utils/getPrettyToday";
import { useEffect, useRef, useState } from "react";
import { Options } from "vanilla-calendar-pro";

const DateInput = ({ register, setValue }: InputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: Options = {
    settings: {
      selected: {
        dates: [getPrettyToday()],
        time: getPrettyTime(),
      },
      selection: {
        time: true,
      },
    },
    actions: {
      changeTime(e, self) {
        setValue("time", ` ${self.selectedTime}`);
      },
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;

        setValue("date", `${self.selectedDates[0]}`);
      },
    },
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>날짜</label>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input className={styles.input} value={getPrettyToday()} readOnly {...register("date")} />
        <input className={styles.input} value={getPrettyTime()} suppressHydrationWarning readOnly {...register("time")} />
      </div>
      {isCalendarOpen && <VanillaCalendar config={options} style={{ minWidth: "20rem", width: "100%" }} />}
    </div>
  );
};

export default DateInput;
