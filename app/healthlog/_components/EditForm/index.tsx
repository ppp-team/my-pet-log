"use client";

import { getLogDetail, putLogs } from "@/app/_api/log";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/_components/DateInput";
import { showToast } from "@/app/_components/Toast";
import { LogDetailType, PostLogType } from "@/app/_types/log/types";
import convertTime12to24 from "@/app/_utils/convertTime12to24";
import SelectMateDropdown from "@/app/healthlog/_components/SelectMateDropdown";
import SubtypeDetail from "@/app/healthlog/_components/SubtypeDetail";
import { buttonTypes } from "@/public/data/buttonTypes";
import { subtypeOptions } from "@/public/data/subtypeOptions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as styles from "./style.css";

interface EditFormProps {
  petId: number;
  logId: number;
}
interface MutationParams {
  petId: number;
  logId: number;
  logData: PostLogType;
  date: { year: number; month: number; day: number };
}

const EditForm = ({ petId, logId }: EditFormProps) => {
  const [selectedType, setSelectedType] = useState<string>("FEED");
  const [selectedGuardianId, setSelectedGuardianId] = useState<string>("");
  const [activeButtonGroup, setActiveButtonGroup] = useState("");
  const [visibleSubtype, setVisibleSubtype] = useState<keyof typeof subtypeOptions | "CUSTOM" | "WALK" | null>("FEED");
  const [kakaoLocationId, setKakaoLocationId] = useState<number | null>(null);
  const topSubtypeRef = useRef<HTMLDivElement>(null);
  const bottomSubtypeRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
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
    if (selectedType !== type) {
      setSelectedType(type);
      setVisibleSubtype(type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      setActiveButtonGroup(group);

      setValue("subtype", "");
      setValue("memo", "");
      setValue("isImportant", false);
    } else if (selectedType === type && activeButtonGroup === group) {
      setVisibleSubtype(null);
      setActiveButtonGroup("");
    } else {
      setVisibleSubtype(type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      setActiveButtonGroup(group);
    }
  };

  const handleSelectMate = (id: string) => {
    setSelectedGuardianId(id);
  };

  const handleLocationSelect = (id: number | null) => {
    setKakaoLocationId(id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const { data: logDetailData, error } = useQuery<LogDetailType, Error>({
    queryKey: ["LogDetail", petId, logId],
    queryFn: () => getLogDetail(Number(petId), Number(logId)),
  });

  const { mutate: putLog } = useMutation<PostLogType, Error, MutationParams>({
    mutationFn: async ({ petId, logId, logData }) => putLogs(petId, logId, logData),
    onSuccess: (data, variables) => {
      const { year, month, day } = variables.date;
      queryClient.invalidateQueries({
        queryKey: ["Logs", variables.petId, year, month, day],
      });
      queryClient.invalidateQueries({
        queryKey: ["LogDetail", variables.petId, variables.logId],
      });
      router.push("/healthlog");
    },
    onError: () => {
      showToast("건강수첩 항목 수정에 실패했습니다.", false);
    },
  });

  const onSubmit = (data: any) => {
    const dateParts = data.date.split("-").map(Number);
    const time = convertTime12to24(data.time);
    const datetime = `${data.date}T${time}`;

    const logData = {
      petId: petId,
      logId: logId,
      logData: {
        type: selectedType,
        subType: data.subtype,
        isCustomLocation: selectedType === "WALK",
        kakaoLocationId: selectedType === "WALK" ? kakaoLocationId : null,
        datetime: datetime,
        isComplete: true,
        isImportant: data.isImportant,
        memo: data.memo,
        managerId: selectedGuardianId,
      },
      date: { year: dateParts[0], month: dateParts[1], day: dateParts[2] },
    };

    putLog(logData);
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

      const typeOptions = ["FEED", "HEALTH", "TREAT", "GROOMING", "CUSTOM", "WALK"];
      if (typeOptions.includes(logDetailData.type)) {
        setSelectedType(logDetailData.type);
        setVisibleSubtype(logDetailData.type as keyof typeof subtypeOptions | "CUSTOM" | "WALK");
      } else {
        setVisibleSubtype("CUSTOM");
      }

      const typeOptionsTop = ["FEED", "HEALTH", "WALK"];
      const typeOptionsBottom = ["TREAT", "GROOMING", "CUSTOM"];

      if (typeOptionsTop.includes(logDetailData.type)) {
        setActiveButtonGroup("top");
      } else if (typeOptionsBottom.includes(logDetailData.type)) {
        setActiveButtonGroup("bottom");
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
      <BackHeader title="건강수첩 수정하기" styleTop="0" />
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formItems} onKeyDown={handleKeyPress}>
          <div className={styles.inputWrapper}>
            <DateInput register={register} setValue={setValue} getValue={getValues} />
          </div>
          <div className={styles.inputWrapper}>
            <label>담당 메이트</label>
            <SelectMateDropdown petId={petId} onSelect={handleSelectMate} selectedId={selectedGuardianId} />
          </div>

          <div>
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
                />
              )}
            </div>
          </div>

          <div>
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
