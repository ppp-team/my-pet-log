"use client";
import Link from "next/link";
import "@/app/globals.css";
import Pagination from "@/components/Pagination";
import * as styles from "@/app/onboarding/page.css";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/signup">
          <button className={styles.button}>건너뛰기</button>
        </Link>
        <Pagination />
      </div>
    </>
  );
};

export default Page;
