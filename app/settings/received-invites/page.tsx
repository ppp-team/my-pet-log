"use server";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import ReceivedInvites from "@/app/settings/_components/ReceivedInvites";
import { getInvitations } from "@/app/_api/invitation";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["invites"], queryFn: () => getInvitations() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <ReceivedInvites />
      </HydrationBoundary>
    </>
  );
};

export default Page;
