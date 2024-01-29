import { NextPage } from "next";
import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import ParticipatePetGroupForm from "./ParticipatePetGroupForm";

const ParticipatePetGroupModal = () => {
  return (
    <section className={styles.backDropContainer}>
      <section className={styles.modalContainer}>
        <p>전달 받으신 반려동물 등록 코드를 입력해주세요.</p>
        <ParticipatePetGroupForm />
      </section>
    </section>
  );
};

export default ParticipatePetGroupModal;
