"use client";
import * as styles from "@/app/(auth)/style.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-high-resolution.png";
import SignButton from "@/app/(auth)/_components/SignButton";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image src={Logo} alt="로고" width={171} height={171} />
        </div>
        <p className={styles.p}>
          이미 회원이신가요?
          <Link className={styles.link} href="/login">
            로그인하기
          </Link>
        </p>
        <div className={styles.buttonWrapper}>
          <SignButton type="kakao" action="가입" />
        </div>
        <div className={styles.buttonWrapper}>
          <SignButton type="google" action="가입" />
        </div>
        <Link className={styles.emailWrapper} href="/signup/email">
          <SignButton type="email" action="가입" />
        </Link>
      </div>
    </>
  );
};

export default page;
