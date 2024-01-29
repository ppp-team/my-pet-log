"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./style.css";
import EditIcon from "@/assets/edit.svg";
import Image from "next/image";
import ImageInput from "@/components/Diary/ImageInput";
import { watch } from "fs";

const EditPage = () => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    getValues,
    watch,
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
          // console.log(getValues("image"));
          e.preventDefault();
        }}
      >
        <div className={styles.inputWrapper}>
          <label htmlFor="title" className={styles.label}>
            제목
          </label>
          <input {...register("title")} maxLength={15} id="title" className={styles.input} />
          {watch("title") ? <p className={styles.p}>{watch("title")?.length}/ 15</p> : <p className={styles.p}>0/ 15</p>}
        </div>

        <label className={styles.label}>날짜</label>
        <div>
          <input type="date" {...register("date")} />
          <input type="time" />
        </div>

        <ImageInput register={register} />

        <label>동영상</label>
        <input type="file" accept="video/*" {...register("video")} />
        <div className={styles.inputWrapper}>
          <label htmlFor="content" className={styles.label}>
            내용
          </label>
          <textarea {...register("content")} maxLength={500} id="content" className={styles.input} style={{ height: "10rem" }} />
          {watch("content") ? <p className={styles.p}>{watch("content")?.length}/ 500</p> : <p className={styles.p}>0/ 500</p>}
        </div>

        <button className={styles.button} type="submit">
          작성하기
        </button>
      </form>
    </div>
  );
};

export default EditPage;
