import { getDiaryList } from "@/app/_api/diary";
import { Diaries } from "@/app/_types/diary/type";
import EmptyDiaryList from "@/app/diary/_components/EmptyDiaryList";
import CommentIconURL from "@/public/icons/message.svg?url";
import SearchIconURL from "@/public/icons/search.svg?url";
import WriteIconURL from "@/public/icons/write.svg?url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as styles from "./style.css";

const Diary = ({ diary }: { diary: Diaries }) => {
  return (
    <Link href={`/diary/detail/${diary.diaryId}`}>
      <div className={styles.diaryWrapper}>
        <div className={styles.contents}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.writer}>{diary.writer.nickname}</div>
            <Image src={CommentIconURL} alt="comment icon" width={14} height={14} />
            <p style={{ color: "#ACACAC", marginLeft: "0.2rem" }}>{diary.commentCount}</p>
          </div>
          <div style={{ width: "22.3rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "600" }}>{diary.title}</h3>
            <p className={styles.description}>{diary.content}</p>
          </div>
        </div>
        {diary.thumbnailPath ? <div className={styles.diaryImage} style={{ backgroundImage: `url(${diary.thumbnailPath})` }} /> : <div className={styles.diaryImage}></div>}
      </div>
    </Link>
  );
};

const PAGE_SIZE = 2;

const DiaryList = () => {
  const petId = 2;
  const router = useRouter();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["diaries", petId],
    queryFn: ({ pageParam }) => getDiaryList({ petId, page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  if (!data) return <EmptyDiaryList />;

  return (
    <div className={styles.root}>
      <div style={{ position: "relative" }}>
        <input className={styles.search} />
        <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={styles.searchIcon} />
      </div>
      <section className={styles.container}>
        {data.pages.map((p, idx) => (
          <div key={idx} className={styles.container}>
            {p?.content.map((v: any) => {
              return (
                <div className={styles.diaryListWrapper} key={v.date}>
                  <p className={styles.date}>{v.date}</p>
                  {v.diaries.map((diary: Diaries) => {
                    return <Diary diary={diary} key={diary.diaryId} />;
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </section>
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
      <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={styles.writeIcon} onClick={() => router.push("/diary/edit")} />
    </div>
  );
};

export default DiaryList;
