"use client";
import { getDiaryList } from "@/app/_api/diary";
import { Diaries } from "@/app/diary/_components/Diary";
import EmptyDiaryList from "@/app/diary/_components/EmptyDiaryList";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 2;

const DiaryList = ({ petId }: { petId: number }) => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  if (!data) return <EmptyDiaryList />;

  return (
    <div>
      <Diaries data={data} />
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
    </div>
  );
};

export default DiaryList;
