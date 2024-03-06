import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";
import WriteIconURL from "@/public/icons/write.svg?url";

const LogWriteButton = () => {
  return (
    <Link href="/healthlog/create">
      <Image src={WriteIconURL} alt="write icon" width={60} height={60} className={styles.writeIcon} />
    </Link>
  );
};

export default LogWriteButton;
