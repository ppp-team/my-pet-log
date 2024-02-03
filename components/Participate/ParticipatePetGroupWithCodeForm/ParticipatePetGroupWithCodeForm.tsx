"use client";

import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";
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
    formState: { errors },
  } = useForm<IForm>({ mode: "onTouched" });

  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>초대 코드</label>
      <input
        type="text"
        placeholder={PLACEHOLDER.receivedInvitationCode}
        {...register("receivedInvitationCode", {
          required: ERROR_MESSAGE.receivedInvitationCodeRequired,
          onChange: (e: FormEvent<HTMLInputElement>) => setValue("receivedInvitationCode", removeSpaces(e.currentTarget.value)),
        })}
      />
      {errors?.receivedInvitationCode?.message && (
        <div>
          <Image src={sampleImageSrc} alt="주의 아이콘 이미지" width={30} height={30} />
          <span>{errors.receivedInvitationCode.message}</span>
        </div>
      )}

      <button type="submit">등록</button>
    </form>
  );
};
export default ParticipatePetGroupWithCodeForm;
