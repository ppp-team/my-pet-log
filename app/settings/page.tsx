"use client";

import Link from "next/link";
import MyProfile from "@/components/Setting/MyProfile";
import MypetCarousel from "@/components/Setting/MypetCarousel";
import * as styles from "@/app/settings/page.css";
import HeartIcon from "@/assets/heart.svg?url";
import QuestionIcon from "@/assets/circle-help.svg?url";
import MessageIcon from "@/assets/message-alt.svg?url";
import NoticeIcon from "@/assets/megaphone.svg?url";
import MenuList from "@/components/Setting/MenuList";
import Modal from "@/components/@common/Modal";
import { useModal } from "@/hooks/useModal";

const Page = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleConfirm = () => {
    closeModalFunc();
    // 로그아웃 시..
  };

  return (
    <div className={styles.container}>
      <MypetCarousel />
      <Link href="/profile">
        <MyProfile />
      </Link>
      <div className={styles.listContainer}>
        <MenuList href="/received-invites" src={HeartIcon} alt="heart icon" text="초대 받은 내역" />
        <MenuList href="/faq" src={QuestionIcon} alt="question icon" text="FAQ" />
        <MenuList href="/ask" src={MessageIcon} alt="message icon" text="1:1 문의하기" />
        <MenuList href="/notice" src={NoticeIcon} alt="notice icon" text="공지사항" />
        <span className={styles.logout} onClick={openModalFunc}>
          로그아웃
        </span>
      </div>
      {isModalOpen && <Modal text="로그아웃 하시겠습니까??" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </div>
  );
};

export default Page;
