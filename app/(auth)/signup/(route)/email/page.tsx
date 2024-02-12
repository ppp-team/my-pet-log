import * as styles from "./style.css";
import SignUpForm from "@/app/(auth)/_components/SignForm/SignupForm";
import React from "react";

const page = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>이메일로 회원가입</p>
      <SignUpForm />
    </div>
  );
};

export default page;
