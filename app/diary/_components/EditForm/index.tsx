"use client";

import { getDiary, putDiary } from "@/app/_api/diary";
import BackHeader from "@/app/_components/BackHeader";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { showToast } from "@/app/_components/Toast";
import { deletedImagesAtom, diaryImagesAtom } from "@/app/_states/atom";
import * as styles from "@/app/diary/_components/CreateForm/style.css";
import DateInput from "@/app/diary/_components/DateInput";
import { ContentInput, TitleInput } from "@/app/diary/_components/FormInput";
import ImageInput from "@/app/diary/_components/ImageInput";
import VideoInput from "@/app/diary/_components/VideoInput";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Diary {
  title: string;
  content: string;
  date: string;
  deletedMediaIds?: number[];
}

export interface FormInput {
  title: string;
  content: string;
  date: string;
  images?: File[] | null;
  video?: File;
}

export interface DiaryImagesType {
  mediaId: number;
  path: string;
}

const EditForm = ({ petId, diaryId }: { petId: number; diaryId: number }) => {
  const [oldImages, setOldImages] = useState<DiaryImagesType[]>([]);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: diary, isSuccess } = useQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ diaryId }) });

  const putDiaryMutation = useMutation({
    mutationFn: (formData: FormData) => putDiary({ diaryId, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diaries", petId] });
      queryClient.invalidateQueries({ queryKey: ["diary", { petId, diaryId }] });
      setDeletedImages([]);
      setDiaryImages([]);
      router.replace(`/diary/detail/${diaryId}`);
    },
    onError: () => {
      showToast("일기 수정에 실패했습니다.", false);
    },
  });

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    watch,
    handleSubmit,
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      date: diary?.date,
    },
  });

  useEffect(() => {
    if (diary) {
      setValue("title", diary.title);
      setValue("content", diary.content);
      setValue("date", diary.date.replaceAll(".", "-"));
      setOldImages([...diary.images]);
    }
  }, [isSuccess]);

  const [diaryImages, setDiaryImages] = useAtom(diaryImagesAtom);
  const [deletedImages, setDeletedImages] = useAtom(deletedImagesAtom);
  return (
    <>
      <BackHeader title="육아일기 수정" styleTop="0" />
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(async (data) => {
            console.log(data);
            const formData = new FormData();

            const request: Diary = {
              title: data.title,
              content: data.content,
              date: data.date,
            };

            if (deletedImages) {
              request.deletedMediaIds = deletedImages;
            }
            const blob = new Blob([JSON.stringify(request)], { type: "application/json" });
            formData.append("request", blob);

            if (diaryImages) {
              diaryImages.forEach((v) => formData.append("images", v.file));
            }

            putDiaryMutation.mutate(formData);
          })}
        >
          <TitleInput register={register} watch={watch} />
          {errors.title && <ErrorMessage message={errors.title.message?.toString()} />}

          <DateInput register={register} setValue={setValue} getValue={getValues} />
          <ImageInput register={register} setValue={setValue} oldImages={oldImages} />
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

export default EditForm;
