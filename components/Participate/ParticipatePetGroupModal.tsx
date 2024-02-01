import { NextPage } from "next";
import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import ParticipatePetGroupForm from "./ParticipatePetGroupForm";
import sampleImageSrc from "@/assets/edit.svg?url";

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}

const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  return (
    <section className={styles.modalContainer}>
      <button onClick={onClickClose}>
        <Image src={sampleImageSrc} alt="모달 종료 버튼 이미지" width={30} height={30} />
      </button>
      <p>전달 받으신 반려동물 등록 코드를 입력해주세요.</p>
      <ParticipatePetGroupForm />
    </section>
  );
};

export default ParticipatePetGroupModal;
