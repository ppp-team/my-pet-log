import React from "react";
import SearchLocation from "@/components/Healthlog/SearchLocation";
import * as styles from "./style.css";
import { UseFormRegister } from "react-hook-form";

interface SubtypeDetailProps {
  visibleSubtype: string;
  register: UseFormRegister<any>;
}

const SubtypeDetail: React.FC<SubtypeDetailProps> = ({ visibleSubtype, register }) => {
  const myKey = process.env.NEXT_PUBLIC_API_KEY || "default-key";

  return (
    <div className={styles.container}>
      {visibleSubtype === "WALK" && (
        <div className={styles.inputWrapper}>
          <label>장소</label>
          <SearchLocation appKey={myKey} />
        </div>
      )}
      {visibleSubtype === "CUSTOM" && (
        <div className={styles.inputWrapper}>
          <label>주요 항목 (직접 입력)</label>
          <input className={styles.inputBox} {...register("subtype")} />
        </div>
      )}
      {visibleSubtype !== "WALK" && visibleSubtype !== "CUSTOM" && (
        <div className={styles.inputWrapper}>
          <label>세부 사항</label>
          <input className={styles.inputBox} {...register("subtype")} />
        </div>
      )}
      <div className={styles.inputWrapper}>
        <label>메모</label>
        <textarea className={styles.textBox} {...register("memo")}></textarea>
      </div>
      <div className={styles.inputWrapper}>
        <label>중요 체크</label>
        <input className={styles.checkBox} type="checkbox" {...register("isImportant")} />
      </div>
    </div>
  );
};

export default SubtypeDetail;
