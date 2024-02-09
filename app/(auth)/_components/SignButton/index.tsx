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
      message = `카카오로 ${action}`;
      buttonStyle = `${styles.signButton} ${styles.kakaoButton}`;
      Icon = <Kakao width={18} height={18} />;
      break;
    case "google":
      message = `구글로 ${action}`;
      Icon = <Google width={18} height={18} />;
      break;
    case "email":
      message = `이메일로 ${action}`;
      Icon = <Email width={18} height={18} />;
      break;
    default:
      break;
  }

  return (
    <>
      <div className={buttonStyle}>
        {Icon}
        {message}
      </div>
    </>
  );
};

export default SignButton;
