"use client";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const Page = () => {
  return (
    <>
      <Link href="/signup">
        <button>건너뛰기</button>
      </Link>
      <Pagination />
    </>
  );
};

export default Page;
