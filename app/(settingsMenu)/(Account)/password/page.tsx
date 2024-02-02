"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CURRENT_PASSWORD_RULES, ERROR_MESSAGE, NEW_PASSWORD_RULES, PLACEHOLDER } from "@/constants/inputConstant";

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
  } = useForm<IFormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const newPassword = watch("newPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>비밀번호</label>
      <input {...register("password", CURRENT_PASSWORD_RULES)} type="password" placeholder={PLACEHOLDER.currentPassword} />
      {errors.password && <span>{errors.password.message}</span>}

      <label>새 비밀번호</label>
      <input {...register("newPassword", NEW_PASSWORD_RULES)} type="password" placeholder={PLACEHOLDER.newPassword} />
      {errors.newPassword && <span>{errors.newPassword.message}</span>}

      <label>새 비밀번호 확인</label>
      <input {...register("newPasswordCheck", newPasswordCheckRules(newPassword))} type="password" placeholder={PLACEHOLDER.confirmNewPassword} />
      {errors.newPasswordCheck && <span>{errors.newPasswordCheck.message}</span>}

      <button type="submit">확인</button>
    </form>
  );
};

export default Page;
