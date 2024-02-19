import * as styles from "./ConfirmMessage.css";
import Image from "next/image";
import ConfirmIconSrc from "@/public/icons/confirm.svg?url";

interface ConfirmMessageProps {
  message?: string;
}

const ConfirmMessage = ({ message }: ConfirmMessageProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.icon} src={ConfirmIconSrc} alt="완료 아이콘" width={12} height={12} />
      <span className={styles.confirm}>{message}</span>
    </div>
  );
};

export default ConfirmMessage;
