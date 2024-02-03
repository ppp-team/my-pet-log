import * as styles from "./style.css";

const EmptyHealthLog = () => {
  return (
    <>
      <div className={styles.container}>
        <p>아직 건강 기록이 없어요.</p>
        <p>원하는 날짜를 선택하고 첫 기록을 작성해보세요!</p>
      </div>
    </>
  );
};

export default EmptyHealthLog;
