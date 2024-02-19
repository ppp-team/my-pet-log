"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PLACEHOLDER, NICKNAME_RULES } from "@/app/_constants/inputConstant";
import * as styles from "@/app/settings/(account)/profile/page.css";
import cameraIcon from "@/public/icons/camera.svg?url";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import { UserType } from "@/app/_types/users/types";
import { getMe, postCheckNickname, putUserProfile } from "@/app/_api/users";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import { showToast } from "@/app/_components/Toast";
import { useState } from "react";
import ErrorMessage from "@/app/_components/ErrorMessage";
import ConfirmMessage from "@/app/_components/ConfirmMessage/ConfirmMessage";

interface IFormInput {
  nickname: string;
  image: File;
  isNicknameConfirmed: boolean;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });
  let nicknameValue = 0;
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [nicknameChanged, setNicknameChanged] = useState(false);

  const { data: user, isSuccess } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  if (isSuccess) {
    nicknameValue = watch("nickname", user?.nickname || "").length;
  }

  // 이미지 업로드
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue("image", file);

      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);

      return () => URL.revokeObjectURL(previewUrl);
    }
  };

  // 중복 검사를 실행하는 함수
  const handleCheckNickname = () => {
    const currentNickname = watch("nickname");
    if (!nicknameChanged) {
      return;
    } else if (currentNickname.length > 10) {
      setError("nickname", { type: "custom", message: "닉네임은 10글자를 초과할 수 없습니다." });
      return;
    }

    nicknameCheckMutation.mutate(currentNickname);
  };

  const nicknameCheckMutation = useMutation({
    mutationFn: (nickname: string) => postCheckNickname(nickname),
    onSuccess: (data) => {
      if (data) {
        setValue("isNicknameConfirmed", true);
        setError("nickname", { type: "success", message: "적합한 닉네임입니다." });
      }
    },
    onError: () => {
      setValue("isNicknameConfirmed", false);
      setError("nickname", { type: "duplicated", message: "이미 사용 중인 닉네임입니다." });
    },
  });

  const mutation = useMutation({
    mutationFn: (formData: FormData) => putUserProfile({ formData }),
    onSuccess: (data) => {
      if (data) {
        showToast("등록되었습니다!", true);
      } else {
        showToast("등록 실패했습니다. 잠시 후 다시 시도해주세요.", false);
      }
    },
  });

  //폼 제출 시
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (nicknameChanged && !watch("isNicknameConfirmed")) {
      setError("nickname", { type: "custom", message: "닉네임 중복 검사를 해주세요." });
      return;
    }

    const formData = new FormData();

    formData.append("nickname", data.nickname);
    formData.append("profileImage", data.image);

    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.profile} htmlFor="image">
        {imagePreviewUrl ? (
          <Image className={styles.image} src={imagePreviewUrl} alt="Profile Preview" width={126} height={126} />
        ) : (
          user && <Image className={styles.image} src={getImagePath(user.profilePath)} alt="profile image" width={126} height={126} />
        )}
        <Image className={styles.cameraIcon} src={cameraIcon} alt="camera icon" width={40} height={40} />
      </label>
      <input id="image" type="file" accept="image/*" {...register("image")} onChange={handleImageChange} style={{ display: "none" }} />

      <label className={styles.label}>이메일*</label>
      <input className={styles.email} value={user?.email} readOnly />

      <label className={styles.label}>닉네임*</label>
      <div className={styles.nicknameContainer}>
        <input
          className={`
          ${styles.nickname} 
          ${errors.nickname ? (errors.nickname.type === "success" ? styles.inputSuccess : styles.inputError) : ""}
        `}
          placeholder={PLACEHOLDER.nickname}
          defaultValue={user?.nickname}
          {...register("nickname", {
            ...NICKNAME_RULES,
            onChange: () => {
              setNicknameChanged(true);
            },
          })}
        />
        {errors.nickname && errors.nickname.type === "success" && <ConfirmMessage message={errors.nickname.message} />}
        {errors.nickname && errors.nickname.type !== "success" && <ErrorMessage message={errors.nickname.message} />}
        <button className={styles.checkNicknameButton} type="button" onClick={handleCheckNickname}>
          중복확인
        </button>
      </div>
      <span className={styles.length}>{nicknameValue} / 10</span>
      <button className={styles.button} type="submit">
        확인
      </button>
    </form>
  );
};

export default Page;
