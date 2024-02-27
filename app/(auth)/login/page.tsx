"use client";
import * as styles from "./style.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-high-resolution.png";
import Line from "@/public/icons/auth/line.svg";
import SignButton from "@/app/(auth)/_components/SignButton";
import KakaoButton from "../_components/SignButton/KakaoButton";
import GoogleButton from "../_components/SignButton/GoogleButton";

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
        <div className={styles.buttonWrapper}>
          <GoogleButton />
        </div>
        <div className={styles.lineWrapper}>
          <Line alt="로고" width={300} height={1} />
        </div>
        <Link className={styles.emailWrapper} href="/login/email">
          <SignButton type="email" action="시작하기" />
        </Link>
      </div>
    </>
  );
};

export default Page;
