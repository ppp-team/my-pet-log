import AddIcon from "@/public/icons/add.svg?url";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./style.css";

const EmptyDiaryList = () => {
  return (
    <>
      <div className={styles.root}>
        <p className={styles.p}>
          아직 일기가 없어요.
          <br />첫 일기를 작성해보세요!
        </p>
        <Link href={"/diary/create"}>
          <div className={styles.button}>
            <Image src={AddIcon} alt="add icon" width={36} height={36} className={styles.addIcon} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default EmptyDiaryList;
