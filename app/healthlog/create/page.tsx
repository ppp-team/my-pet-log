"use client";

import { postLogs } from "@/app/_api/log";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/_components/DateInput";
import convertTime12to24 from "@/app/_utils/convertTime12to24";
import SelectMateDropdown from "@/app/healthlog/_components/SelectMateDropdown";
import SubtypeDetail from "@/app/healthlog/_components/SubtypeDetail";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./page.css";

const Page = () => {
  const [visibleSubtype, setVisibleSubtype] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>("FEED");
  const [selectedType, setSelectedType] = useState<string>("FEED");
  const [selectedSubType, setSelectedSubType] = useState<string>("");
  const [kakaoLocationId, setKakaoLocationId] = useState<number | null>(null);
  const [activeButtonGroup, setActiveButtonGroup] = useState("");
  const [selectedGuardianId, setSelectedGuardianId] = useState<string | number>("");
  const topSubtypeRef = useRef<HTMLDivElement>(null);
  const bottomSubtypeRef = useRef<HTMLDivElement>(null);
  // const { mutate: postLog, isLoading, isError } = usePostLogsMutation();

  const petId = 6;

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const buttonTypes: { type: string; label: string }[] = [
    { type: "FEED", label: "사료" },
    { type: "HEALTH", label: "건강" },
    { type: "WALK", label: "산책" },
    { type: "TREAT", label: "간식/영양제" },
    { type: "GROOMING", label: "위생/미용" },
    { type: "CUSTOM", label: "직접 입력" },
  ];

  const handleTypeButtonClick = (type: string, group: string) => {
    if (selectedType === type && activeButtonGroup === group) {
      setVisibleSubtype(type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      setActiveButtonGroup("");
    } else {
      setSelectedType(type);
      setVisibleSubtype(type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      setActiveButtonGroup(group);
    }
  };

  const onSubmit = (data: any) => {
    const date = data.date;
    const time = convertTime12to24(data.time);
    const datetime = `${date}T${time}`;

    const logData = {
      type: selectedType,
      subType: selectedSubType,
      isCustomLocation: selectedType === "WALK",
      kakaoLocationId: selectedType === "WALK" ? kakaoLocationId : null,
      datetime: datetime,
      isComplete: true,
      isImportant: data.isImportant,
      memo: data.memo,
      managerId: String(selectedGuardianId),
    };

    console.log(logData);
    postLogs(petId, logData); // API 호출
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
      <BackHeader title="건강수첩 작성하기" />
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems}>
          <div className={styles.inputWrapper}>
            <DateInput register={register} setValue={setValue} getValue={getValues} />
          </div>
          <div className={styles.inputWrapper}>
            <label>담당 메이트</label>
            <SelectMateDropdown
              onSelect={(guardianId) => {
                setSelectedGuardianId(guardianId);
              }}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.buttonGroup}>
              {buttonTypes.slice(0, 3).map(({ type, label }) => (
                <button
                  key={type}
                  className={`${styles.typeButton} ${selectedType === type ? styles.typeButtonSelected : ""}`}
                  type="button"
                  onClick={() => {
                    handleTypeButtonClick(type, "top");
                    setSelectedType(type);
                  }}
                >
                  {label}
                  <span className={selectedType === type ? styles.addIconSelected : styles.addIcon}>+</span>
                </button>
              ))}
            </div>
            <div ref={topSubtypeRef}>
              {visibleSubtype && activeButtonGroup === "top" && <SubtypeDetail visibleSubtype={visibleSubtype} register={register} watch={watch} errors={errors} />}
            </div>
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
                  <span className={selectedType === type ? styles.addIconSelected : styles.addIcon}>+</span>
                </button>
              ))}
            </div>
            <div ref={bottomSubtypeRef}>
              {visibleSubtype && activeButtonGroup === "bottom" && <SubtypeDetail visibleSubtype={visibleSubtype} register={register} watch={watch} errors={errors} />}
            </div>
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
