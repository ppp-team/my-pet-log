"use server";

import instance from "@/app/_api/axios";
import { Diary, GetDiaryListRequest } from "@/app/_types/diary/type";
import { cookies } from "next/headers";

const petId = cookies().get("petId")?.value;

export const postDiary = async ({ data }: { data: Diary }) => {
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

export const getDiaryList = async ({ page, size }: GetDiaryListRequest) => {
  try {
    const res = await instance.get(`/pets/${petId}/diaries`, { params: { page, size } });

    return await res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};
