"use client";

import Link from "next/link";
import MyProfile from "@/app/settings/components/MyProfile";
import MypetCarousel from "@/app/settings/components/MypetCarousel";
import * as styles from "@/app/settings/page.css";
import HeartIcon from "@/public/icons/heart.svg?url";
import QuestionIcon from "@/public/icons/circle-help.svg?url";
import MessageIcon from "@/public/icons/message-alt.svg?url";
import NoticeIcon from "@/public/icons/megaphone.svg?url";
import MenuList from "@/app/settings/components/MenuList";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";

const Page = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleConfirm = () => {
    closeModalFunc();
    // 로그아웃 시..
  };

  return (
    <>
      <MypetCarousel />
      <div className={styles.container}>
        <Link href="/settings/profile">
          <MyProfile />
        </Link>
        <div className={styles.listContainer}>
          <MenuList href="/settings/received-invites" src={HeartIcon} alt="heart icon" text="초대 받은 내역" />
          <MenuList href="/settings/faq" src={QuestionIcon} alt="question icon" text="FAQ" />
          <MenuList href="/settings/ask" src={MessageIcon} alt="message icon" text="1:1 문의하기" />
          <MenuList href="/settings/notice" src={NoticeIcon} alt="notice icon" text="공지사항" />
          <span className={styles.logout} onClick={openModalFunc}>
            로그아웃
          </span>
        </div>
      </div>
      {isModalOpen && <Modal text="로그아웃 하시겠습니까??" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default Page;
