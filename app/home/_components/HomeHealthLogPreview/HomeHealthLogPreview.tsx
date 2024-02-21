"use client";

import { getLogs } from "@/app/_api/log";
import LogList from "@/app/_components/LogList";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const HomeHealthLogPreview = ({ petId }: { petId: number }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [year, month, day] = selectedDate.split("-");

  const { data: logsData } = useQuery({
    queryKey: ["Logs", petId, year, month, day],
    queryFn: () => getLogs(Number(petId), Number(year), Number(month), Number(day)),
    enabled: !!petId,
  });

  return <div>{logsData && <LogList logsData={logsData} petId={petId} />}</div>;
};
export default HomeHealthLogPreview;
