"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { NICKNAME_RULES, PLACEHOLDER } from "@/constants/inputConstant";
import { useState } from "react";
import Image from "next/image";
import basicIcon from "@/assets/invite-petcard.svg?url";

interface IFormInput {
  nickname: string;
  image: File[];
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });
  const [imagePreview, setImagePreview] = useState<string>(basicIcon);

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (files[0]) {
    }
    setImagePreview(URL.createObjectURL(files[0]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="image">
        <Image src={imagePreview} alt="Preview" width={50} height={50} />
      </label>
      <input id="image" type="file" accept="image/*" {...register("image")} onChange={handleImageChange} style={{ display: "none" }} />

      <label>닉네임</label>
      <input {...register("nickname", NICKNAME_RULES)} placeholder={PLACEHOLDER.nickname} />
      {errors.nickname && <span>{errors.nickname.message}</span>}

      <button type="submit">확인</button>
    </form>
  );
};

export default Page;
