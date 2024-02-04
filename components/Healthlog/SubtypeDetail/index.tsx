import SearchLocation from "@/components/Healthlog/SearchLocation";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import * as styles from "./style.css";

interface SubtypeDetailProps {
  visibleSubtype: keyof typeof subtypeOptions | "CUSTOM" | "WALK";
  register: UseFormRegister<any>;
}

const SubtypeDetail: React.FC<SubtypeDetailProps> = ({ visibleSubtype, register }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const myKey = process.env.NEXT_PUBLIC_API_KEY || "default-key";

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

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
      {["FEED", "HEALTH", "TREAT", "GROOMING"].includes(visibleSubtype) && (
        <div className={styles.inputWrapper}>
          <label>세부 사항</label>
          <select className={styles.selectBox} onChange={handleSelectChange} value={selectedOption}>
            {subtypeOptions[visibleSubtype as keyof typeof subtypeOptions].map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {selectedOption === "직접 입력" && <input className={styles.inputBox} {...register("subtype")} />}
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
