import * as styles from "./style.css";
import Image from "next/image";
import LetterIcon from "@/public/images/letter.png";
import { useModal } from "@/app/_hooks/useModal";
import ModalContainer from "@/app/_components/ModalContainer";
import InvitationForm from "@/app/settings/_components/InvitationForm";
import CloseIcon from "@/public/icons/close.svg?url";
import InviteCode from "./InviteCode";

const InviteModal = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  return (
    <header className={styles.header}>
      <section className={styles.invitation}>
        <p style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
          <Image src={LetterIcon} alt="letter icon" />
          <span>다른 펫메이트도 초대하고 싶다면?</span>
        </p>
        <button className={styles.invitationButton} onClick={openModalFunc}>
          초대하기 &gt;
        </button>
      </section>
      {isModalOpen && (
        <ModalContainer>
          <section className={styles.container}>
            <div className={styles.iconWrapper}>
              <Image src={CloseIcon} alt="close icon" width={24} height={24} onClick={closeModalFunc} />
            </div>
            <h3 className={styles.title}>초대하고 싶은 펫메이트의 이메일을 입력해주세요.</h3>
            <InvitationForm />
            <InviteCode />
          </section>
        </ModalContainer>
      )}
    </header>
  );
};

export default InviteModal;
