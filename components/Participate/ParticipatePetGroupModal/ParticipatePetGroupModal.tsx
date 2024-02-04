import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import closeIconSrc from "@/assets/close.svg?url";
import ParticipatePetGroupWithCodeForm from "../ParticipatePetGroupWithCodeForm/ParticipatePetGroupWithCodeForm";
import ReceivedInvitationList from "../ReceivedInvitationList/ReceivedInvitationList";

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
      <ParticipatePetGroupWithCodeForm />
      <ReceivedInvitationList />
    </section>
  );
};

export default ParticipatePetGroupModal;
