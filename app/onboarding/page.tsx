"use client";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const Page = () => {
  return (
    <div>
      <Link href="/signup">
        <button>건너뛰기</button>
      </Link>
      <Pagination />
    </div>
  );
};

export default Page;
