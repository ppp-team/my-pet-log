import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";
import feedIconSrc from "@/public/icons/feed-icon.svg?url";
import healthIconSrc from "@/public/icons/health-icon.svg?url";
import walkIconSrc from "@/public/icons/walk-icon.svg?url";
import treatIconSrc from "@/public/icons/treat-icon.svg?url";
import writeIconSrc from "@/public/icons/write-pencil-icon.svg?url";
import groomingIconSrc from "@/public/icons/grooming-icon.svg?url";

const buttonData = [
  { src: feedIconSrc, text: "사료", colorClass: "" },
  { src: treatIconSrc, text: "간식/영양제", colorClass: styles.secondColorButton },
  { src: walkIconSrc, text: "산책", colorClass: styles.thirdColorButton },
  { src: healthIconSrc, text: "건강", colorClass: "" },
  { src: groomingIconSrc, text: "위생/미용", colorClass: styles.secondColorButton },
  { src: writeIconSrc, text: "직접 입력", colorClass: styles.thirdColorButton, link: "/healthlog/edit" },
];

const QuickButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      {buttonData.map(({ src, text, colorClass, link }, index) =>
        link ? (
          <Link href={link} key={index}>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.button} ${colorClass}`}>
                <Image src={src} width={40} height={40} alt={`${text} 아이콘 이미지`} />
              </button>
              <span className={styles.buttonText}>{text}</span>
            </div>
          </Link>
        ) : (
          <div className={styles.buttonWrapper} key={index}>
            <button className={`${styles.button} ${colorClass}`}>
              <Image src={src} width={40} height={40} alt={`${text} 아이콘 이미지`} />
            </button>
            <span className={styles.buttonText}>{text}</span>
          </div>
        ),
      )}
    </div>
  );
};

export default QuickButtons;
