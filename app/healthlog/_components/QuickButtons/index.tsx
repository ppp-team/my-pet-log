import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";
import React from "react";
import { usePostLogsMutation } from "@/app/_hooks/usePostLogMutation";
import feedIconSrc from "@/public/icons/feed-icon.svg?url";
import healthIconSrc from "@/public/icons/health-icon.svg?url";
import walkIconSrc from "@/public/icons/walk-icon.svg?url";
import treatIconSrc from "@/public/icons/treat-icon.svg?url";
import writeIconSrc from "@/public/icons/write-pencil-icon.svg?url";
import groomingIconSrc from "@/public/icons/grooming-icon.svg?url";

const buttonData = [
  { src: feedIconSrc, typeName: "FEED", text: "사료", colorClass: "" },
  { src: treatIconSrc, typeName: "TREAT", text: "간식/영양제", colorClass: styles.secondColorButton },
  { src: walkIconSrc, typeName: "WALK", text: "산책", colorClass: styles.thirdColorButton },
  { src: healthIconSrc, typeName: "HEALTH", text: "건강", colorClass: "" },
  { src: groomingIconSrc, typeName: "GROOMING", text: "위생/미용", colorClass: styles.secondColorButton },
  { src: writeIconSrc, typeName: "CUSTOM", text: "직접 입력", colorClass: styles.thirdColorButton, link: "/healthlog/edit" },
];

const QuickButtons = () => {
  const { mutate: postLog } = usePostLogsMutation();
  const formattedDateTime = new Date().toISOString().slice(0, 16);
  const petId = 6;
  const managerId = "sohee11289110";

  const handleButtonClick = (typeName: string) => {
    const [datePart] = formattedDateTime.split("T");
    const [year, month, day] = datePart.split("-").map(Number);

    const logData = {
      petId: petId,
      logData: {
        type: typeName,
        subType: null,
        isCustomLocation: false,
        kakaoLocationId: null,
        datetime: formattedDateTime,
        isComplete: true,
        isImportant: false,
        memo: null,
        managerId: managerId,
      },
      date: { year, month, day },
    };

    postLog(logData);
  };

  return (
    <div className={styles.buttonContainer}>
      {buttonData.map(({ src, typeName, text, colorClass, link }, index) =>
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
            <button className={`${styles.button} ${colorClass}`} onClick={() => handleButtonClick(`${typeName}`)}>
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
