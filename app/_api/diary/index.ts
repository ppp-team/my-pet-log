"use server";

import instance from "@/app/_api/axios";
import {
  DeleteCommentRequest,
  GetCommentsRequest,
  GetCommentsResponse,
  GetDiaryListRequest,
  GetDiaryListResponse,
  GetDiaryRequest,
  GetDiaryResponse,
  PostCommentRequest,
  PostDiaryRequest,
} from "@/app/_types/diary/type";

export const postDiary = async ({ petId, data }: PostDiaryRequest) => {
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

export const getDiaryList = async ({ petId, page, size }: GetDiaryListRequest): Promise<GetDiaryListResponse | null> => {
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
