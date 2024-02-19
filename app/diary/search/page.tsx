"use client";
import SearchIconURL from "@/public/icons/search.svg?url";
import Image from "next/image";
import { root, search, searchIcon, writeIcon } from "@/app/diary/_components/Diary/style.css";
// import * as styles from "./style.css";
import { getSearchDiary } from "@/app/_api/diary";
import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Diaries } from "@/app/diary/_components/Diary";
import { GetDiaryListRequest, GetDiaryListResponse } from "@/app/_types/diary/type";
import BackIcon from "@/public/icons/chevron-left.svg?url";

const PAGE_SIZE = 2;

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const { data, isLoading } = useInfiniteQuery({
    queryKey: ["search", keyword],
    queryFn: ({ pageParam }) => getSearchDiary({ page: pageParam, size: PAGE_SIZE, keyword }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  if (isLoading) return <>loading</>;
  return <>{data?.pages[0]?.content.length ? <Diaries data={data as InfiniteData<GetDiaryListResponse>} /> : <div>일치하는 검색어가 없어요</div>}</>;
};

const SearchPage = () => {
  const [isClick, setIsClick] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={root}>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div onClick={() => router.back()}>
          <Image src={BackIcon} alt="backward icon" width={25} height={25} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchValue.trim() == "") return; //빈값이면 검색하지 않음
            router.replace(`/diary/search?keyword=${searchValue}`);
            setIsClick(true);
          }}
          style={{ position: "relative", width: "100%" }}
        >
          <input className={search} onChange={handleOnChange} value={searchValue} placeholder="제목, 내용으로 검색" />
          <button>
            <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
          </button>
        </form>
      </div>

      {isClick && <Search />}
    </div>
  );
};

export default SearchPage;
