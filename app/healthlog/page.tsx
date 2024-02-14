"use client";

import VanillaCalendar from "@/app/_components/VanillaCalendar";
import LogList from "@/app/_components/LogList";
import LogWriteButton from "@/app/healthlog/_components/LogWriteButton";
import QuickButtons from "@/app/healthlog/_components/QuickButtons";
import { currentPetAtom } from "@/app/_states/atom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import * as styles from "./page.css";

const Page = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom); //추후에 localStorage로 바꿔야할듯
  const [year, month, day] = selectedDate.split("-");

  // if (!currentPet) return redirect("/healthlog/select");

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩</p>
        <div className={styles.calendarBox}>
          <VanillaCalendar
            config={{
              type: "default",
              settings: {
                iso8601: false,
                visibility: {
                  theme: "light",
                },
              },
              actions: {
                clickDay(event, self) {
                  setSelectedDate(self.selectedDates.join(", "));
                },
              },
            }}
            className={styles.calendar}
          />
        </div>
        <div className={styles.quickButtonsContainer}>
          <QuickButtons />
        </div>
        <div>
          <LogList petId={6} year={Number(year)} month={Number(month)} day={Number(day)} />
        </div>
        <LogWriteButton />
      </div>
    </>
  );
};

export default Page;
