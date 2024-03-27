"use client";

import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import * as styles from "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./swiper.css";
import HeartIcon from "@/public/icons/hearticon.svg";
import ChatIcon from "@/public/icons/chat.svg";
import { useState } from "react";

const mock = {
  name: "은행이",
  title: "제목입니당",
  description: "이슬\n안녕\n나는 누구야\n이슬\n이슬",
  date: "2월 13일",
  commentNum: 6,
  isSubscribed: true,
  profileImage: null,
  images: [
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
    {
      mediaId: 0,
      path: "https://phinf.pstatic.net/contact/20220825_253/1661385964853G7XN3_JPEG/KakaoTalk_20220825_090521205.jpg?type=s160",
    },
  ],
  great: 3,
};

const FriendPetDiaryPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const lines = mock.description.split("\n");
  const firstLine = lines[0];
  const additionalLines = lines.slice(1).join("\n");

  return (
    <>
      <section className={styles.profileInfo}>
        <Image src={getImagePath(mock.profileImage)} alt="profile image" width={45} height={45} />
        <div className={styles.text}>
          {mock.name} · {mock.isSubscribed ? "구독 중 🐾" : "구독하기"}
        </div>
      </section>
      <Swiper
        className="friend"
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination]}
      >
        {mock.images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.image} style={{ backgroundImage: `url(${image.path})` }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HeartIcon className={styles.icon} />
      <ChatIcon className={styles.icon} />
      <section className={styles.greatChat}>
        <span className={styles.greatText}>좋아요 {mock.great}개</span>
        <div className={styles.nameTitle}>
          {mock.name} <span className={styles.title}>{mock.title}</span>
        </div>
        <section className={styles.description}>
          <span>
            {firstLine}
            {lines.length > 1 && !isExpanded && (
              <span onClick={() => setIsExpanded(true)}>
                ... <button className={styles.seeMore}>더 보기</button>
              </span>
            )}
          </span>
          <div className={`${styles.additionalContent} ${isExpanded ? styles.showAdditionalContent : ""}`}>
            {additionalLines.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>
        <div className={styles.comment}>댓글 {mock.commentNum}개 모두 보기</div>
        <div className={styles.date}>{mock.date}</div>
      </section>
    </>
  );
};

export default FriendPetDiaryPage;
