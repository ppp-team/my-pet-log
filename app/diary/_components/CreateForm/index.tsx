"use client";

import { postDiary } from "@/app/_api/diary";
import BackHeader from "@/app/_components/BackHeader";
import DateInput from "@/app/diary/_components/DateInput";
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
import { FormInput } from "@/app/diary/_components/EditForm";
import { getPrettyToday } from "@/app/_utils/getPrettyToday";
import { ContentInput, TitleInput } from "@/app/diary/_components/FormInput";

interface Diary {
  title: string;
  content: string;
  date: string;
}

const MAX_LENGTH = { title: 15, content: 500 };

const CreateForm = ({ petId }: { petId: number }) => {
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
  } = useForm<FormInput>({ mode: "onChange", defaultValues: { date: getPrettyToday() } });

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
          <TitleInput register={register} watch={watch} />
          {errors.title && <ErrorMessage message={errors.title.message?.toString()} />}
          {errors.title && <ErrorMessage message={errors.title.message?.toString()} />}

          <DateInput register={register} setValue={setValue} getValue={getValues} />
          <ImageInput register={register} setValue={setValue} />
          <VideoInput register={register} setValue={setValue} />

          <div className={styles.inputWrapper}>
            <ContentInput register={register} watch={watch} />
            {errors.content && <ErrorMessage message={errors.content.message?.toString()} />}
          </div>
          <button className={styles.button}>작성하기</button>
        </form>
      </div>
    </>
  );
};

export default CreateForm;
