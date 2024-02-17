"use server";

import instance from "@/app/_api/axios";
import { GetCommentsRequest, GetCommentsResponse, GetDiaryListRequest, GetDiaryResponse, PostCommentRequest, PutCommentRequest, postDiaryRequest } from "@/app/_types/diary/type";
import { cookies } from "next/headers";

const petId = cookies().get("petId")?.value;

export const postDiary = async ({ data }: { data: postDiaryRequest }) => {
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

export const getDiary = async ({ diaryId }: { diaryId: string | string[] }): Promise<GetDiaryResponse | null> => {
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}`);

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const getComments = async ({ diaryId, page, size }: GetCommentsRequest): Promise<GetCommentsResponse | null> => {
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}/comments`, { params: { page, size } });

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const deleteDiary = async ({ diaryId }: { diaryId: string | string[] }) => {
  try {
    await instance.delete(`pets/${petId}/diaries/${diaryId}`);
  } catch (error: any) {
    throw Error("일기 샥제 실패");
  }
};

export const postComment = async ({ diaryId, content }: PostCommentRequest) => {
  await instance.post(`pets/${petId}/diaries/${diaryId}/comments`, { content });
};

export const deleteComment = async ({ commentId }: { commentId: number }) => {
  await instance.delete(`pets/${petId}/diaries/comments/${commentId}`);
};

export const putComment = async ({ commentId, content }: PutCommentRequest) => {
  await instance.put(`pets/${petId}/diaries/comments/${commentId}`, { content });
};
