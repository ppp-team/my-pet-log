import { getDiaryList } from "@/app/_api/diary";
import DiaryList from "@/app/diary/_components/DiaryList";
import { DIARY_PAGE_SIZE } from "@/app/diary/constant";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { container, diaryList } from "./style.css";

const DiaryPgae = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: DIARY_PAGE_SIZE }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={container}>
      <HydrationBoundary state={dehydratedState}>
        <div className={diaryList}>
          <DiaryList petId={petId} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default DiaryPgae;
