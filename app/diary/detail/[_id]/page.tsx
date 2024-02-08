"use client";

import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg?url";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.css";
import "./swiper.css";
import SendIcon from "@/public/icons/send.svg?url";
import BackHeader from "@/app/_components/BackHeader";

const COMMENT_DATA = [
  {
    commentId: 4,
    content: "eotrmfdmfekqslek",
    createdAt: "3시간",
    isCurrentUserLiked: false,
    writer: {
      id: "thdefn5519",
      nickname: "하이",
      isCurrentUser: false,
    },
    taggedUsers: [
      {
        id: "abcde5578",
        nickname: "하이루",
        isCurrentUser: false,
      },
    ],
  },
  {
    commentId: 7,
    content: "eotrmfdmfekqslek",
    createdAt: "2시간",
    isCurrentUserLiked: false,
    writer: {
      id: "thdefn5519",
      nickname: "하이",
      isCurrentUser: true,
    },
    taggedUsers: [
      {
        id: "abcde5578",
        nickname: "하이루",
        isCurrentUser: false,
      },
    ],
  },
];
const DATA = {
  diaryId: 43,
  title: "오늘은 공원에서 산책을 했어요",
  content:
    "날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서",
  date: "2024.02.01",
  images: [
    "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    "https://i.namu.wiki/i/KU-AvOeaSMn1tXrd1KXYfLh7nEjlh2YeFOiRvZXkI8IZxaXx9fcf85CP3KeBVyhqO8fj28_udHMczlm7-T4QjMeOoLaCyUZ-XInhsLSFBYO-ggjAaQ5Y8DoQUEEePlJSMHBBE6cbRe_2_N9B-CO3fw.webp",
  ],
  isCurrentUserLiked: false,
  likeCount: 24,
  petType: "말티즈",
  petAge: "4개월",
  writer: {
    id: "thdefn5519",
    nickname: "해피지은",
    profilePath: null,
    isCurrentUser: true,
  },
  commentCount: 0,
};

interface CommentProp {
  commentId: number;
  content: string;
  createdAt: string;
  isCurrentUserLiked: boolean;
  writer: Writer;
  taggedUsers: Tag[];
}
interface Writer {
  id: string;
  nickname: string;
  isCurrentUser: boolean;
}
interface Tag {
  id: string;
  nickname: string;
  isCurrentUser: boolean;
}

const Comment = ({ comment }: { comment: CommentProp }) => {
  return (
    <>
      <div className={styles.commentContainer}>
        <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
        <div className={styles.commentMain}>
          <div className={styles.commentHeader}>
            <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
              {comment.writer.nickname} <span style={{ color: " #A4A4A4", fontWeight: "400" }}>{comment.createdAt}</span>
            </p>
            {comment.writer.isCurrentUser && <Image src={KebabIcon} alt="kebab icon" width={24} height={24} />}
          </div>
          <p className={styles.commentContent}>{comment.content}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className={styles.recommentButton}>답글</button>{" "}
            <button className={styles.commentLikeButton}>
              <Image src={LikeIcon} alt="like icon" width={18} height={18} style={{ cursor: "pointer" }} /> 5
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

const DiaryDetailPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <BackHeader title="육아일기" />
      <div className={styles.root}>
        <section className={styles.header}>
          <p className={styles.petInfo}>
            {DATA.petType} | {DATA.petAge}
          </p>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>{DATA.title}</h3>
          <p style={{ fontSize: "1.4rem", color: "#9A9A9A" }}>{DATA.date}</p>
          {DATA.writer.isCurrentUser && <Image src={KebabIcon} alt="kebab icon" width={24} height={24} className={styles.kebab} />}
        </section>

        <section className={styles.main}>
          <div className={styles.swiperFraction}>
            {currentPage + 1}/{DATA.images.length}
          </div>
          <Swiper
            onSlideChange={(e) => setCurrentPage(e.activeIndex)}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {DATA.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.profile}>
            <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
              <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
              <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>{DATA.writer.nickname}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Image src={LikeIcon} alt="like icon" width={18} height={18} style={{ cursor: "pointer" }} />
              <p style={{ fontSize: "1.4rem", color: "#818181" }}>{DATA.likeCount}</p>
            </div>
          </div>
          <p className={styles.content}>{DATA.content}</p>
        </section>
        <section>
          <div className={styles.commentsCount}>댓글({DATA.commentCount})</div>
          {COMMENT_DATA.map((comment) => (
            <Comment comment={comment} key={comment.commentId} />
          ))}
          <div className={styles.commentInputContainer}>
            <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
            <div style={{ width: "100%", position: "relative" }}>
              <input placeholder="댓글을 남겨주세요" className={styles.commentInput} />
              <Image src={SendIcon} alt="send icon" width={20} height={20} className={styles.sendIcon} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiaryDetailPage;
