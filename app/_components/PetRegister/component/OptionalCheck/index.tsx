import CheckIcon from "@/public/icons/check/grey-check-icon.svg";
import ActiveIcon from "@/public/icons/check/orange-check-icon.svg";
import * as styles from "./style.css";

interface OptionalMessageProps {
  message?: string;
  onClearInput: () => void;
  isActive: boolean;
}

const OptionalMessage = ({ message, onClearInput, isActive }: OptionalMessageProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.itemWrapper} onClick={() => onClearInput()}>
        {isActive ? <ActiveIcon width={13} height={13} fill={"var(--White)"} /> : <CheckIcon width={13} height={13} fill={"var(--Gray81)"} />}
        <span className={`${styles.checked} ${isActive ? styles.active : ""}`}>{message}</span>
      </div>
    </section>
  );
};

export default OptionalMessage;
