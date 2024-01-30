"use client";

import ImageInput from "@/components/Diary/ImageInput";
import { useForm } from "react-hook-form";
import { getPrettyTime, getPrettyToday } from "@/utils/getPrettyToday";
import VanillaCalendar from "@/components/VanillaCalendar";
import * as styles from "./style.css";
import { Options } from "vanilla-calendar-pro";
import { useRef } from "react";

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

        <div className={styles.inputWrapper}>
          <label className={styles.label}>날짜</label>
          {/* <input type="date" {...register("date")} className={styles.input} />
          <input type="time" {...register("time")} className={styles.input} /> */}

          <div style={{ display: "flex", gap: "1rem" }}>
            <div className={styles.input} ref={dateRef}>
              {getPrettyToday()}
            </div>
            <div className={styles.input} ref={timeRef}>
              {getPrettyTime()}
            </div>
          </div>
          <VanillaCalendar config={options} />
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
