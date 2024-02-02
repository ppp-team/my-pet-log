"use client";

import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";
import { ERROR_MESSAGE } from "@/constants/inputConstant";
import removeSpaces from "@/utils/removeSpaces";

interface IForm {
  invitedCode: string;
  invalid: string;
}

const ParticipatePetGroupForm = () => {
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
      <input
        type="text"
        placeholder="반려동물 등록 코드 입력"
        {...register("invitedCode", {
          required: ERROR_MESSAGE.invitedCodeRequired,
          onChange: (e: FormEvent<HTMLInputElement>) => setValue("invitedCode", removeSpaces(e.currentTarget.value)),
        })}
      />
      {errors?.invitedCode?.message && (
        <div>
          <Image src={sampleImageSrc} alt="주의 아이콘 이미지" width={30} height={30} />
          <span>{errors.invitedCode.message}</span>
        </div>
      )}

      <button type="submit">등록</button>
    </form>
  );
};
export default ParticipatePetGroupForm;
