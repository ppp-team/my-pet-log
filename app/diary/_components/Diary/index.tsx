"use client";
import { Diary as DiaryType, GetDiaryListResponse } from "@/app/_types/diary/type";
import CommentIconURL from "@/public/icons/message.svg?url";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./style.css";

export const Diary = ({ diary }: { diary: DiaryType }) => {
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
        <div className={styles.diaryImage} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${diary.thumbnailPath})` }} />
      </div>
    </Link>
  );
};

export const Diaries = ({ data }: { data: GetDiaryListResponse["content"] }) => {
  if (!data) return;
  return (
    <section className={styles.container}>
      {data.map((v: any) => {
        return (
          <div className={styles.diaryListWrapper} key={v.date}>
            <p className={styles.date}>{v.date}</p>
            {v.diaries.map((diary: DiaryType) => {
              return <Diary diary={diary} key={diary.diaryId} />;
            })}
          </div>
        );
      })}
    </section>
  );
};
