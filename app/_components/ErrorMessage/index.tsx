import * as styles from "./style.css";
import WarningIcon from "@/public/icons/circle-warning.svg?url";
import Image from "next/image";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <section className={styles.container}>
      <Image src={WarningIcon} alt="warning icon" width={12} height={12} />
      <div className={styles.error}>{message}</div>
    </section>
  );
};

export default ErrorMessage;
