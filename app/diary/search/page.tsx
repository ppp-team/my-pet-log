"use client";
import { getSearchDiary } from "@/app/_api/diary";
import { Diaries } from "@/app/diary/_components/Diary";
import { container, root, search, searchIcon } from "@/app/diary/_components/Diary/style.css";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import SearchIconURL from "@/public/icons/search.svg?url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const PAGE_SIZE = 2;

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const { data, isLoading } = useInfiniteQuery({
    queryKey: ["search", keyword],
    queryFn: ({ pageParam }) => getSearchDiary({ page: pageParam, size: PAGE_SIZE, keyword }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
    enabled: !!keyword,
  });

  if (!keyword) return <>검색해보세요</>;
  if (isLoading) return <>loading</>;
  if (!data?.pages[0]?.content.length) return <>일치하는 검색어가 없어요</>;

  return (
    <>
      {data.pages.map((page, idx) => (
        <div key={idx} className={container}>
          <Diaries data={page?.content} />
        </div>
      ))}
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
