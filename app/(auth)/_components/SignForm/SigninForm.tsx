"use client";
import PasswordInput from "@/app/(auth)/_components/SignInput/PasswordInput";
import Input from "@/app/(auth)/_components/SignInput/Input";
import { EMAIL_RULES, ERROR_MESSAGE, PLACEHOLDER, SIGNIN_PASSWORD_RULES } from "@/app/_constants/inputConstant";
import * as styles from "./styles.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import SubmitButton from "@/app/(auth)/_components/SubmitButton/index";

const SignInForm = () => {
  const { control, handleSubmit, setError, formState } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });
  const router = useRouter();

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          //임시로 폼 제출시 즉시 home으로 이동
          router.push("/");
        }}

        //API연결하는 로직입니다
        // onSubmit={handleSubmit(async (data) => {
        //   const res = await postLogin({ email: data.email, password: data.password });
        //   if (res !== null) {
        //     localStorage.setItem("accessToken", res.accessToken);
        //     router.push("/");
        //     return;
        //   }
        //   setError("email", { message: ERROR_MESSAGE.emailCheck });
        //   setError("password", { message: ERROR_MESSAGE.passwordCheck });
        // })}
      >
        <Controller
          control={control}
          name="email"
          rules={EMAIL_RULES}
          render={({ field, fieldState }) => (
            <Input label="이메일*" {...field} placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} message={fieldState.error?.message} />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={SIGNIN_PASSWORD_RULES}
          render={({ field, fieldState }) => (
            <PasswordInput label="비밀번호*" {...field} placeholder={PLACEHOLDER.password} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <div className={styles.buttonWrapper}>
          <SubmitButton type={"로그인"} disabled={!formState.isValid} />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
