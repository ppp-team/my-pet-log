"use client";

import { Form, useForm } from "react-hook-form";
import { ERROR_MESSAGE } from "@/constatnts/inputConstant";
import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";

const removeSpaces = (str: string) => {
  return str.replace(/\s/g, "");
};

const ParticipatePetGroupForm = () => {
  const { register, control, handleSubmit, watch } = useForm({ mode: "onChange" });

  return (
    <Form control={control}>
      <input type="text" placeholder="반려동물 등록 코드 입력" maxLength={10} {...register("code")} />
      <div>
        <Image src={sampleImageSrc} alt="주의 아이콘 이미지" width={30} height={30} />
      </div>
      <button type="submit">등록</button>
    </Form>
  );
};
export default ParticipatePetGroupForm;
