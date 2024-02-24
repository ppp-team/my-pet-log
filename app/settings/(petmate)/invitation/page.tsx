"use server";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Invitation from "@/app/settings/_components/Invitation";
import { getMyInvitations } from "@/app/_api/invitation";
import { getPet, getCode } from "@/app/_api/pets";
import { cookies } from "next/headers";

const Page = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  await queryClient.prefetchQuery({ queryKey: ["my-invitations", petId], queryFn: () => getMyInvitations() });
  await queryClient.prefetchQuery({ queryKey: ["petInfo", petId], queryFn: () => getPet(petId) });
  await queryClient.prefetchQuery({ queryKey: ["inviteCode", petId], queryFn: () => getCode() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Invitation petId={petId} />
      </HydrationBoundary>
    </>
  );
};

export default Page;
