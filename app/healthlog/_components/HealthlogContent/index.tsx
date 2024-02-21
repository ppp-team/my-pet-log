"use client";

import { getLogs } from "@/app/_api/log";
import LogList from "@/app/_components/LogList";
import VanillaCalendar from "@/app/_components/VanillaCalendar";
import QuickButtons from "@/app/healthlog/_components/QuickButtons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import * as styles from "./style.css";

interface HealthlogContentProps {
  petId: number;
}

const HealthlogContent = ({ petId }: HealthlogContentProps) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [year, month, day] = selectedDate.split("-").map(Number);

  const { data: logsData } = useQuery({
    queryKey: ["Logs", petId, year, month, day],
    queryFn: () => getLogs(petId, year, month, day),
  });

  return (
    <>
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
        <QuickButtons petId={petId} />
      </div>
      <div>
        <LogList petId={petId} selectedDate={selectedDate} logsData={logsData} />
      </div>
    </>
  );
};

export default HealthlogContent;
