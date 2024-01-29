"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./page.css";
import SearchLocation from "@/components/SearchLocation";

interface SubmitData {
  // 폼 필드 속성 타입 추가
}

const Page = () => {
  const [visibleSubtype, setVisibleSubtype] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const myKey = process.env.NEXT_PUBLIC_API_KEY || "default-key";

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleTypeButtonClick = (subtype: string) => {
    setVisibleSubtype(subtype);
    setSelectedType(subtype);
  };

  const onSubmit = (submitData: SubmitData) => {
    console.log(submitData);
    // 폼 제출 로직
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩 작성하기</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems}>
          <div className={styles.item}>
            <label>건강 기록일</label>
            <input className={styles.inputBox} type="date" {...register("recordDate")} />
          </div>
          <div className={styles.item}>
            <label>시간</label>
            <input className={styles.inputBox} type="time" {...register("time")} />
          </div>
          <div className={styles.item}>
            <label>담당자 선택</label>
            <input className={styles.inputBox} {...register("manager")} />
          </div>
          <div className={styles.item}>
            <label>주요 항목</label>
            <div>
              <button className={`${styles.typeButton} ${selectedType === "FEED" ? styles.typeButtonSelected : ""}`} type="button" onClick={() => handleTypeButtonClick("FEED")}>
                사료 +
              </button>
              <button
                className={`${styles.typeButton} ${selectedType === "HEALTH" ? styles.typeButtonSelected : ""}`}
                type="button"
                onClick={() => handleTypeButtonClick("HEALTH")}
              >
                건강 +
              </button>
              <button className={`${styles.typeButton} ${selectedType === "WALK" ? styles.typeButtonSelected : ""}`} type="button" onClick={() => handleTypeButtonClick("WALK")}>
                산책 +
              </button>
            </div>
            <div>
              <button className={`${styles.typeButton} ${selectedType === "TREAT" ? styles.typeButtonSelected : ""}`} type="button" onClick={() => handleTypeButtonClick("TREAT")}>
                간식/영양제 +
              </button>
              <button
                className={`${styles.typeButton} ${selectedType === "GROOMING" ? styles.typeButtonSelected : ""}`}
                type="button"
                onClick={() => handleTypeButtonClick("GROOMING")}
              >
                위생/미용 +
              </button>
              <button
                className={`${styles.typeButton} ${selectedType === "CUSTOM" ? styles.typeButtonSelected : ""}`}
                type="button"
                onClick={() => handleTypeButtonClick("CUSTOM")}
              >
                직접 입력 +
              </button>
            </div>
          </div>
          {visibleSubtype && (
            <>
              {visibleSubtype === "WALK" && (
                <div className={styles.item}>
                  <label>장소</label>
                  <SearchLocation appKey={myKey} />
                </div>
              )}
              {visibleSubtype === "CUSTOM" && (
                <div className={styles.item}>
                  <label>주요 항목 (직접 입력)</label>
                  <input className={styles.inputBox} {...register("subtype")} />
                </div>
              )}
              {visibleSubtype !== "WALK" && visibleSubtype !== "CUSTOM" && (
                <div className={styles.item}>
                  <label>세부 사항</label>
                  <input className={styles.inputBox} {...register("subtype")} />
                </div>
              )}
              <div className={styles.item}>
                <label>메모</label>
                <textarea className={styles.textBox} {...register("memo")}></textarea>
              </div>
              <div className={styles.item}>
                <label>중요 체크</label>
                <input className={styles.checkBox} type="checkbox" {...register("isImportant")} />
              </div>
            </>
          )}
          <div>
            <button className={styles.submitButton} type="submit">
              저장
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
