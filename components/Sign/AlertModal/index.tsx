import * as styles from "./styles.css";

interface AlertProps {
  onClick?: () => void;
}

const AlertModal = ({ onClick }: AlertProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>{"정말 삭제하시겠습니까?"}</div>
      <div className={styles.buttonWrapper}>
        <button className={styles.styledButton} onClick={onClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
