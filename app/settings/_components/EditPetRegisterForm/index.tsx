"use client";

import { getGuardians } from "@/app/_api/guardians";
import { checkPetName, deletePet, getPet, putPet } from "@/app/_api/pets";
import { getMe } from "@/app/_api/users";
import ErrorMessage from "@/app/_components/ErrorMessage";
import Loading from "@/app/_components/Loading";
import ImageModal from "@/app/_components/Modal/ImageModal";
import { IFormInput } from "@/app/_components/PetRegister";
import PetWeightInput from "@/app/_components/PetRegister/component/PetWeightInput";
import PetDateInput from "@/app/_components/PetRegister/component/PetdateInput";
import GenderSelection from "@/app/_components/PetRegister/component/RadioInput/GenderRadio";
import NeuteringSelection from "@/app/_components/PetRegister/component/RadioInput/NeuteringRadio";
import { showToast } from "@/app/_components/Toast";
import { PET_NAME_RULES, PET_PLACEHOLDER, PET_REGISTERNUMBER_RULES } from "@/app/_constants/inputConstant";
import { useModal } from "@/app/_hooks/useModal";
import { GuardiansType } from "@/app/_types/guardians/types";
import { PetType } from "@/app/_types/petGroup/types";
import { UserType } from "@/app/_types/user/types";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import { petOptions } from "@/public/data/petOptions";
import cameraIcon from "@/public/icons/camera.svg?url";
import BackIcon from "@/public/icons/chevron-left.svg?url";
import CloseIcon from "@/public/icons/close.svg?url";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import defaultImage from "@/public/images/pet-profile-default.svg?url";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "@/app/_components/PetRegister/style.css";
import ConfirmMessage from "@/app/_components/ConfirmMessage/ConfirmMessage";

const EditPetRegisterForm = ({ petId }: { petId: number }) => {
  const { isModalOpen: isConfirmModalOpen, openModalFunc: openConfirmModalFunc, closeModalFunc: closeConfirmModalFunc } = useModal();
  const { isModalOpen: isUnAuthorizedModalOpen, openModalFunc: openUnAuthorizedModalFunc, closeModalFunc: closeUnAuthorizedModalFunc } = useModal();
  const { isModalOpen: isDeleteModalOpen, openModalFunc: openDeleteModalFunc, closeModalFunc: closeDeleteModalFunc } = useModal();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [section, setSection] = useState(1);
  const [breedOpen, setBreedOpen] = useState(false); //모달상태
  const [typeOpen, setTypeOpen] = useState(false); //모달상태
  const dropdownRef = useRef<HTMLUListElement>(null); //모달 외부 클릭시 닫히도록
  const [isPetNameConfirm, setIsPetNameConfirm] = useState<boolean | null>(null); //펫 이름 중복확인

  const queryClient = useQueryClient();

  //정보 불러오기
  const { data: petInfo, isSuccess: isGetPetSuccess } = useQuery<PetType>({
    queryKey: ["petInfo", petId],
    queryFn: () => getPet(petId),
  });

  //수정하기
  const { mutate: putPetMutation, isPending } = useMutation({
    mutationFn: (formData: FormData) => putPet({ petId: String(petId), formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["petInfo", petId] });
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      openConfirmModalFunc();
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
    setError,
    clearErrors,
  } = useForm<IFormInput>({ mode: "onTouched" });

  //section1의 유효성 검사(값이 있는 경우에만 버튼클릭가능)
  const isSectionValid = watch("petName") && watch("type") && watch("breed") !== "" && (isPetNameConfirm || isPetNameConfirm === null);

  const router = useRouter();

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

    putPetMutation(formData);
  };

  //pet 이름 중복확인
  const checkPetNameMutation = useMutation({
    mutationFn: (name: string) => checkPetName({ name }),
    onSuccess: (res) => {
      if (!res) return setError("petName", { type: "duplicate", message: "중복된 이름입니다." });
      setIsPetNameConfirm(true);
      clearErrors("petName");
    },
  });
  useEffect(() => {
    if (petInfo) {
      setValue("petName", petInfo.name);
      setValue("type", petInfo.type);
      setValue("breed", petInfo.breed);
      setValue("gender", petInfo.gender);
      setValue("neutering", petInfo.isNeutered);
      setValue("birthday", petInfo.birth ? petInfo.birth.slice(0, 10) : null);
      setValue("firstMeet", petInfo.firstMeetDate ? petInfo.firstMeetDate!.slice(0, 10) : null);
      setValue("weight", petInfo.weight);
      setValue("registeredNumber", petInfo.registeredNumber);
      setProfileImage(getImagePath(petInfo.petImageUrl));
    }
  }, [isGetPetSuccess]);

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
        <button
          disabled={!getValues("petName") || isPetNameConfirm === null}
          className={styles.checkPetNameButton}
          type="button"
          onClick={() => checkPetNameMutation.mutate(getValues("petName"))}
        >
          중복확인
        </button>
      </div>
      {errors.petName && <ErrorMessage message={errors.petName.message} />}
      {isPetNameConfirm && <ConfirmMessage message="사용가능한 이름입니다." />}

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

      {/* 삭제하기 버튼 */}
      <button type="button" className={styles.deleteButton} onClick={() => handleDelete()}>
        동물 삭제하기
      </button>
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
      {isPending && <Loading />}
    </>
  );
};

export default EditPetRegisterForm;
