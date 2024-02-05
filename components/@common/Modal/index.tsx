import * as styles from "./style.css";
import CloseIcon from "@/assets/close.svg?url";
import Image from "next/image";
import ModalContainer from "@/components/@common/ModalContainer";

interface ModalProps {
  text: string;
  buttonText: string;
  onClick: () => void;
  onClose: () => void;
}

const Modal = ({ text, buttonText, onClick, onClose }: ModalProps) => {
  return (
    <ModalContainer>
      <section className={styles.container}>
        <div className={styles.iconWrapper}>
          <Image src={CloseIcon} alt="close icon" width={24} height={24} onClick={onClose} />
        </div>
        <div className={styles.text}>{text}</div>
        <button onClick={onClick} className={styles.button}>
          {buttonText}
        </button>
      </section>
    </ModalContainer>
  );
};

export default Modal;
