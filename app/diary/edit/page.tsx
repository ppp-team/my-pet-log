"use client";

import ImageInput from "@/components/Diary/ImageInput";
import { Form, useForm } from "react-hook-form";
import { getPrettyTime, getPrettyToday } from "@/utils/getPrettyToday";
import VanillaCalendar from "@/components/VanillaCalendar";
import * as styles from "./style.css";
import { Options } from "vanilla-calendar-pro";
import { useRef } from "react";
import VideoInput from "@/components/Diary/VideoInput";

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

  const dateRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const options: Options = {
    settings: {
      selected: {
        dates: [getPrettyToday()],
        time: getPrettyTime(),
      },
      selection: {
        time: true,
      },
    },
    actions: {
      changeTime(e, self) {
        if (timeRef.current) timeRef.current.innerText = ` ${self.selectedTime}`;
      },
      clickDay(e, self) {
        if (!self.selectedDates[0]) return;
        if (dateRef.current) dateRef.current.innerText = `${self.selectedDates[0]}`;
      },
    },
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
            {...register("title", { required: "제목을 입력해주세요.", maxLength: { value: 15, message: "최대 15자까지 작성할 수 있습니다." } })}
            maxLength={15}
            id="title"
            className={styles.input}
          />
          {watch("title") ? <p className={styles.p}>{watch("title")?.length}/ 15</p> : <p className={styles.p}>0/ 15</p>}
          {errors["title"] && <p className={styles.error}>{errors["title"].message?.toString()}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>날짜</label>
          {/* <input type="date" {...register("date")} className={styles.input} />
          <input type="time" {...register("time")} className={styles.input} /> */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className={styles.input} ref={dateRef}>
              {getPrettyToday()}
            </div>
            <div className={styles.input} ref={timeRef} suppressHydrationWarning>
              {getPrettyTime()}
            </div>
          </div>
          <VanillaCalendar config={options} />
        </div>

        <ImageInput register={register} setValue={setValue} />

        <VideoInput register={register} setValue={setValue} />

        <div className={styles.inputWrapper}>
          <label htmlFor="content" className={styles.label}>
            내용 *
          </label>
          <textarea
            {...register("content", { required: "내용을 입력해주세요.", maxLength: { value: 500, message: "최대 500자까지 작성할 수 있습니다." } })}
            maxLength={500}
            id="content"
            className={styles.input}
            style={{ height: "10rem" }}
          />
          {watch("content") ? <p className={styles.p}>{watch("content")?.length}/ 500</p> : <p className={styles.p}>0/ 500</p>}
          {errors["content"] && <p className={styles.error}>{errors["content"].message?.toString()}</p>}
        </div>

        <button className={styles.button}>작성하기</button>
      </Form>
    </div>
  );
};

export default EditPage;
