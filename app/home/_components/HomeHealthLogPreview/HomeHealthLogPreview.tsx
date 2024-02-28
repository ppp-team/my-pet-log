"use client";

import { getLogs } from "@/app/_api/log";
import Loading from "@/app/_components/Loading";
import LogList from "@/app/_components/LogList";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface HomeHealthLogPreviewProps {
  petId: number;
}

const HomeHealthLogPreview = ({ petId }: HomeHealthLogPreviewProps) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate] = useState(today);
  const [year, month, day] = selectedDate.split("-").map(Number);

  const { data: logsData, isPending } = useQuery({
    queryKey: ["Logs", petId, year, month, day],
    queryFn: () => getLogs(petId, year, month, day),
  });

  return (
    <>
      <LogList petId={petId} selectedDate={selectedDate} logsData={logsData} />
      {isPending && <Loading />}
    </>
  );
};
export default HomeHealthLogPreview;
