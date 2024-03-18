"use client";

import * as styles from "./style.css";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackHeader = ({ title, styleTop }: { title: string; styleTop?: string }) => {
  const router = useRouter();

  return (
    <header className={styles.header} style={{ top: styleTop || "5.6rem" }}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.backIcon} onClick={() => router.back()}>
        <Image src={BackIcon} alt="backward icon" width={25} height={25} />
      </div>
    </header>
  );
};

export default BackHeader;
