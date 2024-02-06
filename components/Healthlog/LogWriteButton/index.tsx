import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";
import wrtieIconSrc from "@/assets/log-edit-icon.svg?url";

const LogWriteButton = () => {
  return (
    <Link href="/healthlog/edit">
      <button className={styles.button}>
        <Image src={wrtieIconSrc} width={24} height={24} alt={"입력 아이콘 이미지"} />
      </button>
    </Link>
  );
};

export default LogWriteButton;
