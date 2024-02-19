"use client";

import { getLogs } from "@/app/_api/log";
import LogList from "@/app/_components/LogList";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import LogWriteButton from "@/app/healthlog/_components/LogWriteButton";
import QuickButtons from "@/app/healthlog/_components/QuickButtons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import * as styles from "./page.css";

const Page = () => {
  const petId = 6;

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [year, month, day] = selectedDate.split("-");

  const { data: logsData } = useQuery({
    queryKey: ["Logs", petId, year, month, day],
    queryFn: () => getLogs(Number(petId), Number(year), Number(month), Number(day)),
    enabled: !!petId,
  });

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
                  setSelectedDate(self.selectedDates.join("-"));
                },
              },
            }}
            className={styles.calendar}
          />
        </div>
        <div className={styles.quickButtonsContainer}>
          <QuickButtons />
        </div>
        <div>{logsData && <LogList logsData={logsData} />}</div>
        <LogWriteButton />
      </div>
    </>
  );
};

export default Page;
