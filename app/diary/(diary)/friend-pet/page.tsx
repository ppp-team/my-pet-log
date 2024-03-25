"use client";

import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import * as styles from "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./swiper.css";

const mock = {
  name: "은행이",
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
};

const FriendPetDiaryPage = () => {
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
    </>
  );
};

export default FriendPetDiaryPage;
