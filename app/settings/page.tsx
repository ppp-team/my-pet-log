"use client";

import { useState } from "react";
import Link from "next/link";
import Logout from "@/components/Logout";
import MyProfile from "@/components/MyProfile";
import MyPet from "@/components/MypetCarousel";
import "@/app/globals.css";
import * as styles from "@/app/settings/page.css";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>마이 펫 관리하기</div>
      <MyPet />
      <div className={styles.title}>마이 프로필 관리하기</div>
      <Link href="/settings/myprofile">
        <MyProfile />
      </Link>
      <div className={styles.listContainer}>
        <Link className={styles.list} href="settings/receivedinvites">
          초대 받은 내역
        </Link>
        <Link className={styles.list} href="/settings/ask">
          1:1 문의하기
        </Link>
        <Link className={styles.list} href="/settings/faq">
          faq
        </Link>
        <Link className={styles.list} href="/settings/notice">
          공지사항
        </Link>
        <div className={styles.logout} onClick={toggleModal}>
          로그아웃
        </div>
      </div>

      {isModalOpen && <Logout />}
    </div>
  );
};

export default Page;
