"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./page.css";

const Page = () => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTypeButtonClick = () => {
    setShowDetails(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    // 폼 제출 로직
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩 작성하기</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems}>
          <div className={styles.item}>
            <label>건강 기록일</label>
            <input type="date" {...register("recordDate")} />
          </div>
          <div className={styles.item}>
            <label>시간</label>
            <input type="time" {...register("time")} />
          </div>
          <div className={styles.item}>
            <label>담당자 선택</label>
            <input {...register("manager")} />
          </div>
          <div className={styles.item}>
            <label>주요 항목(type)</label>
            <button type="button" onClick={handleTypeButtonClick}>
              사료 +
            </button>
            <button type="button" onClick={handleTypeButtonClick}>
              건강 +
            </button>
            <button type="button" onClick={handleTypeButtonClick}>
              산책 +
            </button>
            <button type="button" onClick={handleTypeButtonClick}>
              간식/영양제 +
            </button>
            <button type="button" onClick={handleTypeButtonClick}>
              위생/미용 +
            </button>
            <button type="button" onClick={handleTypeButtonClick}>
              직접 입력 +
            </button>
          </div>
          {showDetails && (
            <>
              <div className={styles.item}>
                <label>세부 사항/장소/타이틀(subtype)</label>
                <input {...register("subtype")} />
              </div>
              <div className={styles.item}>
                <label>메모</label>
                <textarea {...register("memo")}></textarea>
              </div>
              <div className={styles.item}>
                <label>중요 체크</label>
                <input type="checkbox" {...register("isImportant")} />
              </div>
            </>
          )}
          <div>
            <button type="submit">저장</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
