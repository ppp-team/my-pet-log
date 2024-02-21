import * as styles from "./style.css";
import CloseIcon from "@/public/icons/close.svg?url";
import Image from "next/image";
import ModalContainer from "@/app/_components/ModalContainer";
import Register from "@/public/icons/pet-register-comfirm-icon.svg";
import Signup from "@/public/icons/signup-confirm-icon.svg";

interface ModalProps {
  type: "register" | "signup";
  onClick: () => void;
  onClose: () => void;
}

const ImageModal = ({ type, onClick, onClose }: ModalProps) => {
  let title = "";
  let text1 = "";
  let text2 = "";
  let modalImage = null;
  let buttonText = "";

  switch (type) {
    case "register":
      title = `마이펫 등록 완료!`;
      text1 = `마이펫관리에서 해당 동물의 정보를 수정할 수 있습니다.`;
      modalImage = <Register width={138} height={104} alt="등록 이미지" />;
      buttonText = `확인`;
      break;

    case "signup":
      title = `가입이 완료되었습니다!`;
      text1 = `계정이 생성되었습니다.`;
      text2 = `마이펫로그를 시작해볼까요?`;
      modalImage = <Signup width={138} height={104} alt="가입 이미지" />;
      buttonText = `로그인`;
      break;
    default:
      break;
  }
  return (
    <ModalContainer>
      <section className={styles.container}>
        <div className={styles.iconWrapper}>
          <Image style={{ cursor: "pointer" }} src={CloseIcon} alt="close icon" width={24} height={24} onClick={onClose} />
        </div>
        <div className={styles.imageWrapper}>{modalImage}</div>
        <p className={styles.title}>{title}</p>
        <span className={styles.text}>{text1}</span>
        <span className={styles.text}>{text2}</span>
        <button onClick={onClick} className={styles.button}>
          {buttonText}
        </button>
      </section>
    </ModalContainer>
  );
};

export default ImageModal;
