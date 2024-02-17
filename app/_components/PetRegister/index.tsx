"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PET_NAME_RULES, PET_WEIGHT_RULES, PET_REGISTERNUMBER_RULES, PET_PLACEHOLDER, PET_GENDER_RULES } from "@/app/_constants/inputConstant";
import { useState, useEffect, useRef } from "react";
import * as styles from "./style.css";
import DefaultImage from "@/public/images/pet-profile-default.svg?url";
import cameraIcon from "@/public/icons/camera.svg?url";
import Image from "next/image";
import PetDateInput from "@/app/_components/PetRegister/component/PetdateInput";
import { petOptions } from "@/public/data/petOptions";
import ErrorMessage from "@/app/_components/ErrorMessage";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import OptionalMessage from "./component/OptionalCheck";
import CloseIcon from "@/public/icons/close.svg?url";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import { useRouter } from "next/navigation";
import { postPet } from "@/app/_api/pets";

export interface IFormInput {
  petName: string;
  image: string;
  type: string;
  breed: string;
  gender: "MALE" | "FEMALE";
  neutering: boolean | null;
  birthday: string | null;
  firstMeet: string | null;
  name: string;
  weight: number | null;
  registeredNumber: string | null;
  id: string | number | null;
}

type PetFormType = "register" | "edit";

const PetRegister = ({ type }: { type: PetFormType }) => {
  const [profileImage, setProfileImage] = useState<string>(DefaultImage);
  const [section, setSection] = useState(1);
  const [breedOpen, setBreedOpen] = useState(false); //모달상태
  const [typeOpen, setTypeOpen] = useState(false); //모달상태
  const dropdownRef = useRef<HTMLUListElement>(null); //모달 외부 클릭시 닫히도록
  const [selectedType, setSelectedType] = useState(""); //타입 선택 반영
  const [selectedBreed, setSelectedBreed] = useState(""); //품종 선택 반영
  const [selectedGender, setSelectedGender] = useState<string>(""); //성별 선택 반영
  const [selectedNeutering, setSelectedNeutering] = useState(""); //중성화 선택 반영
  const [isWeightDisabled, setIsWeightDisabled] = useState(false); //몸무게 모르겠어요 반영

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<IFormInput>({ mode: "onTouched" });

  const router = useRouter();

  //전체 폼 제출
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const request = {
      name: data.petName,
      type: data.type,
      breed: data.breed,
      gender: data.gender,
      isNeutered: data.neutering,
      birth: data.birthday,
      firstMeetDate: data.firstMeet,
      weight: data.weight,
      registeredNumber: data.registeredNumber,
    };
    console.log("request", request);

    const res = await postPet({ data: request });
    console.log("res", res);
  };

  //section1의 유효성 검사(값이 있는 경우에만 버튼클릭가능)
  let isSectionValid = false;
  if (getValues() && getValues().petName && getValues().type && getValues().breed) {
    isSectionValid = true;
  }

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
    setValue("image", URL.createObjectURL(files[0]));
  };

  useEffect(() => {
    setProfileImage(watch("image") || DefaultImage);
  }, [watch]);

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

  //중성화
  const handleNeuteringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNeutering(e.target.value);
    setValue("neutering", e.target.value === "true" ? true : e.target.value === "false" ? false : null);
  };

  //성별 클릭여부
  const handleGenderChange = (value: "MALE" | "FEMALE") => {
    setSelectedGender(value);
    setValue("gender", value);
  };

  //몸무게
  const clearWeightInput = () => {
    setValue("weight", null);
    setIsWeightDisabled((prev) => !prev);
  };

  //삭제하기 버튼, API호출하는 코드로 수정 예정
  const handleDelete = () => {
    console.log("동물 삭제");
  };

  // 타입에 따라 타이틀 변경하고 삭제하기 버튼 렌더링
  let headerTitle = "";
  let deleteButton = null;
  let submitText = "";
  switch (type) {
    case "register":
      headerTitle = "마이펫 정보 입력";
      submitText = "작성 완료";
      break;
    case "edit":
      headerTitle = "마이펫 정보 수정";
      submitText = "수정 완료";
      deleteButton = (
        <div className={styles.deleteButtonWrapper}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            동물 삭제하기
          </button>
        </div>
      );
      break;
  }

  const section1 = (
    <>
      <div className={styles.profile}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${watch("image") || DefaultImage})`,
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
      <input className={styles.writeInput} {...register("petName", PET_NAME_RULES)} placeholder={PET_PLACEHOLDER.name} />
      {errors.petName && <ErrorMessage message={errors.petName.message} />}

      {/* 타입 */}
      <label className={styles.label}>타입*</label>
      <div>
        <button className={`${styles.selectBox} ${typeOpen ? styles.selectBoxOpen : ""}`} onClick={() => setTypeOpen(true)}>
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
        <button className={`${styles.selectBox} ${breedOpen ? styles.selectBoxOpen : ""}`} onClick={() => setBreedOpen(!breedOpen)}>
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

      <button className={styles.button} onClick={handleNextSection} disabled={!isSectionValid}>
        다음
      </button>
    </>
  );

  const section2 = (
    <>
      {/* 성별 */}
      <label className={styles.label}>성별*</label>
      <div className={styles.radioContainer}>
        <div className={styles.leftRadio}>
          <input type="radio" id="MALE" value="MALE" checked={selectedGender === "MALE"} onClick={() => handleGenderChange("MALE")} {...register("gender", PET_GENDER_RULES)} />
          <label className={`${styles.radioOption} ${selectedGender === "MALE" && styles.leftSelected}`} htmlFor="MALE">
            남
          </label>
        </div>
        <div className={styles.rightRadio}>
          <input
            type="radio"
            id="FEMALE"
            value="FEMALE"
            checked={selectedGender === "FEMALE"}
            onClick={() => handleGenderChange("FEMALE")}
            {...register("gender", PET_GENDER_RULES)}
          />
          <label className={`${styles.radioOption} ${selectedGender === "FEMALE" && styles.rightSelected}`} htmlFor="FEMALE">
            여
          </label>
        </div>
      </div>
      {errors.gender && <ErrorMessage message={errors.gender.message} />}

      {/* 중성화 여부 */}
      <label className={styles.label}>중성화 여부</label>
      <div className={styles.radioContainer}>
        <div className={styles.leftRadio}>
          <input type="radio" id="yes" name="neutering" value="true" checked={selectedNeutering === "true"} onChange={handleNeuteringChange} />
          <label className={`${styles.radioOption} ${selectedNeutering === "true" && styles.leftSelected}`} htmlFor="yes">
            했어요
          </label>
        </div>
        <div className={styles.rightRadio}>
          <input type="radio" id="no" name="neutering" value="false" checked={selectedNeutering === "false"} onChange={handleNeuteringChange} />
          <label className={`${styles.radioOption} ${selectedNeutering === "false" && styles.rightSelected}`} htmlFor="no">
            안했어요
          </label>
        </div>
      </div>

      {/* 생일  */}
      <label className={styles.label}>생일</label>
      <PetDateInput id="birthday" register={register} setValue={setValue} getValue={getValues} />

      {/* 처음 만난 날  */}
      <label className={styles.label}>처음 만난 날</label>
      <PetDateInput id="firstMeet" register={register} setValue={setValue} getValue={getValues} />

      {/* 몸무게 */}
      <label className={styles.label}>몸무게</label>
      <input className={styles.writeInput} {...register("weight", PET_WEIGHT_RULES)} placeholder={PET_PLACEHOLDER.weight} disabled={isWeightDisabled} />
      {errors.weight && <ErrorMessage message={errors.weight.message} />}
      <OptionalMessage onClearInput={clearWeightInput} message={"모르겠어요"} />

      {/* 동물등록번호 */}
      <label className={styles.label}>동물등록번호</label>
      <input className={styles.writeInput} {...register("registeredNumber", PET_REGISTERNUMBER_RULES)} placeholder={PET_PLACEHOLDER.registeredNumber} />
      {errors.registeredNumber && <ErrorMessage message={errors.registeredNumber.message} />}

      {/* 삭제하기 버튼 */}
      {type === "edit" && deleteButton}

      <button className={styles.button} type="submit">
        {submitText}
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
        {headerTitle}
        <div className={styles.closeIcon} onClick={() => router.push("/")}>
          <Image src={CloseIcon} alt="close icon" width={25} height={25} />
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        {section === 1 ? section1 : section2}
      </form>
    </>
  );
};

export default PetRegister;
