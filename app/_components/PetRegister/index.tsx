"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PET_NAME_RULES, PET_WEIGHT_RULES, PET_REGISTNUMBER_RULES, PET_PLACEHOLDER } from "@/app/_constants/inputConstant";
import { useState, useEffect } from "react";
import * as styles from "./style.css";
import DefaultImage from "@/public/icons/user.svg?url";
import cameraIcon from "@/public/icons/camera.svg?url";
import Image from "next/image";
import TitleHeader from "@/app/_components/TitleHeader/index";
import PetDateInput from "./PetDateInput";
import { petOptions } from "@/public/data/petOptions";
import ErrorMessage from "../ErrorMessage";

interface IFormInput {
  petName: string;
  image: string;
  email: string;
  weight: number;
  registNumber: number;
}

const PetRegister = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedNeutering, setSelectedNeutering] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<IFormInput>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setValue("image", URL.createObjectURL(files[0]));
  };

  //동물 타입
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };
  //동물 타입별 세부 품종
  const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(event.target.value);
  };

  //중성화
  const handleNeuteringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNeutering(e.target.id);
  };

  //성별
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.id);
  };

  return (
    <div>
      <TitleHeader title={"마이펫 정보 입력"} redirectPath={"/"} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <label className={styles.profile} htmlFor="image">
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${watch("image") || DefaultImage})`,
            }}
          >
            <Image className={styles.cameraIcon} src={cameraIcon} alt="camera icon" width={40} height={40} />
          </div>
        </label>

        <input id="image" type="file" accept="image/*" {...register("image")} onChange={handleImageChange} style={{ display: "none" }} />

        {/* 이름 */}
        <label className={styles.label}>이름*</label>
        <input className={styles.writeInput} {...register("petName", PET_NAME_RULES)} placeholder={PET_PLACEHOLDER.name} />
        {errors.petName && <ErrorMessage message={errors.petName.message} />}

        {/* 타입 */}
        <label className={styles.label}>타입*</label>
        <select className={styles.selectBox} onChange={handleTypeChange} value={selectedType} defaultValue={""}>
          {Object.keys(petOptions).map((option: string, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* 품종 */}
        <label className={styles.label}>품종*</label>
        <select className={styles.selectBox} onChange={handleBreedChange} value={selectedBreed}>
          {petOptions[selectedType]?.map((breed: string, index: number) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        {/* 성별 */}
        <label className={styles.label}>성별*</label>
        <div className={styles.radioContainer}>
          <div className={styles.leftRadio}>
            <input type="radio" id="male" name="gender" checked={selectedGender === "male"} onChange={handleGenderChange} />
            <label className={`${styles.radioOption} ${selectedGender === "male" && styles.leftSelected}`} htmlFor="male">
              남
            </label>
          </div>
          <div className={styles.rightRadio}>
            <input type="radio" id="female" name="gender" checked={selectedGender === "female"} onChange={handleGenderChange} />
            <label className={`${styles.radioOption} ${selectedGender === "female" && styles.rightSelected}`} htmlFor="female">
              여
            </label>
          </div>
        </div>

        {/* 중성화 여부 */}
        <label className={styles.label}>중성화 여부</label>
        <div className={styles.radioContainer}>
          <div className={styles.leftRadio}>
            <input type="radio" id="yes" name="neutering" checked={selectedNeutering === "yes"} onChange={handleNeuteringChange} />
            <label className={`${styles.radioOption} ${selectedNeutering === "yes" && styles.leftSelected}`} htmlFor="yes">
              했어요
            </label>
          </div>
          <div className={styles.rightRadio}>
            <input type="radio" id="no" name="neutering" checked={selectedNeutering === "no"} onChange={handleNeuteringChange} />
            <label className={`${styles.radioOption} ${selectedNeutering === "no" && styles.rightSelected}`} htmlFor="no">
              안했어요
            </label>
          </div>
        </div>

        {/* 생일  */}
        <label className={styles.label}>생일</label>
        <PetDateInput register={register} setValue={setValue} getValue={getValues} />

        {/* 처음 만난 날  */}
        <label className={styles.label}>처음 만난 날</label>
        <PetDateInput register={register} setValue={setValue} getValue={getValues} />

        {/* 몸무게 */}
        <label className={styles.label}>몸무게*</label>
        <input className={styles.writeInput} {...register("weight", PET_WEIGHT_RULES)} placeholder={PET_PLACEHOLDER.weight} />
        {errors.weight && <ErrorMessage message={errors.weight.message} />}

        {/* 동물등록번호 */}
        <label className={styles.label}>동물등록번호*</label>
        <input className={styles.writeInput} {...register("registNumber", PET_REGISTNUMBER_RULES)} placeholder={PET_PLACEHOLDER.registNumber} />
        {errors.registNumber && <ErrorMessage message={errors.registNumber.message} />}

        <button className={styles.button} type="submit">
          시작하기
        </button>
      </form>
    </div>
  );
};

export default PetRegister;
