"use client";
import * as styles from "@/app/login/page.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "@/assets/feather.svg?url";
import SignButton from "@/components/@common/SignButton";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={FeatherIcon} alt="로고" width={171} height={171} />
        회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
        <div className={styles.buttonWrapper}>
          <SignButton type="kakao" action="로그인하기" />
        </div>
        <div className={styles.buttonWrapper}>
          <SignButton type="google" action="로그인하기" />
        </div>
        <Link className={styles.buttonWrapper} href="/login/email">
          <SignButton type="email" action="로그인하기" />
        </Link>
      </div>
    </>
  );
};

export default page;
