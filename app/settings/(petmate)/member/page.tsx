"use server";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Member from "@/app/settings/_components/Member";
import { getMe } from "@/app/_api/users";
import { getGuardians } from "@/app/_api/guardians";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });
  await queryClient.prefetchQuery({ queryKey: ["petmate"], queryFn: () => getGuardians() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Member />
      </HydrationBoundary>
    </>
  );
};

export default Page;
