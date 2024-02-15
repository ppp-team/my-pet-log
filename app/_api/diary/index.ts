"use server";

import instance from "@/app/_api/axios";
import { Diary, GetDiaryListRequest } from "@/app/_types/diary/diary.type";

export const postDiary = async ({ petId, data }: { petId: number; data: Diary }) => {
  try {
    const formData = new FormData();
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    formData.append("request", blob);
    const res = await instance.post(`/pets/${petId}/diaries`, formData, { headers: { "Content-Type": "multipart/form-data" } });

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const getDiaryList = async ({ petId, page, size }: GetDiaryListRequest) => {
  try {
    const res = await instance.get(`/pets/${petId}/diaries`, { params: { page, size } });

    return await res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};
