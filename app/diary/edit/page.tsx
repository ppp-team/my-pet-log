"use client";

import DateInput from "@/components/Diary/DateInput";
import ImageInput from "@/components/Diary/ImageInput";
import VideoInput from "@/components/Diary/VideoInput";
import { Form, useForm } from "react-hook-form";
import * as styles from "./style.css";

const MAX_LENGTH = { title: 15, content: 500 };

const EditPage = () => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    getValues,
    setValue,
    watch,
    clearErrors,
  } = useForm({ mode: "onChange" });

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
            {...register("title", { required: "제목을 입력해주세요.", maxLength: { value: MAX_LENGTH.title, message: `최대 ${MAX_LENGTH.title}자까지 작성할 수 있습니다.` } })}
            maxLength={MAX_LENGTH.title}
            id="title"
            className={styles.input}
          />
          {watch("title") ? (
            <p className={styles.p}>
              {watch("title")?.length}/ {MAX_LENGTH.title}
            </p>
          ) : (
            <p className={styles.p}>0/ {MAX_LENGTH.title}</p>
          )}
          {errors["title"] && <p className={styles.error}>{errors["title"].message?.toString()}</p>}
        </div>

        <DateInput register={register} setValue={setValue} />
        <ImageInput register={register} setValue={setValue} />
        <VideoInput register={register} setValue={setValue} />

        <div className={styles.inputWrapper}>
          <label htmlFor="content" className={styles.label}>
            내용 *
          </label>
          <textarea
            {...register("content", {
              required: "내용을 입력해주세요.",
              maxLength: { value: MAX_LENGTH.content, message: `최대 ${MAX_LENGTH.content}자까지 작성할 수 있습니다.` },
            })}
            maxLength={MAX_LENGTH.content}
            id="content"
            className={styles.input}
            style={{ height: "10rem" }}
          />
          {watch("content") ? (
            <p className={styles.p}>
              {watch("content")?.length}/ {MAX_LENGTH.content}
            </p>
          ) : (
            <p className={styles.p}>0/ {MAX_LENGTH.content}</p>
          )}
          {errors["content"] && <p className={styles.error}>{errors["content"].message?.toString()}</p>}
        </div>

        <button className={styles.button}>작성하기</button>
      </Form>
    </div>
  );
};

export default EditPage;
