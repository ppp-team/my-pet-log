import { getMe } from "@/app/_api/users";
import { usePostLogsMutation } from "@/app/_hooks/usePostLogMutation";
import { UserType } from "@/app/_types/user/types";
import getKRDateTime from "@/app/_utils/getKRDateTime";
import feedIconSrc from "@/public/icons/feed-icon.svg?url";
import groomingIconSrc from "@/public/icons/grooming-icon.svg?url";
import healthIconSrc from "@/public/icons/health-icon.svg?url";
import treatIconSrc from "@/public/icons/treat-icon.svg?url";
import walkIconSrc from "@/public/icons/walk-icon.svg?url";
import writeIconSrc from "@/public/icons/write-pencil-icon.svg?url";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./style.css";

interface QuickButtonsProps {
  petId: number;
  selectedDate: string;
}

const buttonData = [
  { src: feedIconSrc, typeName: "FEED", text: "사료", colorClass: "" },
  { src: treatIconSrc, typeName: "TREAT", text: "간식/영양제", colorClass: styles.secondColorButton },
  { src: walkIconSrc, typeName: "WALK", text: "산책", colorClass: styles.thirdColorButton },
  { src: healthIconSrc, typeName: "HEALTH", text: "건강", colorClass: "" },
  { src: groomingIconSrc, typeName: "GROOMING", text: "위생/미용", colorClass: styles.secondColorButton },
  { src: writeIconSrc, typeName: "CUSTOM", text: "직접 입력", colorClass: styles.thirdColorButton, link: "/healthlog/create" },
];

const QuickButtons = ({ petId, selectedDate }: QuickButtonsProps) => {
  const currentTime = new Date().toTimeString().split(" ")[0];
  const dateTimeForLog = `${selectedDate}T${currentTime}`;

  const { mutate: postLog } = usePostLogsMutation();
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  const handleButtonClick = (typeName: string) => {
    const [datePart] = selectedDate.split("T");
    const [year, month, day] = datePart.split("-").map(Number);
    const selectedDateTime = new Date(year, month - 1, day);
    const currentDateTime = new Date();
    currentDateTime.setHours(0, 0, 0, 0);

    const isFutureDate = selectedDateTime > currentDateTime;

    const logData = {
      petId: petId,
      logData: {
        type: typeName,
        subType: null,
        isCustomLocation: typeName === "WALK",
        kakaoLocationId: null,
        datetime: dateTimeForLog,
        isComplete: !isFutureDate,
        isImportant: false,
        memo: null,
        managerId: String(user?.id),
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
