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
    throw Error("일기 생성 실패");
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

export const getDiary = async ({ petId, diaryId }: GetDiaryRequest): Promise<GetDiaryResponse | null> => {
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}`);

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const getComments = async ({ petId, diaryId }: GetCommentsRequest): Promise<GetCommentsResponse | null> => {
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}/comments`);

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const deleteDiary = async ({ petId, diaryId }: GetDiaryRequest) => {
  try {
    await instance.delete(`pets/${petId}/diaries/${diaryId}`);
  } catch (error: any) {
    throw Error("일기 샥제 실패");
  }
};

export const postComment = async ({ petId, diaryId, content }: PostCommentRequest) => {
  await instance.post(`pets/${petId}/diaries/${diaryId}/comments`, { content });
};

export const deleteComment = async ({ petId, commentId }: DeleteCommentRequest) => {
  await instance.delete(`pets/${petId}/diaries/comments/${commentId}`);
};

export const putComment = async ({ petId, commentId, content }: PutCommentRequest) => {
  await instance.put(`pets/${petId}/diaries/comments/${commentId}`, { content });
};
