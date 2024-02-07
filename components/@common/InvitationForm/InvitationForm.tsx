"use client";

import * as styles from "./InvitationForm.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useForm } from "react-hook-form";
import Image from "next/image";
import cautionIconSrc from "@/assets/caution.svg?url";
import removeSpaces from "@/utils/removeSpaces";

interface IForm {
  inputValue: string;
  invalid: string;
}

interface InvitationFormPropsType {
  formTitle: string;
  inputPlaceholder: string;
  requiredErrorMessage: string;
  invalidError: {
    getIsInvalid: (value: string) => boolean;
    message: string;
  };
}

const InvitationForm = ({ formTitle, inputPlaceholder, requiredErrorMessage, invalidError: { getIsInvalid, message: invalidMessage } }: InvitationFormPropsType) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>({ mode: "onTouched" });

  const onSubmit = (data: any) => {
    const inputDataRemovedSpaces = removeSpaces(data.inputValue);
    setValue("inputValue", inputDataRemovedSpaces);

    // 통신 실패 에러메세지 테스트
    if (getIsInvalid(inputDataRemovedSpaces)) setError("inputValue", { type: "invalid", message: invalidMessage });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.formTitle}>{formTitle}</label>
      <input
        className={styles.input}
        style={assignInlineVars({ [styles.borderColor]: errors?.inputValue ? "var(--Red)" : "var(--Gray81)" })}
        type="text"
        placeholder={inputPlaceholder}
        {...register("inputValue", {
          required: requiredErrorMessage,
        })}
      />
      <div className={styles.errorMessageContainer} style={assignInlineVars({ [styles.errorMessageVisibility]: errors?.inputValue ? "visible" : "hidden" })}>
        <Image src={cautionIconSrc} alt="주의 아이콘 이미지" width={13} height={13} />
        <span className={styles.errorMessage}>{errors?.inputValue?.message || ""}</span>
      </div>

      <button className={styles.button} type="submit">
        등록
      </button>
    </form>
  );
};
export default InvitationForm;
