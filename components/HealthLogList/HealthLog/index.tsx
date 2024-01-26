import * as styles from "./style.css";

const HealthLog = () => {
  return (
    <>
      <div className={styles.container}>
        <div>✅</div>
        <div>❗️</div>
        <div>[대분류명]</div>
        <div>[10:00]</div>
        <div>[담당자명]</div>
      </div>
    </>
  );
};

export default HealthLog;
