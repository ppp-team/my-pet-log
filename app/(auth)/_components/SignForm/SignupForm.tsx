"use client";
import Input from "@/app/(auth)/_components/SignInput/Input";
import PasswordInput from "@/app/(auth)/_components/SignInput/PasswordInput";
import { ERROR_MESSAGE, SIGNUP_PASSWORD_RULES, PLACEHOLDER } from "@/app/_constants/inputConstant";
import { useModal } from "@/app/_hooks/useModal";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as styles from "./styles.css";
import SubmitButton from "@/app/(auth)/_components/SubmitButton/index";
import ModalContainer from "@/app/_components/ModalContainer";
import AlertModal from "@/app/(auth)/_components/AlertModal";

const SignUpForm = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { control, handleSubmit, watch, setError, formState } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    mode: "onTouched",
  });
  const router = useRouter();

  const handleCloseModal = () => {
    closeModalFunc();
    router.push("/login");
  };

  const handleSignUp = () => {
    openModalFunc();
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSignUp)}

        // onSubmit={handleSubmit(async (data) => {
        //   const res = await postUsers({ email: data.email, password: data.password });
        //   if (res !== null) {
        //     return openModalFunc();
        //   }
        //   setError("email", { message: ERROR_MESSAGE.emailDuplicate });
        // })}
      >
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.emailRequired,
            pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
          }}
          render={({ field, fieldState }) => (
            <Input label="이메일*" {...field} placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={SIGNUP_PASSWORD_RULES}
          render={({ field, fieldState }) => (
            <PasswordInput label="비밀번호*" {...field} placeholder={PLACEHOLDER.signUpPassword} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
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
            <PasswordInput
              label="비밀번호 재확인*"
              {...field}
              placeholder={PLACEHOLDER.signUpPassword}
              hasError={Boolean(fieldState.error)}
              errorText={fieldState.error?.message}
            />
          )}
        />
        <div className={styles.buttonWrapper}>
          <SubmitButton disabled={!formState.isValid} type={"회원가입"} />
        </div>
      </form>
      {isModalOpen && (
        <ModalContainer>
          <AlertModal onClick={handleCloseModal}></AlertModal>
        </ModalContainer>
      )}
    </>
  );
};

export default SignUpForm;
