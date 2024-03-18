"use client";
import Input from "@/app/(auth)/_components/SignInput/Input";
import * as inputStyles from "@/app/(auth)/_components/SignInput/styles.css";
import SubmitButton from "@/app/(auth)/_components/SubmitButton/index";
import { emailVerifyRequest, emailVerifyResponse, postSignup } from "@/app/_api/auth";
import ErrorMessage from "@/app/_components/ErrorMessage";
import Loading from "@/app/_components/Loading";
import ImageModal from "@/app/_components/Modal/ImageModal";
import { showToast } from "@/app/_components/Toast";
import { ERROR_MESSAGE, PLACEHOLDER, SIGNUP_PASSWORD_RULES } from "@/app/_constants/inputConstant";
import { useModal } from "@/app/_hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as styles from "./styles.css";

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const SignUpForm = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const { control, handleSubmit, watch, setError, formState, clearErrors, getValues, setValue } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "", code: "" },
    mode: "onTouched",
  });
  const router = useRouter();

  const emailVerifyRequestMutation = useMutation({
    mutationFn: (email: string) => emailVerifyRequest({ email }),
    onSuccess: (res) => {
      if (res === 409) return setError("email", { message: ERROR_MESSAGE.emailDuplicate });
      if (res === 500) return showToast("이메일 인증에 실패했습니다.", false);
      showToast("인증코드를 발송했습니다.", true);
      setShowCodeInput(true);
    },
  });

  const emailVerifyMutation = useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) => emailVerifyResponse({ email, code }),
    onSuccess: (res) => {
      if (res === 400) return setError("code", { message: "인증번호가 만료되었습니다." });
      if (res === 404) return setError("code", { message: "인증번호가 일치하지 않습니다." });
      showToast("인증 되었습니다.", true);
      setIsEmailVerify(true);
      clearErrors("email");
      clearErrors("code");
    },
  });

  const handleCloseModal = () => {
    closeModalFunc();
    router.push("/login");
  };

  const handleEmailVerifyRequest = () => {
    emailVerifyRequestMutation.mutate(getValues("email"));
  };

  const handleEmailVerifyConfirm = () => {
    emailVerifyMutation.mutate({ email: getValues("email"), code: getValues("code") });
  };

  return (
    <>
      {emailVerifyMutation.isPending && <Loading />}
      {emailVerifyRequestMutation.isPending && <Loading />}
      <form
        className={styles.form}
        onSubmit={handleSubmit(async (data) => {
          const res = await postSignup({ email: data.email, password: data.password });
          if (res !== null) {
            return openModalFunc();
          }
          showToast("회원가입에 실패했습니다.", false);
        })}
      >
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.emailRequired,
            pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
            validate: {
              emailVerify: () => {
                if (isEmailVerify) return true;
                return "이메일을 인증해주세요.";
              },
            },
          }}
          render={({ field, fieldState }) => (
            <div className={inputStyles.inputBox}>
              <label className={inputStyles.label}>이메일*</label>
              <div className={inputStyles.emailContainer}>
                <input
                  ref={field.ref}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(String(e.target.value));
                    setShowCodeInput(false);
                    setIsEmailVerify(false);
                  }}
                  onBlur={field.onBlur}
                  placeholder={PLACEHOLDER.email}
                  className={`${inputStyles.emailInput} ${fieldState.error && inputStyles.error}`}
                />
                <button disabled={!regex.test(watch("email"))} className={inputStyles.emailVerifyRequestButton} type="button" onClick={handleEmailVerifyRequest}>
                  {showCodeInput ? "재전송" : "인증하기"}
                </button>
              </div>
              {fieldState.error && <ErrorMessage message={fieldState.error.message} />}
            </div>
            // <EmailInput {...field} label="이메일" placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <Controller
          control={control}
          name="code"
          render={({ field, fieldState }) => (
            <div>
              {showCodeInput && (
                <div className={inputStyles.emailContainer}>
                  <input ref={field.ref} value={field.value} onChange={field.onChange} placeholder={PLACEHOLDER.confirmEmail} className={`${inputStyles.emailInput}`} />
                  <button className={inputStyles.emailCodeVerifyButton} type="button" onClick={handleEmailVerifyConfirm}>
                    인증확인
                  </button>
                </div>
              )}
              {fieldState.error && <ErrorMessage message={fieldState.error.message} />}
            </div>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={SIGNUP_PASSWORD_RULES}
          render={({ field, fieldState }) => (
            <Input
              label="비밀번호*"
              type="password"
              {...field}
              placeholder={PLACEHOLDER.signUpPassword}
              hasError={Boolean(fieldState.error)}
              errorText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: ERROR_MESSAGE.confirmPasswordRequired,
            validate: {
              isMatch: (value) => {
                if (value !== watch("password")) {
                  return ERROR_MESSAGE.confirmPasswordCheck;
                }
                return true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              label="비밀번호 재확인*"
              type="password"
              {...field}
              placeholder={PLACEHOLDER.signUpPassword}
              hasError={Boolean(fieldState.error)}
              errorText={fieldState.error?.message}
            />
          )}
        />

        <div className={styles.buttonWrapper}>
          <SubmitButton disabled={!formState.isValid || !isEmailVerify} type={"회원가입"} />
        </div>
      </form>
      {isModalOpen && <ImageModal type={"signup"} onClick={handleCloseModal} onClose={handleCloseModal} />}
    </>
  );
};

export default SignUpForm;
