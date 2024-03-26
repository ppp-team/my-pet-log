"use client";

import { checkPetName, postPet } from "@/app/_api/pets";
import ConfirmMessage from "@/app/_components/ConfirmMessage/ConfirmMessage";
import ErrorMessage from "@/app/_components/ErrorMessage";
import Loading from "@/app/_components/Loading";
import ImageModal from "@/app/_components/Modal/ImageModal";
import PetWeightInput from "@/app/_components/PetRegister/component/PetWeightInput";
import PetDateInput from "@/app/_components/PetRegister/component/PetdateInput";
import GenderSelection from "@/app/_components/PetRegister/component/RadioInput/GenderRadio";
import NeuteringSelection from "@/app/_components/PetRegister/component/RadioInput/NeuteringRadio";
import { PET_ERROR_MESSAGE, PET_NAME_RULES, PET_PLACEHOLDER, PET_REGISTERNUMBER_RULES } from "@/app/_constants/inputConstant";
import { useModal } from "@/app/_hooks/useModal";
import { petOptions } from "@/public/data/petOptions";
import cameraIcon from "@/public/icons/camera.svg?url";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import CloseIcon from "@/public/icons/close.svg?url";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import DefaultImage from "@/public/images/pet-profile-default.svg?url";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./style.css";

export interface IFormInput {
  petName: string;
  image: File;
  type: string;
  breed: string;
  gender: "MALE" | "FEMALE";
  neutering: "Y" | "N";
  birthday: string | null;
  firstMeet: string | null;
  name: string;
  weight: number | null | string;
  registeredNumber: string | null;
  id: string | number | null;
}

const PetRegister = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [profileImage, setProfileImage] = useState<File | string | null>(DefaultImage);
  const [section, setSection] = useState(1);
  const [breedOpen, setBreedOpen] = useState(false); //모달상태
  const [typeOpen, setTypeOpen] = useState(false); //모달상태
  const dropdownRef = useRef<HTMLUListElement>(null); //모달 외부 클릭시 닫히도록
  const [selectedType, setSelectedType] = useState(""); //타입 선택 반영
  const [selectedBreed, setSelectedBreed] = useState(""); //품종 선택 반영
  const [isPetNameConfirm, setIsPetNameConfirm] = useState(false); //펫 이름 중복확인

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
    watch,
    clearErrors,
    setError,
  } = useForm<IFormInput>({ defaultValues: { firstMeet: null, birthday: null, weight: null }, mode: "onTouched" });

  const queryClient = useQueryClient();
  const router = useRouter();

  const pathname = usePathname();

  const handlePath = () => {
    if (pathname === "/settings/pet-register") {
      closeModalFunc();
      router.push("/settings");
    }
    if (pathname === "/pet-register") {
      closeModalFunc();
      router.push("/home");
    }
  };

  //전체 폼 제출
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const request = {
      name: data.petName,
      type: data.type,
      breed: data.breed,
      gender: data.gender,
      isNeutered: data.neutering === "Y" ? true : false,
      birth: data.birthday,
      firstMeetDate: data.firstMeet,
      weight: data.weight,
      registeredNumber: data.registeredNumber === "" ? null : data.registeredNumber,
    };

    const formData = new FormData();

    const blob = new Blob([JSON.stringify(request)], { type: "application/json" });
    formData.append("petRequest", blob);
    formData.append("petImage", data.image);

    // FormData에 데이터가 올바르게 추가되었는지 확인
    const res = await postPet({ formData });
    if (res !== null) {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      openModalFunc();
    }
  };

  const isSectionValid = watch("petName") && watch("type") && watch("breed") !== "" && isPetNameConfirm;

  const handleNextSection = () => {
    if (isSectionValid) {
      setSection(section + 1);
    }
  };

  const handlePrevSection = () => {
    setSection(section - 1);
  };

  //프로필 이미지
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    setProfileImage(URL.createObjectURL(files[0]));
    setValue("image", files[0]);
  };

  //pet 이름 중복확인
  const checkPetNameMutation = useMutation({
    mutationFn: (name: string) => checkPetName({ name }),
    onSuccess: (res) => {
      if (!res) return setError("petName", { type: "duplicate", message: PET_ERROR_MESSAGE.nameDuplicate });
      setIsPetNameConfirm(true);
      clearErrors("petName");
    },
  });

  useEffect(() => {
    if (!watch("image")) {
      setProfileImage(DefaultImage);
    }
  }, [watch("image")]);

  //드롭다운 외부 클릭시 닫히게 하기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBreedOpen(false);
        setTypeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  //드롭다운
  useEffect(() => {
    setSelectedBreed("");
    setValue("breed", "");
  }, [selectedType, setValue]);

  const handleTypeClick = (type: string) => {
    setValue("type", type);
    setSelectedType(type);
    setSelectedBreed("");
    setTypeOpen((prev) => !prev);
  };

  const handleBreedClick = (breed: string) => {
    setValue("breed", breed);
    setSelectedBreed(breed);
    setBreedOpen((prev) => !prev);
  };

  const section1 = (
    <>
      {checkPetNameMutation.isPending && <Loading />}
      <div className={styles.profile}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${profileImage || DefaultImage})`,
          }}
        >
          <label htmlFor="image">
            <Image className={styles.cameraIcon} src={cameraIcon} alt="camera icon" width={40} height={40} />
          </label>
        </div>
      </div>
      <input id="image" type="file" accept="image/*" {...register("image")} onChange={handleImageChange} style={{ display: "none" }} />

      {/* 이름 */}
      <label className={styles.label}>이름*</label>
      <div className={styles.nameInputWrapper}>
        <input
          className={styles.writeInput}
          {...register("petName", {
            ...PET_NAME_RULES,
            validate: {
              petNameVerify: () => {
                if (isPetNameConfirm) return true;
                return "중복확인을 해주세요.";
              },
            },
            onChange: () => setIsPetNameConfirm(false),
          })}
          placeholder={PET_PLACEHOLDER.name}
        />
        <button disabled={!getValues("petName")} className={styles.checkPetNameButton} type="button" onClick={() => checkPetNameMutation.mutate(getValues("petName"))}>
          중복확인
        </button>
      </div>
      {errors.petName && <ErrorMessage message={errors.petName.message} />}
      {isPetNameConfirm && <ConfirmMessage message="사용가능한 이름입니다." />}

      {/* 타입 */}
      <label className={styles.label}>타입*</label>
      <div>
        <button type="button" className={`${styles.selectBox} ${typeOpen ? styles.selectBoxOpen : ""}`} onClick={() => setTypeOpen(true)}>
          {selectedType || "타입을 선택하세요"}
          <DropdownIcon className={`${styles.dropdownIcon} ${typeOpen ? styles.dropdownIconOpen : ""}`} />
        </button>
        {typeOpen && (
          <ul className={styles.optionsList} ref={dropdownRef}>
            {Object.keys(petOptions).map((type: string, index: number) => (
              <li key={index} value={type}>
                <button type="button" className={styles.optionButton} onClick={() => handleTypeClick(type)} {...register("type")}>
                  {type}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 품종 */}
      <label className={styles.label}>품종*</label>
      {selectedType !== "기타" && (
        <button type="button" className={`${styles.selectBox} ${breedOpen ? styles.selectBoxOpen : ""}`} onClick={() => setBreedOpen(!breedOpen)}>
          {selectedBreed || "품종을 선택하세요"}
          <DropdownIcon className={`${styles.dropdownIcon} ${breedOpen ? styles.dropdownIconOpen : ""}`} />
        </button>
      )}
      {breedOpen && selectedType !== "기타" && (
        <ul className={styles.optionsList} ref={dropdownRef}>
          {petOptions[selectedType]?.map((breed: string, index: number) => (
            <li key={index} value={breed}>
              <button type="button" className={styles.optionButton} onClick={() => handleBreedClick(breed)} {...register("breed")}>
                {breed}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedType === "기타" && (
        <>
          <input
            className={styles.writeInput}
            placeholder="품종을 직접 입력하세요"
            {...register("breed", {
              required: "내용을 입력해주세요",
            })}
            autoFocus
          />
        </>
      )}

      <button type="button" className={styles.button} onClick={handleNextSection} disabled={!isSectionValid}>
        다음
      </button>
    </>
  );

  const section2 = (
    <>
      {/* 성별 */}
      <label className={styles.label}>성별*</label>
      <GenderSelection register={register} watch={watch} />

      {/* 중성화 여부 */}
      <label className={styles.label}>중성화 여부*</label>
      <NeuteringSelection register={register} watch={watch} />

      {/* 생일  */}
      <label className={styles.label}>생일</label>
      <PetDateInput id="birthday" register={register} setValue={setValue} getValue={getValues} />

      {/* 처음 만난 날  */}
      <label className={styles.label}>처음 만난 날</label>
      <PetDateInput id="firstMeet" register={register} setValue={setValue} getValue={getValues} />

      {/* 몸무게 */}
      <label className={styles.label}>몸무게</label>
      <PetWeightInput register={register} setValue={setValue} getValue={getValues} errors={errors} watch={watch} />

      {/* 동물등록번호 */}
      <label className={styles.label}>동물등록번호</label>
      <input className={styles.writeInput} {...register("registeredNumber", PET_REGISTERNUMBER_RULES)} placeholder={PET_PLACEHOLDER.registeredNumber} />
      {errors.registeredNumber && <ErrorMessage message={errors.registeredNumber.message} />}

      <button type="submit" className={styles.button} disabled={!isValid}>
        작성완료
      </button>
    </>
  );

  return (
    <>
      <header className={styles.header}>
        {section === 2 && (
          <div className={styles.backIcon} onClick={handlePrevSection}>
            <Image src={BackIcon} alt="backward icon" width={25} height={25} />
          </div>
        )}
        마이펫 정보 입력
        <div className={styles.closeIcon} onClick={() => router.back()}>
          <Image src={CloseIcon} alt="close icon" width={25} height={25} />
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        {section === 1 ? section1 : section2}
      </form>
      {isModalOpen && <ImageModal type={"register"} onClick={handlePath} onClose={handlePath} />}
    </>
  );
};

export default PetRegister;
