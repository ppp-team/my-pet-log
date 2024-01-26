import { NextPage } from "next";
import "@/app/globals.css";
import * as styles from "./page.css";

const ParticipatePetGroupPage: NextPage = () => {
  return (
    <main className={styles.backDropContainer}>
      <section className={styles.modalContainer}>펫 그룹 참여 모달 페이지</section>
    </main>
  );
};

export default ParticipatePetGroupPage;
