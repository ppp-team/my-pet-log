"use client";

import { getLogDetail, putLogs } from "@/app/_api/log";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/_components/DateInput";
import { LogDetailType } from "@/app/_types/log/types";
import convertTime12to24 from "@/app/_utils/convertTime12to24";
import SelectMateDropdown from "@/app/healthlog/_components/SelectMateDropdown";
import SubtypeDetail from "@/app/healthlog/_components/SubtypeDetail";
import { buttonTypes } from "@/public/data/buttonTypes";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as styles from "./style.css";

interface EditFormProps {
  petId: number;
  logId: number;
}

const EditForm = ({ petId, logId }: EditFormProps) => {
  const [selectedType, setSelectedType] = useState<string>("FEED");
  const [selectedGuardianId, setSelectedGuardianId] = useState<string>("");
  const [activeButtonGroup, setActiveButtonGroup] = useState("");
  const [visibleSubtype, setVisibleSubtype] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>("FEED");
  const [kakaoLocationId, setKakaoLocationId] = useState<number | null>(null);
  const topSubtypeRef = useRef<HTMLDivElement>(null);
  const bottomSubtypeRef = useRef<HTMLDivElement>(null);

  const { data: logDetailData, error } = useQuery<LogDetailType, Error>({
    queryKey: ["LogDetail", petId, logId],
    queryFn: () => getLogDetail(Number(petId), Number(logId)),
  });

  console.log(logDetailData);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleSelectMate = (id: string) => {
    setSelectedGuardianId(id);
  };

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

    console.log(petId, logId, logData);
    putLogs(petId, logId, logData);
  };

  useEffect(() => {
    if (logDetailData) {
      setValue("date", logDetailData.date);
      setValue("time", logDetailData.time);
      setValue("type", logDetailData.type);
      setValue("subType", logDetailData.subType);
      setValue("memo", logDetailData.memo);
      setValue("isImportant", logDetailData.isImportant);
      setSelectedGuardianId(logDetailData.managerId ? logDetailData.managerId : "");

      // type 값을 확인하고 setVisibleSubtype에 전달하기 전에 타입을 확인합니다.
      const typeOptions = ["FEED", "HEALTH", "TREAT", "GROOMING", "CUSTOM", "WALK"];
      if (typeOptions.includes(logDetailData.type)) {
        setSelectedType(logDetailData.type);
        setVisibleSubtype(logDetailData.type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      } else {
        setVisibleSubtype("CUSTOM");
      }
    }
  }, [logDetailData, setValue, setSelectedType, setVisibleSubtype]);

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

  if (error) return <div>Error occurred!</div>;

  return (
    <>
      <BackHeader title="건강수첩 수정하기" />
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
                <SubtypeDetail
                  visibleSubtype={visibleSubtype}
                  register={register}
                  watch={watch}
                  errors={errors}
                  setValue={setValue}
                  onLocationSelect={handleLocationSelect}
                  initialSubType={logDetailData?.subType}
                  initialLocation={logDetailData?.location}
                />
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
                <SubtypeDetail
                  visibleSubtype={visibleSubtype}
                  register={register}
                  watch={watch}
                  errors={errors}
                  setValue={setValue}
                  onLocationSelect={handleLocationSelect}
                  initialSubType={logDetailData?.subType}
                />
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

export default EditForm;
