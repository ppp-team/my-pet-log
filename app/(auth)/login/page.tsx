"use client";
import * as styles from "@/app/(auth)/style.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-high-resolution.png";
import SignButton from "@/app/(auth)/_components/SignButton";
import KakaoButton from "../_components/SignButton/KakaoButton";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image src={Logo} alt="로고" width={171} height={171} />
        </div>
        <p className={styles.p}>
          회원이 아니신가요?
          <Link className={styles.link} href="/signup">
            회원가입 하기
          </Link>
        </p>
        <div className={styles.buttonWrapper}>
          <KakaoButton />
        </div>

        {/* {session && (
          <div className={styles.buttonWrapper}>
            <SignButton type="google" action="로그인" onClick={() => signIn("google")} />
          </div>
        )} */}

        <Link className={styles.emailWrapper} href="/login/email">
          <SignButton type="email" action="로그인" />
        </Link>
      </div>
    </>
  );
};

export default Page;
