"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CURRENT_PASSWORD_RULES, ERROR_MESSAGE, NEW_PASSWORD_RULES, PLACEHOLDER } from "@/constants/inputConstant";
import * as styles from "@/app/settings/(accounts)/password/page.css";
import ErrorMessage from "@/components/@common/ErrorMessage";

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
  if (value !== newPassword) {
    return ERROR_MESSAGE.confirmPasswordCheck;
  }
  return true;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const newPassword = watch("newPassword");

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
