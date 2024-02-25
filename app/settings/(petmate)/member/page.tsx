"use server";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Member from "@/app/settings/_components/Member";
import { getMe } from "@/app/_api/users";
import { getGuardians } from "@/app/_api/guardians";
import { cookies } from "next/headers";

const Page = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });
  await queryClient.prefetchQuery({ queryKey: ["petmate"], queryFn: () => getGuardians() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Member petId={petId} />
      </HydrationBoundary>
    </>
  );
};

export default Page;
