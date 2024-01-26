"use client";

import * as styles from "./page.css";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩 작성하기</p>
        <form className={styles.formItems}>
          <div className={styles.item}>
            <label>건강 기록일</label>
            <input type="date"></input>
          </div>
          <div className={styles.item}>
            <label>시간</label>
            <input type="time"></input>
          </div>
          <div className={styles.item}>
            <label>담당자 선택</label>
            <input></input>
          </div>
          <div className={styles.item}>
            <label>대분류</label>
            <div>
              <button> 사료 + </button>
              <button> 간식 / 영양제 + </button>
              <button> 산책 + </button>
              <button> 건강 + </button>
              <button> 위생 / 미용 + </button>
              <button> 직접 입력 + </button>
            </div>
          </div>
          <div className={styles.item}>
            <label>세부사항</label>
            <input></input>
          </div>
          <div className={styles.item}>
            <label>메모</label>
            <textarea></textarea>
          </div>
          <div>
            <label>중요 체크</label>
            <input type="checkbox"></input>
          </div>
          <div>
            <button>저장</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
