"use client";

import Link from "next/link";
import MyProfile from "@/components/Setting/MyProfile";
import MypetCarousel from "@/components/Setting/MypetCarousel";
import * as styles from "@/app/settings/page.css";
import "./swiper.css";
import HeartIcon from "@/assets/heart.svg?url";
import QuestionIcon from "@/assets/circle-help.svg?url";
import MessageIcon from "@/assets/message-alt.svg?url";
import NoticeIcon from "@/assets/megaphone.svg?url";
import MenuList from "@/components/Setting/MenuList";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>마이펫 관리하기</div>
      <MypetCarousel />
      <div className={styles.title}>마이프로필 관리하기</div>
      <Link href="/profile">
        <MyProfile />
      </Link>
      <div className={styles.listContainer}>
        <MenuList href="/ask" src={HeartIcon} alt="question icon" text="초대 받은 내역" />
        <MenuList href="/faq" src={QuestionIcon} alt="question icon" text="faq" />
        <MenuList href="/ask" src={MessageIcon} alt="question icon" text="1:1 문의하기" />
        <MenuList href="/notice" src={NoticeIcon} alt="notice icon" text="공지사항" />
        <Link className={styles.logout} href="/logout">
          로그아웃
        </Link>
      </div>
    </div>
  );
};

export default Page;
