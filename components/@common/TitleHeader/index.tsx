"use client";

import * as styles from "./style.css";
import CloseIcon from "@/assets/close.svg?url";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TitleHeaderProps {
  title: string; // 제목
  redirectPath: string; // x 아이콘 클릭 시 갈 경로
}

const TitleHeader = ({ title, redirectPath }: TitleHeaderProps) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {title}
      <div className={styles.closeIcon} onClick={() => router.push(redirectPath)}>
        <Image src={CloseIcon} alt="close icon" width={25} height={25} />
      </div>
    </header>
  );
};

export default TitleHeader;
