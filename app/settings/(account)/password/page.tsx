"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CURRENT_PASSWORD_RULES, ERROR_MESSAGE, NEW_PASSWORD_RULES, PLACEHOLDER } from "@/app/_constants/inputConstant";
import * as styles from "@/app/settings/(account)/password/page.css";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { postCheckPassword, putUserProfile } from "@/app/_api/users";
import { showToast } from "@/app/_components/Toast";

interface IFormInput {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

// 새 비밀번호 확인 rules
const newPasswordCheckRules = (newPassword: string) => ({
  required: ERROR_MESSAGE.confirmNewPasswordRequired,
  validate: {
    isMatch: (value: string) => validatePasswordMatch(value, newPassword),
  },
});

// 새 비밀번호와 새 비밀번호 확인이 같은 지 검증
const validatePasswordMatch = (value: string, newPassword: string) => {
  return value === newPassword || ERROR_MESSAGE.confirmPasswordCheck;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<IFormInput>({ mode: "onTouched" });
  const newPassword = watch("newPassword");

  const updatePasswordMutation = useMutation({
    mutationFn: (formData: FormData) => putUserProfile({ formData }),
    onSuccess: () => {
      showToast("비밀번호가 변경 됐습니다!", true);
    },
    onError: () => {
      showToast("등록 실패했습니다. 잠시 후 다시 시도해주세요.", false);
    },
  });

  const validatePasswordMutation = useMutation({
    mutationFn: (password: string) => postCheckPassword(password),
    onSuccess: () => {
      if (newPassword === watch("password")) {
        setError("newPassword", { type: "manual", message: ERROR_MESSAGE.currentEqualNewPassword });
        return;
      }

      const formData = new FormData();
      formData.append("password", newPassword);
      updatePasswordMutation.mutate(formData);
    },
    onError: (error) => {
      setError("password", { type: "duplicated", message: error.message });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    validatePasswordMutation.mutate(data.password);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>비밀번호*</label>
      <input
        className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
        {...register("password", CURRENT_PASSWORD_RULES)}
        type="password"
        placeholder={PLACEHOLDER.currentPassword}
      />
      {errors.password && <ErrorMessage message={errors.password.message} />}

      <label className={styles.label}>새 비밀번호*</label>
      <input
        className={`${styles.input} ${errors.newPassword ? styles.inputError : ""}`}
        {...register("newPassword", NEW_PASSWORD_RULES)}
        type="password"
        placeholder={PLACEHOLDER.newPassword}
      />
      {errors.newPassword && <ErrorMessage message={errors.newPassword.message} />}

      <label className={styles.label}>새 비밀번호 확인*</label>
      <input
        className={`${styles.input} ${errors.newPasswordCheck ? styles.inputError : ""}`}
        {...register("newPasswordCheck", newPasswordCheckRules(newPassword))}
        type="password"
        placeholder={PLACEHOLDER.confirmNewPassword}
      />
      {errors.newPasswordCheck && <ErrorMessage message={errors.newPasswordCheck.message} />}

      <button className={styles.button} type="submit">
        작성완료
      </button>
    </form>
  );
};

export default Page;
