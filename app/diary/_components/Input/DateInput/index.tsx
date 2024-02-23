import VanillaCalendar from "@/app/_components/VanillaCalendar";
import { FormInput } from "@/app/diary/_components/Form/EditForm";
import { useState } from "react";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Options } from "vanilla-calendar-pro";
import * as styles from "./style.css";

interface DateInputProps {
  register: UseFormRegister<FormInput>;
  setValue: UseFormSetValue<FormInput>;
  getValue: UseFormGetValues<FormInput>;
}

const DateInput = ({ register, setValue, getValue }: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const options: Options = {
    settings: {
      selected: {
        dates: [getValue("date")],
        month: +getValue("date")?.split("-")[1] - 1,
      },
      iso8601: false,
      visibility: {
        theme: "light",
      },
    },
    actions: {
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;

        setValue("date", `${self.selectedDates[0]}`);
      },
    },
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>날짜 *</label>
      <div style={{ display: "flex", gap: "1rem" }} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <input className={styles.input} readOnly {...register("date")} />
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
