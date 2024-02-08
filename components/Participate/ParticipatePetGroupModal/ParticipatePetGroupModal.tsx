import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import closeIconSrc from "@/assets/close.svg?url";
import InvitationForm from "../../@common/InvitationForm/InvitationForm";
import ReceivedInvitationList from "../ReceivedInvitationList/ReceivedInvitationList";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/constants/inputConstant";

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}

const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  return (
    <section className={styles.modalContainer}>
      <button onClick={onClickClose} className={styles.closeButton}>
        <Image src={closeIconSrc} alt="모달 종료 버튼 이미지" width={24} height={24} />
      </button>
      <p className={styles.title}>
        초대 내역을 승낙하거나
        <br />
        직접 초대 코드를 입력해주세요.
      </p>
      <div className={styles.formWrapper}>
        <InvitationForm
          formTitle="초대 코드"
          inputPlaceholder={PLACEHOLDER.receivedInvitationCode}
          requiredErrorMessage={ERROR_MESSAGE.receivedInvitationCodeRequired}
          invalidError={{
            getIsInvalid: (value) => {
              return value === "failed" ? true : false;
            },
            message: ERROR_MESSAGE.receivedInvitationCodeInvalid,
          }}
        />
      </div>
      <ReceivedInvitationList />
    </section>
  );
};

export default ParticipatePetGroupModal;
