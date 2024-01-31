"use client";

import SubtypeDetail from "@/components/Healthlog/SubtypeDetail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./page.css";

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

  const buttonTypes = [
    { type: "FEED", label: "사료 +" },
    { type: "HEALTH", label: "건강 +" },
    { type: "WALK", label: "산책 +" },
    { type: "TREAT", label: "간식/영양제 +" },
    { type: "GROOMING", label: "위생/미용 +" },
    { type: "CUSTOM", label: "직접 입력 +" },
  ];

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
              {buttonTypes.map(({ type, label }) => (
                <button
                  key={type}
                  className={`${styles.typeButton} ${selectedType === type ? styles.typeButtonSelected : ""}`}
                  type="button"
                  onClick={() => handleTypeButtonClick(type)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {visibleSubtype && <SubtypeDetail visibleSubtype={visibleSubtype} myKey={myKey} register={register} />}
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
