import { getDiaryList } from "@/app/_api/diary";
import DiaryList from "@/app/diary/_components/DiaryList";
import { DIARY_PAGE_SIZE } from "@/app/diary/(diary)/my-pet/constant";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { container, root } from "./style.css";

const MyPetDiaryPage = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: DIARY_PAGE_SIZE }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={root}>
      <HydrationBoundary state={dehydratedState}>
        <div className={container}>
          <DiaryList petId={petId} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default MyPetDiaryPage;
