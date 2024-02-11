import React from "react";
import * as styles from "./style.css";
import Google from "@/public/icons/google-icon.svg";
import Kakao from "@/public/icons/kakao-icon.svg";
import Email from "@/public/icons/email-icon.svg";

interface SignButtonProps {
  type: "kakao" | "google" | "email";
  action: "가입" | "로그인";
}

const SignButton = ({ type, action }: SignButtonProps) => {
  let message = "";
  let Icon = null;

  let buttonStyle = styles.signButton;

  switch (type) {
    case "kakao":
      message = `카카오 계정으로 ${action}`;
      buttonStyle = `${styles.signButton} ${styles.kakaoButton}`;
      Icon = <Kakao width={18} height={18} alt="카카오 아이콘" />;
      break;
    case "google":
      message = `Google 계정으로 ${action}`;
      Icon = <Google width={18} height={18} alt="구글 아이콘" />;
      break;
    case "email":
      message = `이메일로 ${action}`;
      Icon = <Email width={18} height={18} alt="이메일 아이콘" />;
      break;
    default:
      break;
  }

  return (
    <>
      <div className={buttonStyle}>
        <div className={styles.iconWrapper}>{Icon}</div>
        <div className={styles.messageWrapper}>{message}</div>
      </div>
    </>
  );
};

export default SignButton;
