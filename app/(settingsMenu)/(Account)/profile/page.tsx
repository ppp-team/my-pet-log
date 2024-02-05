"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { NICKNAME_RULES, PLACEHOLDER } from "@/constants/inputConstant";
import { useEffect } from "react";
import * as styles from "@/app/(settingsMenu)/(account)/profile/page.css";
import mockData from "@/app/(settingsMenu)/(account)/profile/mockData.json"; //추후 삭제
import cameraIcon from "@/assets/camera.svg?url";
import Image from "next/image";

interface IFormInput {
  nickname: string;
  image: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IFormInput>({ mode: "onChange" });

  // 리액트 훅 폼 사용해서 닉네임, 프로필, 이메일 받아오도록 추후 수정
  useEffect(() => {
    setValue("nickname", mockData.nickname);
    setValue("image", mockData.profileImageUrl);
  }, [setValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setValue("image", URL.createObjectURL(files[0]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.profile} htmlFor="image">
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${watch("image")})`,
          }}
        >
          <Image className={styles.cameraIcon} src={cameraIcon} alt="camera icon" width={40} height={40} />
        </div>
      </label>
      <input id="image" type="file" accept="image/*" {...register("image")} onChange={handleImageChange} style={{ display: "none" }} />

      <label className={styles.label}>닉네임*</label>
      <input className={styles.nickname} {...register("nickname", NICKNAME_RULES)} placeholder={PLACEHOLDER.nickname} />
      {errors.nickname && <span>{errors.nickname.message}</span>}

      <label className={styles.label}>이메일*</label>
      <input className={styles.email} value={mockData.email} readOnly />

      <button className={styles.button} type="submit">
        확인
      </button>
    </form>
  );
};

export default Page;
