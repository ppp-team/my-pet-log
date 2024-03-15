"use server";

import Link from "next/link";
import MyProfile from "@/app/settings/_components/MyProfile";
import MypetCarousel from "@/app/settings/_components/MypetCarousel";
import HeartIcon from "@/public/icons/heart.svg?url";
import QuestionIcon from "@/public/icons/circle-help.svg?url";
import MessageIcon from "@/public/icons/message-alt.svg?url";
import NoticeIcon from "@/public/icons/megaphone.svg?url";
import ListItem from "@/app/settings/_components/ListItem";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getMe } from "@/app/_api/users";
import Logout from "@/app/settings/_components/Logout";
import { textMyPet, textMyProfile, listcontainer } from "./page.css";
import { Suspense } from "react";
import CarouselSkeleton from "./_components/MypetCarousel/Skeleton";
import ProfileSkeleton from "./_components/MyProfile/Skeleton";
import ListItemSkeleton from "./_components/ListItem/Skeleton";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ["me"], queryFn: () => getMe() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <div className={textMyPet}>마이펫 관리하기</div>
      <Suspense fallback={<CarouselSkeleton />}>
        <MypetCarousel />
      </Suspense>
      <div className={textMyProfile}>마이프로필 관리하기</div>
      <Suspense fallback={<ProfileSkeleton />}>
        <Link href="/settings/profile">
          <HydrationBoundary state={dehydratedState}>
            <MyProfile />
          </HydrationBoundary>
        </Link>
      </Suspense>
      <Suspense fallback={<ListItemSkeleton />}>
        <div className={listcontainer}>
          <ListItem href="/settings/subscriptions" src={HeartIcon} alt="subscription icon" text="구독중인 펫 계정" />
          <ListItem href="/settings/received-invites" src={HeartIcon} alt="heart icon" text="초대 받은 내역" />
          <ListItem href="/settings/faq" src={QuestionIcon} alt="question icon" text="FAQ" />
          <ListItem href="/settings/ask" src={MessageIcon} alt="message icon" text="1:1 문의하기" />
          <ListItem href="/settings/notice" src={NoticeIcon} alt="notice icon" text="공지사항" />
          <Logout />
        </div>
      </Suspense>
    </>
  );
};

export default Page;
