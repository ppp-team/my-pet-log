"use client";

import VanillaCalendar from "@/components/VanillaCalendar";
import QuickButtons from "@/components/QuickButtons";
import EmptyHealthLog from "@/components/EmptyHealthLog";
import HealthLogList from "@/components/HealthLogList";

const Page = () => {
  return (
    <>
      <h3>건강수첩</h3>
      <VanillaCalendar />
      <QuickButtons />
      {/* 항목 없을 경우 */}
      <EmptyHealthLog />
      {/* 항목 있을 경우 */}
      <HealthLogList />
    </>
  );
};

export default Page;
