import EmptyDiaryList from "@/components/Diary/EmptyDiaryList";
import { useState } from "react";
import * as styles from "./style.css";
import Link from "next/link";
import SearchIconURL from "@/assets/search.svg?url";
import CommentIconURL from "@/assets/message.svg?url";
import Image from "next/image";
import WriteIconURL from "@/assets/write.svg?url";
import { useRouter } from "next/navigation";

const DIARY_LIST_DATA = [
  {
    id: 0,
    date: "2024년 1월 1일 일요일",
  },
  {
    id: 1,
    date: "2024년 1월 2일 월요일",
  },
  {
    id: 2,
    date: "2024년 1월 3일 화요일",
  },
];
const DIARY_DATA = [
  {
    title: "중랑천 산책",
    content: "날씨가 많이 풀려서 해피와 중랑천 산책을 했다. 내가 사준 노란색 패딩이 참 잘 어울린다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    user: "해피지은",
    commentsNum: "3",
  },
  {
    title: "중랑천 산책",
    content: "날씨가 많이 풀려서 해피와 중랑천 산책을 했다. 내가 사준 노란색 패딩이 참 잘 어울린다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    user: "해피지은",
    commentsNum: "3",
  },
  {
    title: "중랑천 산책",
    content: "날씨가 많이 풀려서 해피와 중랑천 산책을 했다. 내가 사준 노란색 패딩이 참 잘 어울린다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    user: "해피지은",
    commentsNum: "3",
  },
  {
    title: "중랑천 산책",
    content: "날씨가 많이 풀려서 해피와 중랑천 산책을 했다. 내가 사준 노란색 패딩이 참 잘 어울린다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    user: "해피지은",
    commentsNum: "3",
  },
];

interface DiaryData {
  title: string;
  content: string;
  image: string;
  user: string;
  commentsNum: string;
}

const DIARY_CODE = "456";

const Diary = ({ diary }: { diary: DiaryData }) => {
  return (
    <Link href={`/diary/detail/${DIARY_CODE}`}>
      <div className={styles.diaryWrapper}>
        <div className={styles.contents}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.writer}>{diary.user}</div>
            <Image src={CommentIconURL} alt="comment icon" width={14} height={14} />
            <p style={{ color: "#ACACAC", marginLeft: "0.2rem" }}>{diary.commentsNum}</p>
          </div>
          <div style={{ width: "22.3rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "600" }}>{diary.title}</h3>
            <p className={styles.description}>{diary.content}</p>
          </div>
        </div>
        {diary.image && <div className={styles.diaryImage} style={{ backgroundImage: `url(${diary.image})` }} />}
      </div>
    </Link>
  );
};

const DiaryList = () => {
  const [data, setData] = useState("해피");
  const router = useRouter();

  if (!data) return <EmptyDiaryList />;
  return (
    <div className={styles.root}>
      <div style={{ position: "relative" }}>
        <input className={styles.search} />
        <Image src={SearchIconURL} alt="search icon" width={16} height={16} className={styles.searchIcon} />
      </div>

      <section className={styles.container}>
        {DIARY_LIST_DATA.map((v) => {
          return (
            <div className={styles.diaryListWrapper} key={v.id}>
              <p className={styles.date}>{v.date}</p>
              {DIARY_DATA.map((diary, idx) => {
                return <Diary diary={diary} key={idx} />;
              })}
            </div>
          );
        })}
      </section>
      <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={styles.writeIcon} onClick={() => router.push("/diary/edit")} />
    </div>
  );
};

export default DiaryList;
