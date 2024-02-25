import * as styles from "./style.css";
import CloseIcon from "@/public/icons/close.svg?url";
import Image from "next/image";
import ModalContainer from "@/app/_components/ModalContainer";
import Register from "@/public/images/modal/RegisterImage.png";
import Signup from "@/public/images/modal/SignupImage.png";
import Warning from "@/public/images/modal/warningImage.png";
import Edit from "@/public/images/modal/editImage.png";

interface ModalProps {
  type: "register" | "signup" | "edit" | "deletePet";
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
      text1 = `마이펫관리에서 해당 동물의 정보를`;
      text2 = `수정할 수 있습니다.`;
      modalImage = { src: Register, width: 138, height: 104 };
      buttonText = `확인`;
      break;

    case "signup":
      title = `가입이 완료되었습니다!`;
      text1 = `계정이 생성되었습니다.`;
      text2 = `마이펫로그를 시작해볼까요?`;
      modalImage = { src: Edit, width: 142, height: 130 };
      buttonText = `확인`;
      break;

    case "edit":
      title = `마이펫 수정 완료!`;
      text1 = `마이펫의 정보가`;
      text2 = `성공적으로 수정되었습니다.`;
      modalImage = { src: Warning, width: 150, height: 142 };
      buttonText = `확인`;

    case "deletePet":
      title = `정말 삭제하시겠습니까?`;
      text1 = `삭제하기 버튼 선택 시`;
      text2 = `마이펫을 다시 복구할 수 없습니다.`;
      modalImage = { src: Warning, width: 110, height: 95 };
      buttonText = `삭제`;
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
        <div className={styles.imageWrapper}>{modalImage && <Image src={modalImage.src} alt="content image" width={modalImage.width} height={modalImage.height} />}</div>
        {/* <section className={styles.textContainer}> */}
        <section className={styles.bottomContainer}>
          <p className={styles.title}>{title}</p>
          <div className={styles.textWrapper}>
            <span className={styles.text}>{text1}</span>
            <span className={styles.text}>{text2}</span>
          </div>
          {/* </section> */}
          <button onClick={onClick} className={styles.button}>
            {buttonText}
          </button>
        </section>
      </section>
    </ModalContainer>
  );
};

export default ImageModal;
