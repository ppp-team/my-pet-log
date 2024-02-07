import { useState } from "react";
import * as styles from "./style.css";
import CheckIcon from "@/assets/confirm.svg";
import Image from "next/image";

interface ErrorMessageProps {
  message?: string;
}

const OptionalMessage = ({ message }: ErrorMessageProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={styles.container} onClick={handleClick}>
      <CheckIcon width={12} height={12} style={{ color: isActive ? "var(--MainOrange)" : "var(--Gray81)" }} />
      <span className={`${styles.checked} ${isActive ? styles.active : ""}`}>{message}</span>
    </section>
  );
};

export default OptionalMessage;
