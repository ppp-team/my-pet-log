import * as styles from "./style.css";

const LogDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>subtype</div>
          <div>memo</div>
        </div>
        <button className={styles.editButton}>편집하기</button>
      </div>
    </>
  );
};

export default LogDetail;
