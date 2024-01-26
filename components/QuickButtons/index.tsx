import Link from "next/link";
import * as styles from "./style.css";

const QuickButtons = () => {
  return (
    <>
      <button className={styles.button}>테스트</button>
      <button className={styles.button}>테스트</button>
      <button className={styles.button}>테스트</button>
      <button className={styles.button}>사료</button>
      <button className={styles.button}>간식 / 영양제</button>
      <button className={styles.button}>산책</button>
      <button className={styles.button}>건강</button>
      <button className={styles.button}>위생 / 미용</button>
      <Link href="/healthlog/edit">
        <button className={styles.button}>직접 입력</button>
      </Link>
    </>
  );
};

export default QuickButtons;
