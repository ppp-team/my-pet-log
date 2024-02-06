import * as styles from "./style.css";
import Image from "next/image";
import LetterIcon from "@/assets/letter.png";
import { useModal } from "@/hooks/useModal";
import ModalContainer from "@/components/@common/ModalContainer";
import InvitationForm from "@/components/@common/InvitationForm/InvitationForm";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/constants/inputConstant";
import CloseIcon from "@/assets/close.svg?url";
import InviteCode from "./InviteCode";

const Invite = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleInviteConfirm = () => {
    closeModalFunc();
    // 초대 로직 구현...하긔
  };

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
            <InvitationForm
              formTitle="초대할 이메일"
              inputPlaceholder={PLACEHOLDER.inviteEmail}
              requiredErrorMessage={ERROR_MESSAGE.emailRequired}
              invalidError={{
                getIsInvalid: (value) => {
                  return value === "failed" ? true : false;
                },
                message: ERROR_MESSAGE.emailCheck,
              }}
            />
            <InviteCode />
          </section>
        </ModalContainer>
      )}
    </header>
  );
};

export default Invite;
