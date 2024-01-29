"use client";

import React, { useState } from "react";
import * as styles from "./page.css";
import VanillaCalendar from "@/components/VanillaCalendar";
import QuickButtons from "@/components/QuickButtons";
import EmptyHealthLog from "@/components/EmptyHealthLog";
import HealthLogList from "@/components/@common/LogList";

const Page = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

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
          {/* 항목 없을 경우 */}
          <EmptyHealthLog />
        </div>
        <div>
          {/* 항목 있을 경우 */}
          <HealthLogList />
        </div>
      </div>
    </>
  );
};

export default Page;
