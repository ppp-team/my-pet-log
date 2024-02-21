import { getComments, getDiary } from "@/app/_api/diary";
import DiaryDetail from "@/app/diary/_components/DiaryDetail";
import { COMMENT_PAGE_SIZE } from "@/app/diary/constant";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";

const DiaryDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const diaryId = Number(id);
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  await queryClient.prefetchQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ diaryId }) });
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["comments", { petId, diaryId }],
    queryFn: ({ pageParam }) => getComments({ diaryId, page: pageParam, size: COMMENT_PAGE_SIZE }),
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DiaryDetail petId={petId} diaryId={diaryId} />
    </HydrationBoundary>
  );
};

export default DiaryDetailPage;
