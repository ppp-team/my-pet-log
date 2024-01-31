"use client";
import React from "react";
import Link from "next/link";
import SignButton from "@/components/@common/SignButton";

const page = () => {
  return (
    <>
      <div>
        이미 회원이신가요? <Link href="/login">로그인하기</Link>
        <SignButton type="kakao" action="회원가입하기" />
        <SignButton type="google" action="회원가입하기" />
        <Link href="/signup/email">
          <SignButton type="email" action="회원가입하기" />
        </Link>
      </div>
    </>
  );
};

export default page;
