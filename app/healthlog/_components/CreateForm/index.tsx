"use client";

import { postLogs } from "@/app/_api/log";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/_components/DateInput";
import convertTime12to24 from "@/app/_utils/convertTime12to24";
import SelectMateDropdown from "@/app/healthlog/_components/SelectMateDropdown";
import SubtypeDetail from "@/app/healthlog/_components/SubtypeDetail";
import { buttonTypes } from "@/public/data/buttonTypes";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as styles from "./style.css";

interface CreateFormProps {
  petId: number;
}

const CreateForm = ({ petId }: CreateFormProps) => {
  const [visibleSubtype, setVisibleSubtype] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>("FEED");
  const [selectedType, setSelectedType] = useState<string>("FEED");
  const [kakaoLocationId, setKakaoLocationId] = useState<number | null>(null);
  const [activeButtonGroup, setActiveButtonGroup] = useState("");
  const [selectedGuardianId, setSelectedGuardianId] = useState<string>("");
  const topSubtypeRef = useRef<HTMLDivElement>(null);
  const bottomSubtypeRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

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

  const handleLocationSelect = (id: number | null) => {
    setKakaoLocationId(id);
  };

  const handleSelectMate = (id: string) => {
    setSelectedGuardianId(id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const onSubmit = (data: any) => {
    const date = data.date;
    const time = convertTime12to24(data.time);
    const datetime = `${date}T${time}`;

    const logData = {
      type: selectedType === "CUSTOM" ? data.type : selectedType,
      subType: data.subtype,
      isCustomLocation: selectedType === "WALK",
      kakaoLocationId: selectedType === "WALK" ? kakaoLocationId : null,
      datetime: datetime,
      isComplete: true,
      isImportant: data.isImportant,
      memo: data.memo,
      managerId: selectedGuardianId,
    };
    try {
      console.log(logData);
      postLogs(petId, logData);
      router.push("/healthlog");
    } catch (error) {
      console.error("로그 등록 실패:", error);
    }
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
      <BackHeader title="건강수첩 작성하기" styleTop="0" />
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems} onKeyDown={handleKeyPress}>
          <div className={styles.inputWrapper}>
            <DateInput register={register} setValue={setValue} getValue={getValues} />
          </div>
          <div className={styles.inputWrapper}>
            <label>담당 메이트</label>
            <SelectMateDropdown petId={petId} onSelect={handleSelectMate} selectedId={selectedGuardianId} />
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
              {visibleSubtype && activeButtonGroup === "top" && (
                <SubtypeDetail visibleSubtype={visibleSubtype} register={register} watch={watch} errors={errors} setValue={setValue} onLocationSelect={handleLocationSelect} />
              )}
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
              {visibleSubtype && activeButtonGroup === "bottom" && (
                <SubtypeDetail visibleSubtype={visibleSubtype} register={register} watch={watch} errors={errors} setValue={setValue} onLocationSelect={handleLocationSelect} />
              )}
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

export default CreateForm;
