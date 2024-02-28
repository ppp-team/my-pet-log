import React from "react";
import * as styles from "./style.css";
import Google from "@/public/icons/auth/google-icon.svg";
import Kakao from "@/public/icons/auth/kakao-icon.svg";
import Email from "@/public/icons/auth/email-icon.svg";

interface SignButtonProps {
  type: "kakao" | "google" | "email";
  action: "시작하기" | "로그인";
  onClick?: () => void;
}

const SignButton = ({ type, action, onClick }: SignButtonProps) => {
  let message = "";
  let Icon = <Kakao width={18} height={18} alt="카카오 아이콘" />;

  let buttonStyle = styles.signButton;

  switch (type) {
    case "kakao":
      message = `카카오로 3초 만에 ${action}`;
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
      <button className={buttonStyle} onClick={onClick}>
        <div className={styles.iconWrapper}>{Icon}</div>
        <div className={styles.messageWrapper}>{message}</div>
      </button>
    </>
  );
};

export default SignButton;
