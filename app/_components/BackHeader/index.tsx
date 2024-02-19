"use client";

import * as styles from "./style.css";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackHeader = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {title}
      <div className={styles.backIcon} onClick={() => router.back()}>
        <Image src={BackIcon} alt="backward icon" width={25} height={25} />
      </div>
    </header>
  );
};

export default BackHeader;
