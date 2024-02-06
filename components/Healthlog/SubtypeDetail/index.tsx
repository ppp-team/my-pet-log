import SearchLocation from "@/components/Healthlog/SearchLocation";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import React, { useState, useEffect, useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import * as styles from "./style.css";

interface SubtypeDetailProps {
  visibleSubtype: keyof typeof subtypeOptions | "CUSTOM" | "WALK";
  register: UseFormRegister<any>;
}

const SubtypeDetail: React.FC<SubtypeDetailProps> = ({ visibleSubtype, register }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const myKey = process.env.NEXT_PUBLIC_API_KEY || "default-key";

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
        <div className={styles.selectWrapper} ref={dropdownRef}>
          <button className={styles.selectBox} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {selectedOption || "세부사항 선택"}
          </button>
          {dropdownOpen && (
            <ul className={styles.optionsList}>
              {subtypeOptions[visibleSubtype as keyof typeof subtypeOptions].map((option: string, index: number) => (
                <li key={index}>
                  <button type="button" className={styles.optionButton} onClick={() => handleOptionClick(option)} {...register("subtype")}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {selectedOption === "직접 입력" && <input className={styles.inputBox} placeholder="직접 입력하세요" {...register("subtype")} autoFocus />}
        </div>
      )}

      <div className={styles.inputWrapper}>
        <label>메모</label>
        <textarea className={styles.textBox} {...register("memo")}></textarea>
      </div>
      <div className={styles.checkboxWrapper}>
        <label htmlFor="isImportantCheckbox" className={styles.checkBox}>
          중요 체크
          <input type="checkbox" className={styles.inputCheckbox} id="isImportantCheckbox" {...register("isImportant")} />
          <span className={styles.checkBoxOn}></span>
        </label>
      </div>
    </div>
  );
};

export default SubtypeDetail;
