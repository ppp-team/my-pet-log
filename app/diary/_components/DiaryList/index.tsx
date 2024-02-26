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
import { useInfiniteScroll } from "@/app/_hooks/useInfiniteScroll";
import { DIARY_PAGE_SIZE } from "@/app/diary/constant";
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
      <Link href="/diary/search" style={{ position: "relative" }}>
        <div className={search} />
        <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
      </Link>
      <section className={container}>
        {data.pages.map((page, idx) => (
          <div key={idx}>
            <Diaries data={page?.content} prevData={idx !== 0 ? data.pages[idx - 1].content : null} />
          </div>
        ))}
        {/* 로딩중이 아니고 다음 페이지가 있을 때 무한스크롤됨 */}
        {!isLoading && hasNextPage && <div ref={targetRef} />}
      </section>
      <Link href={"/diary/create"}>
        <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={writeIcon} />
      </Link>
    </div>
  );
};

export default DiaryList;
