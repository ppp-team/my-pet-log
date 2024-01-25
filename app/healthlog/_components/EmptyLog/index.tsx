import Link from "next/link";
import * as styles from "@/app/healthlog/_components/EmptyLog/style.css";

const EmptyLog = () => {
  return (
    <>
      <div className={styles.container}>
        <p>아직 건강 기록이 없어요.</p>
        <p>원하는 날짜를 선택하고 첫 기록을 작성해보세요!</p>
        <Link href="/healthlog/edit">
          <button className={styles.plusButton}> + </button>
        </Link>
      </div>
    </>
  );
};

export default EmptyLog;
