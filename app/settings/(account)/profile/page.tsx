"use server";

import { getMe } from "@/app/_api/users";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Profile from "@/app/settings/_components/Profile";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Profile />
    </HydrationBoundary>
  );
};

export default Page;
