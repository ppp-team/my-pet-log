"use client";
import * as styles from "@/app/signup/page.css";
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
        이미 회원이신가요? <Link href="/login">로그인하기</Link>
        <div className={styles.buttonWrapper}>
          <SignButton type="kakao" action="회원가입하기" />
        </div>
        <div className={styles.buttonWrapper}>
          <SignButton type="google" action="회원가입하기" />
        </div>
        <Link className={styles.buttonWrapper} href="/signup/email">
          <SignButton type="email" action="회원가입하기" />
        </Link>
      </div>
    </>
  );
};

export default page;
