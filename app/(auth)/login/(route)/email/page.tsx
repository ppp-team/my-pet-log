import * as styles from "./style.css";
import SignInForm from "@/app/(auth)/_components/SignForm/SigninForm";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo-high-resolution.png";

const page = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>이메일로 로그인</p>
      <div className={styles.imgWrapper}>
        <Image src={Logo} alt="로고" width={171} height={171} />
      </div>
      <SignInForm />
    </div>
  );
};

export default page;
