"use client";

import * as styles from "./style.css";
import CloseIcon from "@/public/icons/close.svg?url";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TitleHeaderProps {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {title}
      <div className={styles.closeIcon} onClick={() => router.back()}>
        <Image src={CloseIcon} alt="close icon" width={25} height={25} />
      </div>
    </header>
  );
};

export default TitleHeader;
