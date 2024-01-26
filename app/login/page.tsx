"use client";
import React from "react";
import Link from "next/link";
import SignButton from "@/components/commons/buttons/SignButton";

const page = () => {
  return (
    <>
      <div>
        회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
      </div>
      <SignButton type="kakao" action="로그인하기" />
      <SignButton type="google" action="로그인하기" />
      <Link href="/login/email">
        <SignButton type="email" action="로그인하기" />
      </Link>
    </>
  );
};

export default page;
