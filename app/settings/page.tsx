"use server";

import Link from "next/link";
import MyProfile from "@/app/settings/_components/MyProfile";
import MypetCarousel from "@/app/settings/_components/MypetCarousel";
import HeartIcon from "@/public/icons/heart.svg?url";
import QuestionIcon from "@/public/icons/circle-help.svg?url";
import MessageIcon from "@/public/icons/message-alt.svg?url";
import NoticeIcon from "@/public/icons/megaphone.svg?url";
import MenuList from "@/app/settings/_components/MenuList";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getMe } from "@/app/_api/users";
import Logout from "@/app/settings/_components/Logout";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <div
          style={{
            margin: "2rem 1.6rem",
            color: "var(--Gray72)",
            fontSize: "1.6rem",
            fontWeight: "600",
          }}
        >
          마이펫 관리하기
        </div>
        <MypetCarousel />
        <div style={{ padding: "0 1.6rem 1.6rem" }}>
          <Link href="/settings/profile">
            <MyProfile />
          </Link>
          <div
            style={{
              padding: "2.3rem 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MenuList href="/settings/received-invites" src={HeartIcon} alt="heart icon" text="초대 받은 내역" />
            <MenuList href="/settings/faq" src={QuestionIcon} alt="question icon" text="FAQ" />
            <MenuList href="/settings/ask" src={MessageIcon} alt="message icon" text="1:1 문의하기" />
            <MenuList href="/settings/notice" src={NoticeIcon} alt="notice icon" text="공지사항" />
            <Logout />
          </div>
        </div>
      </HydrationBoundary>
    </>
  );
};

export default Page;
