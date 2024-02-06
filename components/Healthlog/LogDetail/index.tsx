import * as styles from "./style.css";

const LogDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>세부사항 내용</div>
          <div>메모 내용</div>
        </div>
        <button className={styles.editButton}>편집하기</button>
      </div>
    </>
  );
};

export default LogDetail;
