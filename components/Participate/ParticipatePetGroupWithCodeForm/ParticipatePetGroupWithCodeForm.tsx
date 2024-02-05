"use client";

import * as styles from "./ParticipatePetGroupWithCodeForm.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import cautionIconSrc from "@/assets/caution.svg?url";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/constants/inputConstant";
import removeSpaces from "@/utils/removeSpaces";

interface IForm {
  receivedInvitationCode: string;
  invalid: string;
}

const ParticipatePetGroupWithCodeForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>({ mode: "onTouched" });

  const onSubmit = (data: any) => {
    const removedSpacesReceivedInvitationCode = removeSpaces(data.receivedInvitationCode);

    // 초대 코드 invalid 에러메세지 테스트
    if (removedSpacesReceivedInvitationCode === "failed") setError("receivedInvitationCode", { type: "invalid", message: ERROR_MESSAGE.receivedInvitationCodeInvalid });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.subtitle}>초대 코드</label>
      <input
        className={styles.receivedInvitationCodeInput}
        style={assignInlineVars({ [styles.borderColor]: errors?.receivedInvitationCode ? "#FF3B30" : "#818181" })}
        type="text"
        placeholder={PLACEHOLDER.receivedInvitationCode}
        {...register("receivedInvitationCode", {
          required: ERROR_MESSAGE.receivedInvitationCodeRequired,
        })}
      />
      <div className={styles.errorMessageContainer} style={assignInlineVars({ [styles.errorMessageVisibility]: errors?.receivedInvitationCode ? "visible" : "hidden" })}>
        <Image src={cautionIconSrc} alt="주의 아이콘 이미지" width={13} height={13} />
        <span className={styles.errorMessage}>{errors?.receivedInvitationCode?.message || ""}</span>
      </div>

      <button className={styles.button} type="submit">
        등록
      </button>
    </form>
  );
};
export default ParticipatePetGroupWithCodeForm;
