"use client";
import { getDiaryList } from "@/app/_api/diary";
import { Diaries } from "@/app/diary/_components/Diary";
import { root, container, search, searchIcon, writeIcon } from "@/app/diary/_components/Diary/style.css";
import EmptyDiaryList from "@/app/diary/_components/EmptyDiaryList";
import SearchIconURL from "@/public/icons/search.svg?url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import WriteIconURL from "@/public/icons/write.svg?url";
import Link from "next/link";
const PAGE_SIZE = 2;

const DiaryList = ({ petId }: { petId: number }) => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  if (!data?.pages[0]) return <EmptyDiaryList />;

  return (
    <div className={root}>
      <Link href="/diary/search" style={{ position: "relative" }}>
        <div className={search} />
        <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
      </Link>
      {data.pages.map((page, idx) => (
        <div key={idx} className={container}>
          <Diaries data={page?.content} />
        </div>
      ))}
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
      <Link href={"/diary/create"}>
        <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={writeIcon} />
      </Link>
    </div>
  );
};

export default DiaryList;
