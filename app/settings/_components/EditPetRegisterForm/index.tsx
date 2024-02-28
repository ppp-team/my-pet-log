"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PET_NAME_RULES, PET_WEIGHT_RULES, PET_REGISTERNUMBER_RULES, PET_PLACEHOLDER, PET_GENDER_RULES } from "@/app/_constants/inputConstant";
import { useState, useEffect, useRef, Suspense } from "react";
import * as styles from "./style.css";
import defaultImage from "@/public/images/pet-profile-default.svg?url";
import cameraIcon from "@/public/icons/camera.svg?url";
import Image from "next/image";
import PetDateInput from "@/app/_components/PetRegister/component/PetdateInput";
import { petOptions } from "@/public/data/petOptions";
import ErrorMessage from "@/app/_components/ErrorMessage";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import CloseIcon from "@/public/icons/close.svg?url";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import { useRouter } from "next/navigation";
import { deletePet, getPet, putPet } from "@/app/_api/pets";
import { useModal } from "@/app/_hooks/useModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PetType } from "@/app/_types/petGroup/types";
import GenderSelection from "@/app/_components/PetRegister/component/RadioInput/GenderRadio";
import NeuteringSelection from "@/app/_components/PetRegister/component/RadioInput/NeuteringRadio";
import { showToast } from "@/app/_components/Toast";
import { getGuardians } from "@/app/_api/guardians";
import { GuardiansType } from "@/app/_types/guardians/types";
import { getMe } from "@/app/_api/users";
import { UserType } from "@/app/_types/user/types";
import ImageModal from "@/app/_components/Modal/ImageModal";
import { getImagePath } from "@/app/_utils/getPetImagePath";

export interface IFormInput {
  petName: string;
  image: File;
  type: string;
  breed: string;
  gender: string;
  neutering: boolean | null | string;
  birthday: string | null;
  firstMeet: string | null;
  name: string;
  weight: number | string | null;
  registeredNumber: string | null;
  id: string | number | null;
}

const EditPetRegisterForm = ({ petId }: { petId: number }) => {
  const { isModalOpen: isConfirmModalOpen, openModalFunc: openConfirmModalFunc, closeModalFunc: closeConfirmModalFunc } = useModal();
  const { isModalOpen: isUnAuthorizedModalOpen, openModalFunc: openUnAuthorizedModalFunc, closeModalFunc: closeUnAuthorizedModalFunc } = useModal();
  const { isModalOpen: isDeleteModalOpen, openModalFunc: openDeleteModalFunc, closeModalFunc: closeDeleteModalFunc } = useModal();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [section, setSection] = useState(1);
  const [breedOpen, setBreedOpen] = useState(false); //모달상태
  const [typeOpen, setTypeOpen] = useState(false); //모달상태
  const dropdownRef = useRef<HTMLUListElement>(null); //모달 외부 클릭시 닫히도록
  const [selectedGender, setSelectedGender] = useState<string>(""); //성별 선택 반영
  const [selectedNeutering, setSelectedNeutering] = useState(""); //중성화 선택 반영
  const [isWeightDisabled, setIsWeightDisabled] = useState(false); //몸무게 모르겠어요 반영

  const queryClient = useQueryClient();

  //수정하기
  const { data: petInfo } = useQuery<PetType>({
    queryKey: ["petInfo", petId],
    queryFn: () => getPet(petId),
  });

  const {
    mutate: putPetMutation,
    isPending,
    isSuccess: isPutSuccess,
  } = useMutation({
    mutationFn: (formData: FormData) => putPet({ petId: String(petId), formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["petInfo", petId] });
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: () => {
      showToast("마이펫 수정에 실패했습니다.", false);
      closeDeleteModalFunc();
    },
  });

  //삭제하기
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const { data: guardiansList } = useQuery<GuardiansType>({
    queryKey: ["petmate", petId],
    queryFn: () => getGuardians(petId),
  });

  const petmateList = guardiansList?.data ?? [];
  const isOnlyMember = guardiansList?.count === 1 ? true : false;
  const currentUser = petmateList.find((member) => member.nickname === user?.nickname);
  const isLeader = currentUser ? currentUser.guardianRole === "LEADER" : false;

  const {
    mutate: deletePetMutation,
    isPending: isDeletePending,
    isSuccess: isDeleteSuccess,
  } = useMutation({
    mutationFn: (petId: string) => deletePet({ petId }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: () => {
      showToast("다른 멤버가 있을 때 반려동물을 삭제할 수 없습니다.", false);
    },
  });

  //리액트훅폼
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<IFormInput>({ mode: "onSubmit" });

  //section1의 유효성 검사(값이 있는 경우에만 버튼클릭가능)
  const isSectionValid = watch("petName") && watch("type") && watch("breed") !== "";

  const router = useRouter();

  //전체 폼 제출
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const request = {
      name: data.petName,
      type: data.type,
      breed: data.breed,
      gender: data.gender,
      isNeutered: data.neutering === undefined ? null : data.neutering,
      birth: data.birthday === "날짜 선택" ? null : data.birthday,
      firstMeetDate: data.firstMeet === "날짜 선택" ? null : data.firstMeet,
      weight: data.weight === "" ? null : data.weight,
      registeredNumber: data.registeredNumber === "" ? null : data.registeredNumber,
    };

    const formData = new FormData();

    const blob = new Blob([JSON.stringify(request)], { type: "application/json" });
    formData.append("petRequest", blob);
    formData.append("petImage", data.image);

    putPetMutation(formData);
    openConfirmModalFunc();
  };

  useEffect(() => {
    if (petInfo) {
      setValue("petName", petInfo.name);
      setValue("type", petInfo.type);
      setValue("breed", petInfo.breed);
      setValue("gender", petInfo.gender);
      setSelectedGender(petInfo.gender);
      setValue("neutering", petInfo.isNeutered === "Y" ? true : false);
      setSelectedNeutering(petInfo.isNeutered === "Y" ? "true" : "false");
      setValue("birthday", petInfo.birth === null ? null : petInfo.birth.slice(0, 10));
      setValue("firstMeet", petInfo.firstMeetDate === null ? null : petInfo?.firstMeetDate!.slice(0, 10));
      setValue("weight", petInfo.weight);
      setValue("registeredNumber", petInfo.registeredNumber);

      setProfileImage(getImagePath(petInfo.petImageUrl));
    }
  }, [isPutSuccess, petInfo, setValue]);

  const handleNextSection = () => {
    if (isSectionValid) {
      setSection(section + 1);
    }
  };

  const handlePrevSection = () => {
    setSection(section - 1);
  };

  //프로필 이미지

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue("image", file);

      const previewImage = URL.createObjectURL(file);
      setProfileImage(previewImage);

      return () => URL.revokeObjectURL(previewImage);
    }
  };

  useEffect(() => {
    if (!watch("image")) {
      setProfileImage(defaultImage);
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

  // 타입 클릭시 작동
  const handleTypeClick = (type: string) => {
    setValue("type", type);
    setValue("breed", "");
    setTypeOpen((prev) => !prev);
  };

  // 품종 클릭시 작동
  const handleBreedClick = (breed: string) => {
    setValue("breed", breed);
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

  //삭제하기 버튼 누를시 리더인지 판별
  const handleDelete = () => {
    isLeader ? openDeleteModalFunc() : openUnAuthorizedModalFunc();
  };

  //리더가 삭제 누를시
  const handleLeaderDelete = () => {
    if (isLeader && isOnlyMember) {
      deletePetMutation(String(petId));
    }
    router.push("/settings");
  };

  const section1 = (
    <>
      <div className={styles.profile}>
        <div className={styles.image}>
          {profileImage ? (
            <Image className={styles.image} src={profileImage === "null" ? defaultImage : profileImage} alt="Profile Preview" width={126} height={126} />
          ) : (
            petInfo && <Image className={styles.image} src={getImagePath(petInfo.petImageUrl)} alt="profile image" width={126} height={126} />
          )}
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
        <button type="button" className={`${styles.selectBox} ${typeOpen ? styles.selectBoxOpen : ""}`} onClick={() => setTypeOpen(!typeOpen)}>
          {getValues().type || "타입을 선택하세요"}
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
      {getValues().type !== "기타" && (
        <button type="button" className={`${styles.selectBox} ${breedOpen ? styles.selectBoxOpen : ""}`} onClick={() => setBreedOpen(!breedOpen)}>
          {getValues().breed || "품종을 선택하세요"}
          <DropdownIcon className={`${styles.dropdownIcon} ${breedOpen ? styles.dropdownIconOpen : ""}`} />
        </button>
      )}
      {breedOpen && getValues().type !== "기타" && (
        <ul className={styles.optionsList} ref={dropdownRef}>
          {petOptions[getValues().type]?.map((breed: string, index: number) => (
            <li key={index} value={breed}>
              <button type="button" className={styles.optionButton} onClick={() => handleBreedClick(breed)} {...register("breed")}>
                {breed}
              </button>
            </li>
          ))}
        </ul>
      )}

      {getValues().type === "기타" && (
        <input
          className={styles.writeInput}
          placeholder="품종을 직접 입력하세요"
          {...register("breed", {
            required: "내용을 입력해주세요",
          })}
          autoFocus
        />
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
      <GenderSelection selectedGender={selectedGender} handleGenderChange={handleGenderChange} />

      {/* 중성화 여부 */}
      <label className={styles.label}>중성화 여부</label>
      <NeuteringSelection selectedNeutering={selectedNeutering} handleNeuteringChange={handleNeuteringChange} />

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
      <div className={styles.plusMarginWrapper}>
        <OptionalMessage onClearInput={clearWeightInput} message={"모르겠어요"} />
      </div>

      {/* 동물등록번호 */}
      <label className={styles.label}>동물등록번호</label>
      <input className={styles.writeInput} {...register("registeredNumber", PET_REGISTERNUMBER_RULES)} placeholder={PET_PLACEHOLDER.registeredNumber} />
      {errors.registeredNumber && <ErrorMessage message={errors.registeredNumber.message} />}

      {/* 삭제하기 버튼 */}
      <div className={styles.deleteButtonWrapper}>
        <button type="button" className={styles.deleteButton} onClick={() => handleDelete()}>
          동물 삭제하기
        </button>
      </div>
      <button type="submit" className={styles.button}>
        작성완료
      </button>

      {isDeleteModalOpen && <ImageModal type={"deletePet"} onClick={handleLeaderDelete} onClose={closeDeleteModalFunc} />}
      {isUnAuthorizedModalOpen && <ImageModal type={"unAuthorizedDeletePet"} onClick={closeUnAuthorizedModalFunc} onClose={closeUnAuthorizedModalFunc} />}
      {isConfirmModalOpen && (
        <ImageModal
          type={"edit"}
          onClick={() => {
            closeConfirmModalFunc();
            router.back();
          }}
          onClose={closeConfirmModalFunc}
        />
      )}
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
    </>
  );
};

export default EditPetRegisterForm;
