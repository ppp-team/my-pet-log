"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";
import { CONFIRM_MESSAGE, ERROR_MESSAGE, PLACEHOLDER } from "@/constants/inputConstant";
import removeSpaces from "@/utils/removeSpaces";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
            <Image src={watch("profileImage") ?? sampleImageSrc} alt="유저 프로필 이미지" width={50} height={50} />
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

        <fieldset>
          <label>이메일</label>
          <input type="text" placeholder={"email@email.com"} readOnly />
        </fieldset>
        <fieldset>
          <label>닉네임*</label>
          <div>
            <input
              type="text"
              placeholder={PLACEHOLDER.nickname}
              {...register("nickname", {
                required: ERROR_MESSAGE.nicknameRequired,
                onChange: onChangeNickname,
              })}
            />
            <button type="button" onClick={onClickCheckNickname}>
              중복확인
            </button>
          </div>
          {errors?.nickname?.message ? (
            <div>
              <Image src={sampleImageSrc} alt="주의 아이콘 이미지" width={30} height={30} />
              <span>{errors.nickname.message}</span>
            </div>
          ) : (
            <div>
              <Image src={sampleImageSrc} alt="완료 아이콘 이미지" width={30} height={30} />
              <span>{CONFIRM_MESSAGE.nicknameValid}</span>
            </div>
          )}
        </fieldset>

        <button type="submit">저장</button>
      </form>
    </main>
  );
};
export default CreateUserProfilePage;
