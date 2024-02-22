import SearchLocation, { Place } from "@/app/healthlog/_components/SearchLocation";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import React, { useEffect, useRef, useState } from "react";
import { FieldValues, FormState, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import * as styles from "./style.css";

export interface FormValues {
  type: string;
  subtype: string;
  memo: string;
  isImportant: boolean;
  kakaoLocationId?: number | null;
}

interface SubtypeDetailProps {
  visibleSubtype: keyof typeof subtypeOptions | "CUSTOM" | "WALK";
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FormState<FieldValues>["errors"];
  setValue: UseFormSetValue<FieldValues>;
  onLocationSelect: (id: number | null) => void;
  initialSubType?: string;
}

const MAX_LENGTH = { type: 15, subtype: 15, memo: 500 };

const SubtypeDetail: React.FC<SubtypeDetailProps> = ({ visibleSubtype, register, watch, errors, setValue, onLocationSelect, initialSubType }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const myKey = process.env.NEXT_PUBLIC_API_KEY || "default-key";

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setValue("subtype", option);
    setDropdownOpen(false);
  };

  const handlePlaceSelect = (place: Place) => {
    setValue("subtype", place.place_name);
    onLocationSelect(place.id);
  };

  useEffect(() => {
    if (initialSubType) {
      if (visibleSubtype === "CUSTOM" || visibleSubtype === "WALK") {
        setSelectedOption(initialSubType);
        setValue("subtype", initialSubType);
      } else if (subtypeOptions[visibleSubtype]?.includes(initialSubType)) {
        setSelectedOption(initialSubType);
        setValue("subtype", initialSubType);
      } else {
        setSelectedOption("직접 입력");
        setValue("subtype", initialSubType);
      }
    }
  }, [initialSubType, setValue, visibleSubtype]);

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
          <SearchLocation appKey={myKey} onSelectPlace={handlePlaceSelect} initialSubType={initialSubType} />
        </div>
      )}

      {visibleSubtype === "CUSTOM" && (
        <div className={styles.inputWrapper}>
          <label>주요 항목</label>
          <input
            className={styles.inputBox}
            placeholder="주요 항목을 직접 입력하세요"
            {...register("subtype", {
              required: "내용을 입력해주세요",
              maxLength: { value: MAX_LENGTH.subtype, message: `최대 ${MAX_LENGTH.subtype}자까지 작성할 수 있습니다.` },
            })}
            maxLength={MAX_LENGTH.subtype}
            value={watch("subtype")}
            onFocus={() => {
              setValue("subtype", "");
            }}
          />
          <p className={styles.p}>
            {watch("subtype")?.length ?? "0"}/{MAX_LENGTH.subtype}
          </p>
          {errors.subtype && <p className={styles.error}>{errors.subtype.message?.toString()}</p>}
        </div>
      )}
      {visibleSubtype !== "WALK" && visibleSubtype !== "CUSTOM" && (
        <div className={styles.selectWrapper} ref={dropdownRef}>
          <label>세부사항</label>
          <button type="button" className={`${styles.selectBox} ${dropdownOpen ? styles.selectBoxOpen : ""}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {selectedOption || "세부사항을 선택하세요"}
            <DropdownIcon className={`${styles.dropdownIcon} ${dropdownOpen ? styles.dropdownIconOpen : ""}`} />
          </button>

          {dropdownOpen && (
            <ul className={styles.optionsList}>
              {subtypeOptions[visibleSubtype]?.map((option, index) => (
                <li key={index}>
                  <button type="button" className={styles.optionButton} onClick={() => handleOptionClick(option)} {...register("subtype")}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {selectedOption === "직접 입력" && (
            <>
              <input
                className={styles.inputBox}
                placeholder="세부사항을 직접 입력하세요"
                {...register("subtype", {
                  required: "내용을 입력해주세요",
                  maxLength: { value: MAX_LENGTH.subtype, message: `최대 ${MAX_LENGTH.subtype}자까지 작성할 수 있습니다.` },
                })}
                value={watch("subtype")}
                onFocus={() => {
                  setValue("subtype", "");
                }}
              />
              <p className={styles.p}>
                {watch("subtype")?.length ?? "0"}/{MAX_LENGTH.subtype}
              </p>
              {errors.subtype && <p className={styles.error}>{errors.subtype.message?.toString()}</p>}
            </>
          )}
        </div>
      )}

      <div className={styles.inputWrapper}>
        <label>메모</label>
        <textarea
          className={styles.textBox}
          {...register("memo", {
            maxLength: { value: MAX_LENGTH.memo, message: `최대 ${MAX_LENGTH.memo}자까지 작성할 수 있습니다.` },
          })}
          maxLength={MAX_LENGTH.memo}
        />
        <p className={styles.p}>
          {watch("memo")?.length ?? "0"}/{MAX_LENGTH.memo}
        </p>
        {errors.memo && <p className={styles.error}>{errors.memo.message?.toString()}</p>}
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
