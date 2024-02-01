"use client";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
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
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const newPassword = watch("newPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="password">비밀번호</label>
      <Controller
        control={control}
        name="password"
        rules={CURRENT_PASSWORD_RULES}
        render={({ field }) => <input {...field} type="password" placeholder={PLACEHOLDER.currentPassword} />}
      ></Controller>
      {errors.password && <span>{errors.password.message}</span>}

      <label htmlFor="newPassword">새 비밀번호</label>
      <Controller
        control={control}
        name="newPassword"
        rules={NEW_PASSWORD_RULES}
        render={({ field }) => <input {...field} type="password" placeholder={PLACEHOLDER.newPassword} />}
      ></Controller>
      {errors.newPassword && <span>{errors.newPassword.message}</span>}

      <label htmlFor="newPasswordCheck">새 비밀번호 확인</label>
      <Controller
        control={control}
        name="newPasswordCheck"
        rules={newPasswordCheckRules(newPassword)}
        render={({ field }) => <input {...field} type="password" placeholder={PLACEHOLDER.confirmNewPassword} />}
      ></Controller>
      {errors.newPasswordCheck && <span>{errors.newPasswordCheck.message}</span>}

      <button type="submit">확인</button>
    </form>
  );
};

export default Page;
