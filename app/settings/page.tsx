"use client";

import Link from "next/link";
import MyProfile from "@/components/MyProfile";
import MyPet from "@/components/MypetCarousel";
import * as styles from "@/app/settings/page.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>마이 펫 관리하기</div>
      <MyPet />
      <div className={styles.title}>마이 프로필 관리하기</div>
      <Link href="/profile">
        <MyProfile />
      </Link>
      <div className={styles.listContainer}>
        <Link className={styles.list} href="/receivedinvites">
          초대 받은 내역
        </Link>
        <Link className={styles.list} href="/ask">
          1:1 문의하기
        </Link>
        <Link className={styles.list} href="/faq">
          faq
        </Link>
        <Link className={styles.list} href="/notice">
          공지사항
        </Link>
        <Link className={styles.logout} href="/logout">
          로그아웃
        </Link>
      </div>
    </div>
  );
};

export default Page;
