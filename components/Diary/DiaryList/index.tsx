import EmptyDiaryList from "@/components/Diary/EmptyDiaryList";
import { useState } from "react";
import * as styles from "./style.css";
import Link from "next/link";

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
    <Link href={`/diary/card/${DIARY_CODE}`}>
      <div className={styles.diaryContainer}>
        <div className={styles.headerInfo}>
          <div>{diary.user}</div>
          <p>{diary.title}</p>
          <p>{diary.content}</p>
        </div>
        <p>{diary.commentsNum}</p>
        {diary.image && <div className={styles.diaryImage} style={{ backgroundImage: `url(${diary.image})` }} />}
      </div>
    </Link>
  );
};

const DiaryList = () => {
  const [data, setData] = useState("data");

  if (!data) return <EmptyDiaryList />;
  return (
    <>
      <input />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <p>2024.12.24</p>
          {DIARY_DATA.map((diary, idx) => {
            return <Diary diary={diary} key={idx} />;
          })}
        </div>
      </section>
    </>
  );
};

export default DiaryList;
