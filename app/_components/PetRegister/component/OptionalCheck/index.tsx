import { useState } from "react";
import * as styles from "./style.css";
import CheckIcon from "@/public/icons/optional-check-icon.svg";
import ActiveIcon from "@/public/icons/optional-check-active-icon.svg";

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
        {isActive ? <ActiveIcon width={13} height={13} fill={"var(--White)"} /> : <CheckIcon width={13} height={13} fill={"var(--Gray81)"} />}
        <span className={`${styles.checked} ${isActive ? styles.active : ""}`}>{message}</span>
      </div>
    </section>
  );
};

export default OptionalMessage;
