"use server";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Invitation from "@/app/settings/_components/Invitation";
import { getMyInvitations } from "@/app/_api/invitation";
import { getPet, getCode } from "@/app/_api/pets";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["my-invitations"], queryFn: () => getMyInvitations() });
  await queryClient.prefetchQuery({ queryKey: ["petInfo"], queryFn: () => getPet() });
  await queryClient.prefetchQuery({ queryKey: ["inviteCode"], queryFn: () => getCode() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Invitation />
      </HydrationBoundary>
    </>
  );
};

export default Page;
