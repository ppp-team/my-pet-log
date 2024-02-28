"use server";

import { getLogs } from "@/app/_api/log";
import LogWriteButton from "@/app/healthlog/_components/LogWriteButton";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { Suspense } from "react";
import HealthlogSkeleton from "./_components/HealthlogSkeleton";
import HealthlogContent from "./_components/HealthlogContent";
import * as styles from "./page.css";

const Page = async () => {
  const queryClient = new QueryClient();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const petId = Number(cookies().get("petId")?.value);

  await queryClient.prefetchQuery({
    queryKey: ["Logs", petId, year, month, day],
    queryFn: () => getLogs(petId, year, month, day),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩</p>
        <Suspense fallback={<HealthlogSkeleton />}>
          <HealthlogContent petId={petId} />
        </Suspense>
        <LogWriteButton />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
