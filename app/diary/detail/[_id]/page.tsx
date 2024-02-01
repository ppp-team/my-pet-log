"use client";

import * as styles from "./style.css";

const DiaryDetailPage = () => {
  return (
    <>
      <div className={styles.root}>
        <section className={styles.header}>
          <h6>말티즈</h6>
          <h3>중랑천 산책</h3>
        </section>
        <section className={styles.main}>
          <div>해피누나</div>
          <p>오늘은 날이 풀린겸 중랑천 산책했다.</p>
        </section>
        <section className={styles.comments}></section>
        <div className={styles.commentInput}></div>
      </div>
    </>
  );
};

export default DiaryDetailPage;
