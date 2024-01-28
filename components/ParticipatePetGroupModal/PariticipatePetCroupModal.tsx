import { NextPage } from "next";
import "@/app/globals.css";
import * as styles from "./PariticipatePetCroupModal.css";

const ParticipatePetGroupModal = () => {
  return (
    <main className={styles.backDropContainer}>
      <section className={styles.modalContainer}>
        <p>전달 받으신 반려동물 등록 코드를 입력해주세요.</p>
      </section>
    </main>
  );
};

export default ParticipatePetGroupModal;
