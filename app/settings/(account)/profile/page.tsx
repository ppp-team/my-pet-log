"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ERROR_MESSAGE, NICKNAME_RULES, PLACEHOLDER } from "@/app/_constants/inputConstant";
import { useEffect } from "react";
import * as styles from "@/app/settings/(account)/profile/page.css";
import mockData from "./mockData.json"; //추후 삭제
import cameraIcon from "@/public/icons/camera.svg?url";
import Image from "next/image";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import { checkNickname } from "@/app/settings/_utils/checkNickname";
import { getNicknameState } from "@/app/settings/_utils/getNicknameState";

interface IFormInput {
  nickname: string;
  image: string;
  isNicknameConfirmed: boolean;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    setError,
  } = useForm<IFormInput>({ mode: "onChange" });
  const nicknameValue = watch("nickname");
  const isNicknameConfirmed = watch("isNicknameConfirmed");

  // 리액트 훅 폼 사용해서 닉네임, 프로필, 이메일 받아오도록 추후 수정
  useEffect(() => {
    setValue("nickname", mockData.nickname);
    setValue("image", mockData.profileImageUrl ?? NoProfileImage);
    setValue("isNicknameConfirmed", false);
  }, [setValue]);

  // 이미지 업로드
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setValue("image", URL.createObjectURL(files[0]));
  };

  // 닉네임 중복 검사
  const handleCheckNickname = () => {
    checkNickname(setValue, setError, watch);
  };
  const { style, message } = getNicknameState(isNicknameConfirmed, errors);

  //폼 제출 시
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (isNicknameConfirmed) {
      // 중복 검사 완료일 경우에만 submit api 통신
      alert("성공");
    } else {
      setError("nickname", { type: "isNotConfirmed", message: ERROR_MESSAGE.nicknameNotConfirmed });
    }
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

      <label className={styles.label}>이메일*</label>
      <input className={styles.email} value={mockData.email} readOnly />

      <label className={styles.label}>닉네임*</label>
      <div className={styles.nicknameContainer}>
        <input
          className={`${styles.nickname} ${style}`}
          placeholder={PLACEHOLDER.nickname}
          {...register("nickname", {
            ...NICKNAME_RULES,
            onChange: () => {
              setValue("isNicknameConfirmed", false);
            },
          })}
        />
        <button className={styles.checkNicknameButton} type="button" onClick={handleCheckNickname}>
          중복확인
        </button>
      </div>
      {message}
      <span className={styles.length}>{nicknameValue?.length} / 10</span>

      <button className={styles.button} type="submit">
        확인
      </button>
    </form>
  );
};

export default Page;
