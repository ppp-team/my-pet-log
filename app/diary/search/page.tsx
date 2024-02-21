"use client";
import { getSearchDiary } from "@/app/_api/diary";
import { useInfiniteScroll } from "@/app/_hooks/useInfiniteScroll";
import { Diaries } from "@/app/diary/_components/Diary";
import { container, root, search, searchIcon } from "@/app/diary/_components/Diary/style.css";
import { DIARY_SEARCH_PAGE_SIZE } from "@/app/diary/constant";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import SearchIconURL from "@/public/icons/search.svg?url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const Search = () => {
  console.log("rerender");
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["search", keyword],
    queryFn: ({ pageParam }) => getSearchDiary({ page: pageParam, size: DIARY_SEARCH_PAGE_SIZE, keyword }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
    enabled: !!keyword,
  });
  const { targetRef, setIsRefActivated } = useInfiniteScroll({ callbackFunc: fetchNextPage });

  useEffect(() => {
    console.log("render");
    setIsRefActivated((prev) => !prev);
  }, [data]);

  if (!keyword) return <>검색해보세요</>;
  if (isLoading) return <>loading</>;
  if (!data?.pages[0]?.content.length) return <>일치하는 검색어가 없어요</>;

  return (
    <>
      {data.pages.map((page, idx) => (
        <div key={idx} className={container}>
          {page && <Diaries data={page?.content} />}
        </div>
      ))}
      {/* <div ref={targetRef}>target</div> */}
      {/* 로딩중이 아니고 다음 페이지가 있을 때 무한스크롤됨 */}
      {!isLoading && <div ref={targetRef}>asd</div>}
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
    </>
  );
};

const SearchPage = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className={root}>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div onClick={() => router.replace("/diary")}>
          <Image src={BackIcon} alt="backward icon" width={25} height={25} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchRef?.current?.value.trim() == "") return; //빈값이면 검색하지 않음
            router.replace(`/diary/search?keyword=${searchRef?.current?.value}`);
          }}
          style={{ position: "relative", width: "100%" }}
        >
          <input className={search} ref={searchRef} placeholder="제목, 내용으로 검색" />
          <button>
            <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
          </button>
        </form>
      </div>

      <Search />
    </div>
  );
};

export default SearchPage;
