"use client";

import AddIcon from "@/assets/add.svg";
import DateInput from "@/components/@common/DateInput";
import SelectMateDropdown from "@/components/Healthlog/SelectMateDropdown";
import SubtypeDetail from "@/components/Healthlog/SubtypeDetail";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./page.css";

interface SubmitData {
  // 폼 필드 속성 타입 추가
}

const Page = () => {
  const [visibleSubtype, setVisibleSubtype] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>(null);
  const [selectedType, setSelectedType] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>(null);
  const [activeButtonGroup, setActiveButtonGroup] = useState("");
  const topSubtypeRef = useRef<HTMLDivElement>(null);
  const bottomSubtypeRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    // formState: { errors },
  } = useForm();

  const buttonTypes: { type: keyof typeof subtypeOptions | "CUSTOM" | "WALK"; label: string }[] = [
    { type: "FEED", label: "사료" },
    { type: "HEALTH", label: "건강" },
    { type: "WALK", label: "산책" },
    { type: "TREAT", label: "간식/영양제" },
    { type: "GROOMING", label: "위생/미용" },
    { type: "CUSTOM", label: "직접 입력" },
  ];

  const handleTypeButtonClick = (subtype: keyof typeof subtypeOptions | "CUSTOM" | "WALK", group: string) => {
    if (visibleSubtype === subtype && activeButtonGroup === group) {
      setVisibleSubtype(null);
      setActiveButtonGroup("");
    } else {
      setVisibleSubtype(subtype);
      setActiveButtonGroup(group);
    }
  };

  const onSubmit = (submitData: SubmitData) => {
    console.log(submitData);
    // 폼 제출 로직
  };

  useEffect(() => {
    setValue("memo", "");
    setValue("subtype", "");
    setValue("isImportant", false);
  }, [visibleSubtype, setValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.id === "submit-button") {
          return;
        }

        if (topSubtypeRef.current && !topSubtypeRef.current.contains(event.target) && activeButtonGroup === "top") {
          setVisibleSubtype(null);
          setActiveButtonGroup("");
        }
        if (bottomSubtypeRef.current && !bottomSubtypeRef.current.contains(event.target) && activeButtonGroup === "bottom") {
          setVisibleSubtype(null);
          setActiveButtonGroup("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeButtonGroup]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>건강수첩 작성하기</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems}>
          <div className={styles.inputWrapper}>
            <DateInput register={register} setValue={setValue} getValue={getValues} />
          </div>
          <div className={styles.inputWrapper}>
            <label>담당 메이트</label>
            <SelectMateDropdown />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.buttonGroup}>
              {buttonTypes.slice(0, 3).map(({ type, label }) => (
                <button
                  key={type}
                  className={`${styles.typeButton} ${selectedType === type ? styles.typeButtonSelected : ""}`}
                  type="button"
                  onClick={() => {
                    handleTypeButtonClick(type as keyof typeof subtypeOptions | "CUSTOM" | "WALK", "top");
                    setSelectedType(type);
                  }}
                >
                  {label}
                  <AddIcon className={selectedType === type ? styles.addIconSelected : styles.addIcon} />
                </button>
              ))}
            </div>
            <div ref={topSubtypeRef}>{visibleSubtype && activeButtonGroup === "top" && <SubtypeDetail visibleSubtype={visibleSubtype} register={register} />}</div>
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.buttonGroup}>
              {buttonTypes.slice(3).map(({ type, label }) => (
                <button
                  key={type}
                  className={`${styles.typeButton} ${selectedType === type ? styles.typeButtonSelected : ""}`}
                  type="button"
                  onClick={() => {
                    handleTypeButtonClick(type, "bottom");
                    setSelectedType(type);
                  }}
                >
                  {label}
                  <AddIcon className={selectedType === type ? styles.addIconSelected : styles.addIcon} />
                </button>
              ))}
            </div>
            <div ref={bottomSubtypeRef}>{visibleSubtype && activeButtonGroup === "bottom" && <SubtypeDetail visibleSubtype={visibleSubtype} register={register} />}</div>
          </div>

          <div>
            <button className={styles.submitButton} type="submit" id="submit-button">
              저장
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
