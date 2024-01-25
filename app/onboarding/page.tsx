import Link from "next/link";
import "@/app/globals.css";
import Pagination from "./_components/Pagination";

const Page = () => {
  return (
    <>
      {/* 건너뛰기 버튼은 링크 연결 */}
      <button>건너뛰기</button>
      <Pagination />
    </>
  );
};

export default Page;
