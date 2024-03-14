import { getComments, getDiary } from "@/app/_api/diary";
import { getMe } from "@/app/_api/users";
import DiaryDetail from "@/app/diary/_components/DiaryDetail";
import { COMMENT_PAGE_SIZE } from "@/app/diary/(diary)/my-pet/constant";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { container, root } from "@/app/diary/(diary)/my-pet/style.css";
import BackHeader from "@/app/_components/BackHeader";

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

  //댓글 입력창 프로필 이미지
  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={root}>
      <HydrationBoundary state={dehydratedState}>
        <BackHeader title="육아일기" />
        <div className={container}>
          <DiaryDetail petId={petId} diaryId={diaryId} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default DiaryDetailPage;
