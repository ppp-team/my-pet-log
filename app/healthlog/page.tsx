"use client";

import VanillaCalendar from "@/app/healthlog/_components/VanillaCalendar";
import QuickButtons from "@/app/healthlog/_components/QuickButtons";
import EmptyLog from "@/app/healthlog/_components/EmptyLog";
import HealthLogList from "@/app/healthlog/_components/HealthLogList";

const Page = () => {
  return (
    <>
      <h3>건강수첩</h3>
      <VanillaCalendar />
      <QuickButtons />
      {/* 항목 없을 경우 */}
      <EmptyLog />
      {/* 항목 있을 경우 */}
      <HealthLogList />
    </>
  );
};

export default Page;
