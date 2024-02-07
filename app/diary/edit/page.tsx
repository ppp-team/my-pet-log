"use client";

import DateInput from "@/components/@common/DateInput";
import ImageInput from "@/components/Diary/ImageInput";
import VideoInput from "@/components/Diary/VideoInput";
import { useForm } from "react-hook-form";
import * as styles from "./style.css";
import BackHeader from "@/components/@common/BackHeader";

const MAX_LENGTH = { title: 15, content: 500 };

const EditPage = () => {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    watch,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  return (
    <>
      <BackHeader title="육아일기 글작성" />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={styles.inputWrapper}>
            <label htmlFor="title" className={styles.label}>
              일기 제목 *
            </label>
            <input
              {...register("title", { required: "제목을 입력해주세요.", maxLength: { value: MAX_LENGTH.title, message: `최대 ${MAX_LENGTH.title}자까지 작성할 수 있습니다.` } })}
              id="title"
              className={styles.input}
            />
            {
              <p className={styles.p}>
                {watch("title")?.length ?? "0"}/ {MAX_LENGTH.title}
              </p>
            }
            {errors["title"] && <p className={styles.error}>{errors["title"].message?.toString()}</p>}
          </div>

          <DateInput register={register} setValue={setValue} getValue={getValues} />
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
              id="content"
              className={styles.input}
              style={{ height: "10rem" }}
            />
            {
              <p className={styles.p}>
                {watch("content")?.length ?? "0"}/ {MAX_LENGTH.content}
              </p>
            }
            {errors["content"] && <p className={styles.error}>{errors["content"].message?.toString()}</p>}
          </div>

          <button className={styles.button}>작성하기</button>
        </form>
      </div>
    </>
  );
};

export default EditPage;
