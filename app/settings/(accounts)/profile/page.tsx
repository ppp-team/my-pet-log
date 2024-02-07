"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CONFIRM_MESSAGE, ERROR_MESSAGE, NICKNAME_RULES, PLACEHOLDER } from "@/constants/inputConstant";
import { useEffect } from "react";
import * as styles from "@/app/settings/(accounts)/profile/page.css";
import mockData from "./mockData.json"; //추후 삭제
import cameraIcon from "@/assets/camera.svg?url";
import Image from "next/image";
import ErrorMessage from "@/components/@common/ErrorMessage";
import ConfirmMessage from "@/components/@common/ConfirmMessage/ConfirmMessage";
import NoProfileImage from "@/assets/images/person-profile-default.svg?url";

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

  // 리액트 훅 폼 사용해서 닉네임, 프로필, 이메일 받아오도록 추후 수정
  useEffect(() => {
    setValue("nickname", mockData.nickname);
    setValue("image", mockData.profileImageUrl || NoProfileImage);
    setValue("isNicknameConfirmed", false);
  }, [setValue]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setValue("image", URL.createObjectURL(files[0]));
  };

  const onClickCheckNickname = () => {
    // 닉네임 중복 에러메세지 테스트
    const isConfirmed = true;

    // 닉네임 중복 api
    if (!isConfirmed) {
      //닉네임 중복 시
      setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.nicknameDuplicate });
    } else {
      //닉네임 중복 x
      setValue("isNicknameConfirmed", true);
    }
  };

  const getNicknameState = () => {
    if (watch("isNicknameConfirmed")) {
      return {
        style: styles.inputConfirmStyle,
        component: <ConfirmMessage message={CONFIRM_MESSAGE.nicknameValid} />,
      };
    } else if (errors?.nickname) {
      return {
        style: styles.inputErrorStyle,
        component: <ErrorMessage message={errors?.nickname?.message} />,
      };
    } else {
      return {
        style: null,
        component: null,
      };
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const isNicknameConfirmed = watch("isNicknameConfirmed");

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
        <input className={`${styles.nickname} ${getNicknameState().style}`} {...register("nickname", NICKNAME_RULES)} placeholder={PLACEHOLDER.nickname} />
        <button className={styles.checkNicknameButton} type="button" onClick={onClickCheckNickname}>
          중복확인
        </button>
      </div>
      {getNicknameState()?.component}
      <span className={styles.length}>{nicknameValue?.length} / 10</span>

      <button className={styles.button} type="submit">
        확인
      </button>
    </form>
  );
};

export default Page;
