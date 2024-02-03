import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";
import ParticipatePetGroupWithCodeForm from "../ParticipatePetGroupWithCodeForm/ParticipatePetGroupWithCodeForm";
import ReceivedInvitationList from "../ReceivedInvitationList/ReceivedInvitationList";

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}

const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  return (
    <section className={styles.modalContainer}>
      <button onClick={onClickClose}>
        <Image src={sampleImageSrc} alt="모달 종료 버튼 이미지" width={30} height={30} />
      </button>
      <p>
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
