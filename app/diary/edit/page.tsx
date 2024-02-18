"use client";

import { postDiary } from "@/app/_api/diary";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/_components/DateInput";
import ErrorMessage from "@/app/_components/ErrorMessage";
import ImageInput from "@/app/diary/_components/ImageInput";
import VideoInput from "@/app/diary/_components/VideoInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as styles from "./style.css";
import { showToast } from "@/app/_components/Toast";
import { useAtom } from "jotai";
import { diaryImagesAtom } from "@/app/_states/atom";

interface Diary {
  title: string;
  content: string;
  date: string;
}

const MAX_LENGTH = { title: 15, content: 500 };

const petId = 2;

const EditPage = () => {
  const queryClient = useQueryClient();
  const postDiaryMutation = useMutation({
    mutationFn: (formData: FormData) => postDiary({ formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diaries", petId] });
      router.push("/diary");
      setDiaryImages([]);
    },
    onError: () => {
      showToast("일기 생성에 실패했습니다.", false);
    },
  });

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    watch,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const [diaryImages, setDiaryImages] = useAtom(diaryImagesAtom);

  const router = useRouter();

  return (
    <>
      <BackHeader title="육아일기 글작성" />
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(async (data) => {
            const formData = new FormData();

            const request: Diary = {
              title: data.title,
              content: data.content,
              date: data.date,
            };
            const blob = new Blob([JSON.stringify(request)], { type: "application/json" });
            formData.append("request", blob);

            if (diaryImages) {
              diaryImages.forEach((v) => formData.append("images", v.file));
            }

            postDiaryMutation.mutate(formData);
          })}
        >
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
            {errors.title && <ErrorMessage message={errors.title.message?.toString()} />}
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
            {errors.content && <ErrorMessage message={errors.content.message?.toString()} />}
          </div>

          <button className={styles.button}>작성하기</button>
        </form>
      </div>
    </>
  );
};

export default EditPage;
