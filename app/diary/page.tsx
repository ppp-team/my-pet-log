import { getDiaryList } from "@/app/_api/diary";
import { root, search, searchIcon, writeIcon } from "@/app/diary/_components/Diary/style.css";
import DiaryList from "@/app/diary/_components/DiaryList";
import SearchIconURL from "@/public/icons/search.svg?url";
import WriteIconURL from "@/public/icons/write.svg?url";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
const PAGE_SIZE = 2;

const DiaryPgae = async () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={root}>
        <Link href="/diary/search" style={{ position: "relative" }}>
          <div className={search} />
          <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={searchIcon} />
        </Link>
        <DiaryList petId={petId} />
        <Link href={"/diary/edit"}>
          <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={writeIcon} />
        </Link>
      </div>
    </HydrationBoundary>
  );
};

export default DiaryPgae;
