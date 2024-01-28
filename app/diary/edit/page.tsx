"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./style.css";
import EditIcon from "@/assets/edit.svg";
import Image from "next/image";
import ImageInput from "@/components/Diary/ImageInput";

const EditPage = () => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
  } = useForm({ mode: "onBlur" });

  //   const handleSubmit: SubmitHandler<any> = (data: any) => {
  //     console.log(data);
  //   };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>제목</label>
        <input {...register("title")} />
        <label>날짜</label>
        <div>
          <input type="date" {...register("date")} />
          <input type="time" />
        </div>

        <ImageInput register={register} />
        <label>동영상</label>
        <input type="file" accept="video/*" {...register("video")} />
        <label>내용</label>
        <input {...register("content")} />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};

export default EditPage;
