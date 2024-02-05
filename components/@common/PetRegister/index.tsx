"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PET_NAME_RULES, PET_WEIGHT_RULES, PET_REGISTNUMBER_RULES, PET_PLACEHOLDER } from "@/constants/inputConstant";
import { useState, useEffect } from "react";
import * as styles from "./style.css";
import DefaultImage from "@/assets/user.svg?url";
import cameraIcon from "@/assets/camera.svg?url";
import Image from "next/image";
import TitleHeader from "@/components/@common/TitleHeader/index";
import DateInput from "@/components/@common/DateInput";
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
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedOptions, setBreedOptions] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<IFormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setValue("image", URL.createObjectURL(files[0]));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
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
        <select className={styles.selectBox} onChange={handleSelectChange} value={selectedOption}>
          {Object.keys(petOptions).map((option: string, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* 품종 */}
        <label className={styles.label}>품종*</label>
        <select className={styles.selectBox} onChange={handleSelectChange} value={selectedBreed}>
          {petOptions[selectedOption]?.map((breed: string, index: number) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        {/* 성별 */}
        <label className={styles.label}>성별*</label>
        <div className={styles.radioWrapper}>
          {/* <input className={styles.leftRadio} type="radio" id="male" name="gender" /> */}
          <label htmlFor="male">남</label>
          {/* <input className={styles.rightRadio} type="radio" id="female" name="gender" /> */}
          <label htmlFor="female">여</label>
        </div>

        {/* 중성화 여부 */}
        <label className={styles.label}>중성화 여부</label>

        {/* <DateInput register={register} setValue={setValue} getValue={getValues} />

        <DateInput register={register} setValue={setValue} getValue={getValues} /> */}

        {/* 몸무게 */}
        <label className={styles.label}>몸무게*</label>
        <input className={styles.writeInput} {...register("weight", PET_WEIGHT_RULES)} placeholder={PET_PLACEHOLDER.weight} />
        {errors.weight && <ErrorMessage message={errors.weight.message} />}

        {/* 동물등록번호 */}
        <label className={styles.label}>동물등록번호*</label>
        <input className={styles.writeInput} {...register("registNumber", PET_REGISTNUMBER_RULES)} placeholder={PET_PLACEHOLDER.registNumber} />
        {errors.registNumber && <ErrorMessage message={errors.registNumber.message} />}

        {/* <button className={styles.button} type="submit">
          작성완료
        </button> */}
      </form>
    </div>
  );
};

export default PetRegister;
