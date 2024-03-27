"use client";

import { Form, useForm } from "react-hook-form";
import * as styles from "./style.css";
import { useEffect } from "react";

const EditPage = () => {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const isTitleExist = (fieldValue: string) => {
    return fieldValue === "중복제목" ? true : false;
  };
  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        onSubmit={(data) => {
          console.log(data);
        }}
        control={control}
      >
        <div className={styles.inputWrapper}>
          <label htmlFor="title" className={styles.label}>
            제목 *
          </label>
          <input
            {...register("title", {
              required: "제목을 입력해주세요.",
              maxLength: { value: 15, message: "최대 15자까지 작성할 수 있습니다." },
              validate: (fieldValue: string) => {
                if (isTitleExist(fieldValue)) return "제목이 중복되었습니다. 다시 입력해주세요!";
              },
            })}
            maxLength={15}
            id="title"
            className={styles.input}
          />
          {watch("title") ? <p className={styles.p}>{watch("title")?.length}/ 15</p> : <p className={styles.p}>0/ 15</p>}
          {errors["title"] && <p className={styles.error}>{errors["title"].message?.toString()}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="content" className={styles.label}>
            내용
          </label>
          <input
            {...register("content", { required: "내용을 입력해주세요.", maxLength: { value: 15, message: "최대 15자까지 작성할 수 있습니다." } })}
            maxLength={15}
            id="content"
            className={styles.input}
          />
          {errors["content"] && <p className={styles.error}>{errors["content"].message?.toString()}</p>}
        </div>
        <button className={styles.button}>작성하기</button>
      </Form>
    </div>
  );
};

export default EditPage;
