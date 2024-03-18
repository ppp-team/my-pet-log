"use client";
import { getDiaryList } from "@/app/_api/diary";
import { useInfiniteScroll } from "@/app/_hooks/useInfiniteScroll";
import { Diaries } from "@/app/diary/_components/Diary";
import { root, search, searchIcon, writeIcon } from "@/app/diary/_components/Diary/style.css";
import EmptyDiaryList from "@/app/diary/_components/EmptyDiaryList";
import { DIARY_PAGE_SIZE } from "@/app/diary/(diary)/my-pet/constant";
import SearchIconURL from "@/public/icons/search.svg?url";
import WriteIconURL from "@/public/icons/write.svg?url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const DiaryList = ({ petId }: { petId: number }) => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: DIARY_PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  const { targetRef, setTargetActive } = useInfiniteScroll({ callbackFunc: fetchNextPage });

  useEffect(() => {
    setTargetActive((prev) => !prev);
  }, [data]);

  if (!data?.pages[0]?.content.length) return <EmptyDiaryList />;

  return (
    <div className={root}>
      <Link href="/diary/search" className={search}>
        <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
      </Link>
      {data.pages.map((page, idx) => (
        <Diaries key={idx} data={page?.content} prevData={idx !== 0 ? data.pages[idx - 1].content : null} />
      ))}
      {/* 로딩중이 아니고 다음 페이지가 있을 때 무한스크롤됨 */}
      {!isLoading && hasNextPage && <div ref={targetRef} />}
      <Link href={"/diary/create"}>
        <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={writeIcon} />
      </Link>
    </div>
  );
};

export default DiaryList;
