"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import userProfileDefaultImageSrc from "@/public/images/user-profile-default.svg?url";
import { ERROR_MESSAGE, NICKNAME_RULES, PLACEHOLDER } from "@/app/_constants/inputConstant";
import removeSpaces from "@/app/_utils/removeSpaces";
import { getNicknameHintState } from "@/app/_components/getNicknameHintState/getNicknameHintState";

interface IForm {
  nickname: string;
  profileImage: string;
  isNicknameConfirmed: boolean;
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

  const onClickCheckNickname = () => {
    const removeSpacesNickname = removeSpaces(watch("nickname"));
    setValue("nickname", removeSpacesNickname);

    if (removeSpacesNickname.length > 10) {
      return;
    }

    if (removeSpacesNickname === "") {
      // 공백만 입력했을 때
      setError("nickname", { type: "required", message: ERROR_MESSAGE.nicknameRequired });
      return;
    }

    // 닉네임 중복 에러메세지 테스트
    const isConfirmed = removeSpacesNickname === "failed" ? false : true;
    if (!isConfirmed) {
      setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.nicknameDuplicate });
    } else {
      setValue("isNicknameConfirmed", true);
    }
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const removeSpacesNickname = removeSpaces(data.nickname);
    const isNicknameConfirmed = watch("isNicknameConfirmed");
    setValue("nickname", removeSpacesNickname);

    if (isNicknameConfirmed) {
      // 중복 검사 완료일 경우에만 submit api 통신
      alert("성공");
    } else if (removeSpacesNickname === "") {
      // 공백만 입력했을 때
      setError("nickname", { type: "required", message: ERROR_MESSAGE.nicknameRequired });
    } else {
      setError("nickname", { type: "isNotConfirmed", message: ERROR_MESSAGE.nicknameNotConfirmed });
    }
  };

  const { hintStyle, hintComponent } = getNicknameHintState({
    isNicknameConfirmed: watch("isNicknameConfirmed"),
    nicknameErrorMessage: errors?.nickname?.message ?? null,
    textLength: watch("nickname")?.length,
  });

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
          <label className={styles.label}>이메일</label>
          <input className={styles.idInput} type="text" placeholder={"email@email.com"} readOnly />
        </fieldset>

        <fieldset className={styles.nicknameFieldset}>
          <label className={styles.label}>닉네임*</label>
          <div className={styles.nicknameContainer}>
            <input
              className={`${styles.nicknameInput} ${hintStyle}`}
              type="text"
              placeholder={PLACEHOLDER.nickname}
              {...register("nickname", {
                required: ERROR_MESSAGE.nicknameRequired,
                maxLength: NICKNAME_RULES.maxLength,
                onChange() {
                  setValue("isNicknameConfirmed", false);
                },
              })}
            />
            <button className={styles.checkNicknameButton} type="button" onClick={onClickCheckNickname}>
              중복확인
            </button>
          </div>
          {hintComponent}
        </fieldset>

        <button className={styles.submitButton} type="submit">
          저장
        </button>
      </form>
    </main>
  );
};
export default CreateUserProfilePage;
