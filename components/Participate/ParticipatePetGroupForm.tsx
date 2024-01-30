"use client";

import { ERROR_MESSAGE } from "@/constatnts/inputConstant";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const removeSpaces = (str: string) => {
  return str.replace(/\s/g, "");
};

const ParticipatePetGroupForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
  } = useForm();

  const [inputError, setInputError] = useState<keyof typeof ERROR_MESSAGE | undefined>();

  // 실시간 input 값
  // const code = watch("code");
  // 아예 input 값을 입력한 적이 없으면 undefined, 값을 입력했다가 다 지우면 '' 빈 스트링

  const onSubmit = (data) => {
    const dataWithoutSpaces = removeSpaces(data?.code);

    // 빈 값 검사
    if (!dataWithoutSpaces) {
      setInputError("invitedCodeRequired");
    } else {
      // api 리퀘스트
      console.log(dataWithoutSpaces);
    }

    // 틀린 초대코드 입력 예시
    if (dataWithoutSpaces === "invalid") {
      setInputError("invitedCodeInvalid");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="반려동물 등록 코드 입력" maxLength={10} {...register("code")} />

      <div>
        <Image src="" alt="주의 아이콘 이미지" />
        {inputError && <p>{ERROR_MESSAGE[inputError]}</p>}
      </div>

      <button type="submit">등록</button>
    </form>
  );
};
export default ParticipatePetGroupForm;
