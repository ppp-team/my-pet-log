import { NextPage } from "next";
import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import ParticipatePetGroupForm from "./ParticipatePetGroupForm";

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}
const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  return (
    <section className={styles.backDropContainer} onClick={onClickClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>전달 받으신 반려동물 등록 코드를 입력해주세요.</p>
        <ParticipatePetGroupForm />
      </div>
    </section>
  );
};

export default ParticipatePetGroupModal;
