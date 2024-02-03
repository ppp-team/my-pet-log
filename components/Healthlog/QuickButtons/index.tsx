import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";
import feedIconSrc from "@/assets/feed_icon.svg?url";
import healthIconSrc from "@/assets/health_icon.svg?url";
import walkIconSrc from "@/assets/walk_icon.svg?url";
import treatIconSrc from "@/assets/treat_icon.svg?url";

const QuickButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <Image src={feedIconSrc} width={40} height={40} alt={"사료 아이콘 이미지"} />
        </button>
        <span className={styles.buttonText}>사료</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.secondColorButton}`}>
          <Image src={treatIconSrc} width={40} height={40} alt={"간식 아이콘 이미지"} />
        </button>
        <span className={styles.buttonText}>간식/영양제</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.thirdColorButton}`}>
          <Image src={walkIconSrc} width={40} height={40} alt={"산책 아이콘 이미지"} />
        </button>
        <span className={styles.buttonText}>산책</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <Image src={healthIconSrc} width={40} height={40} alt={"건강 아이콘 이미지"} />
        </button>
        <span className={styles.buttonText}>건강</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.secondColorButton}`}>
          <Image src={feedIconSrc} width={40} height={40} alt={"미용 아이콘 이미지"} />
        </button>
        <span className={styles.buttonText}>위생/미용</span>
      </div>
      <Link href="/healthlog/edit">
        <div className={styles.buttonWrapper}>
          <button className={`${styles.button} ${styles.thirdColorButton}`}>
            <Image src={feedIconSrc} width={40} height={40} alt={"입력 아이콘 이미지"} />
          </button>
          <span className={styles.buttonText}>직접 입력</span>
        </div>
      </Link>
    </div>
  );
};

export default QuickButtons;
