"use client";

import VanillaCalendar from "@/components/@common/VanillaCalendar";
import LogList from "@/components/Healthlog/LogList";
import LogWriteButton from "@/components/Healthlog/LogWriteButton";
import QuickButtons from "@/components/Healthlog/QuickButtons";
import { currentPetAtom } from "@/states/atom";
import { useAtom } from "jotai";
import { useState } from "react";
import * as styles from "./page.css";

const Page = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom); //추후에 localStorage로 바꿔야할듯

  // if (!currentPet) return redirect("/healthlog/select");

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
          <LogList selectedDate={selectedDate} />
        </div>
        <LogWriteButton />
      </div>
    </>
  );
};

export default Page;
