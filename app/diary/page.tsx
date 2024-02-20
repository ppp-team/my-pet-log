import { getDiaryList } from "@/app/_api/diary";
import DiaryList from "@/app/diary/_components/DiaryList";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
const PAGE_SIZE = 2;

const DiaryPgae = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DiaryList petId={petId} />
    </HydrationBoundary>
  );
};

export default DiaryPgae;
