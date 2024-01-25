"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        이미 회원이신가요? <Link href="/login">로그인하기</Link>
      </div>
    </>
  );
};

export default page;
