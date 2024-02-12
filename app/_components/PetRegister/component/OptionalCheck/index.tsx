import { useState } from "react";
import * as styles from "./style.css";
import CheckIcon from "@/public/icons/confirm.svg";
import Image from "next/image";

interface OptionalMessageProps {
  message?: string;
  onClearInput: () => void;
}

const OptionalMessage = ({ message, onClearInput }: OptionalMessageProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClearInput();
    setIsActive(!isActive);
  };

  return (
    <section className={styles.container}>
      <div className={styles.itemWrapper} onClick={handleClick}>
        <CheckIcon width={12} height={12} style={{ color: isActive ? "var(--MainOrange)" : "var(--Gray81)" }} />
        <span className={`${styles.checked} ${isActive ? styles.active : ""}`}>{message}</span>
      </div>
    </section>
  );
};

export default OptionalMessage;
