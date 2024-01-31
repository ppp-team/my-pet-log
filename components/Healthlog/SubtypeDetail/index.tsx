import React from "react";
import SearchLocation from "@/components/Healthlog/SearchLocation";
import * as styles from "./style.css";

const SubtypeDetail = ({ visibleSubtype, myKey, register }) => {
  return (
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
  );
};

export default SubtypeDetail;
