"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
      </div>
    </>
  );
};

export default page;
