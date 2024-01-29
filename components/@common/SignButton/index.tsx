import React from "react";
import { signButton } from "./style.css";

interface SignButtonProps {
  type: "kakao" | "google" | "email";
  action: "회원가입하기" | "로그인하기";
}

const SignButton = ({ type, action }: SignButtonProps) => {
  let message = "";

  switch (type) {
    case "kakao":
      message = `카카오로 ${action}`;
      break;
    case "google":
      message = `구글로 ${action}`;
      break;
    case "email":
      message = `이메일로 ${action}`;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className={signButton}>{message}</div>
    </div>
  );
};

export default SignButton;
