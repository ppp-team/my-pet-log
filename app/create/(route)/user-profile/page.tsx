"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import userProfileDefaultImageSrc from "@/assets/user-profile-default.svg?url";
import { CONFIRM_MESSAGE, ERROR_MESSAGE, PLACEHOLDER } from "@/constants/inputConstant";
import removeSpaces from "@/utils/removeSpaces";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface IForm {
  nickname: string;
  profileImage: string;
}

const CreateUserProfilePage: NextPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IForm>({ mode: "onTouched" });

  const onChangeProfileImage = (e: FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;
    setValue("profileImage", URL.createObjectURL(files[0]));
  };

  const onChangeNickname = (e: FormEvent<HTMLInputElement>) => {
    const removedSpacesValue = removeSpaces(e.currentTarget.value);
    if (removedSpacesValue.length >= 10) {
      setError("nickname", { type: "maxLength", message: ERROR_MESSAGE.nicknameInvalid });
      setValue("nickname", removedSpacesValue.slice(0, 10));
    } else {
      setError("nickname", {});
      setValue("nickname", removedSpacesValue);
    }
  };

  const onClickCheckNickname = () => {
    const watchedNickname = watch("nickname");

    // 닉네임 중복 에러메세지 테스트
    if (watchedNickname === "failed") setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.nicknameDuplicate });
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.userProfileImageContainer}>
          <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
            <Image
              className={styles.userProfileImage}
              src={watch("profileImage")?.length >= 1 ? watch("profileImage") : userProfileDefaultImageSrc}
              alt="유저 프로필 이미지"
              width={126}
              height={124}
            />
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            {...register("profileImage", {
              onChange: onChangeProfileImage,
            })}
          />
        </fieldset>

        <fieldset className={styles.idFieldset}>
          <label className={styles.label}>아이디</label>
          <input className={(styles.textInput, styles.inputBoxStyle)} type="text" placeholder={"email@email.com"} readOnly />
        </fieldset>

        <fieldset className={styles.nicknameFieldset}>
          <label className={styles.label}>닉네임*</label>
          <div className={styles.nicknameInputContainer} style={assignInlineVars({ [styles.borderColor]: errors?.nickname ? "var(--Red)" : "var(--GrayE2)" })}>
            <input
              // className={`${styles.textInput} ${errors?.nickname && styles.textInputError}`}
              className={styles.textInput}
              type="text"
              placeholder={PLACEHOLDER.nickname}
              {...register("nickname", {
                required: ERROR_MESSAGE.nicknameRequired,
                onChange: onChangeNickname,
              })}
            />
            <button className={styles.checkNicknameButton} type="button" onClick={onClickCheckNickname}>
              중복확인
            </button>
          </div>
        </fieldset>

        <button className={styles.submitButton} type="submit">
          저장
        </button>
      </form>
    </main>
  );
};
export default CreateUserProfilePage;
