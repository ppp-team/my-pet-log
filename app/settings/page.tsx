"use client";

import { useState } from "react";
import Link from "next/link";
import Logout from "@/app/settings/_components/Logout";
import MyProfile from "@/app/settings/_components/MyProfile";
import MyPet from "@/app/settings/_components/Mypet";
import "@/app/globals.css";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>마이 펫 관리하기</div>
      <MyPet />
      <div>마이 프로필 관리하기</div>
      <Link href="/settings/myprofile">
        <MyProfile />
      </Link>
      <Link href=""></Link>
      <Link href="settings/receivedinvites">초대 받은 내역</Link>
      <Link href="/settings/ask">1:1 문의하기</Link>
      <Link href="/settings/faq">faq</Link>
      <Link href="/settings/notice">공지사항</Link>
      <div onClick={toggleModal}>로그아웃</div>
      {isModalOpen && <Logout />}
    </>
  );
};

export default Page;
