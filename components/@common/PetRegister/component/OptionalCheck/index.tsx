import * as styles from "./style.css";
import WarningIcon from "@/assets/circle-warning.svg?url";
import Image from "next/image";

interface ErrorMessageProps {
  message?: string;
}

const OptionalMessage = ({ message }: ErrorMessageProps) => {
  return (
    <section className={styles.container}>
      <Image src={WarningIcon} alt="check icon" width={12} height={12} />
      <span className={styles.checked}>{message}</span>
    </section>
  );
};

export default OptionalMessage;
