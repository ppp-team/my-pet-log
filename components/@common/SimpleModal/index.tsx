import Modal from "@/components/@common/Modal";
import * as styles from "./style.css";
import CloseIcon from "@/assets/close.svg?url";
import Image from "next/image";

interface AlertModalProps {
  text: string; // 로그아웃 하시겠습니까?
  buttonText: string; // 확인
  onClick: () => void; // 확인 누를 시
  onClose: () => void; // 닫기 버튼 누를 시
}

const SimpleModal = ({ text, buttonText, onClick, onClose }: AlertModalProps) => {
  return (
    <Modal>
      <section className={styles.container}>
        <div className={styles.iconWrapper}>
          <Image src={CloseIcon} alt="close icon" width={24} height={24} onClick={onClose} />
        </div>
        <div className={styles.text}>{text}</div>
        <button onClick={onClick} className={styles.button}>
          {buttonText}
        </button>
      </section>
    </Modal>
  );
};

export default SimpleModal;
