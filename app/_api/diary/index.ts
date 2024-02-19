"use server";

import instance from "@/app/_api/axios";
import {
  GetCommentsRequest,
  GetCommentsResponse,
  GetDiaryListRequest,
  GetDiaryListResponse,
  GetDiaryResponse,
  PostCommentRequest,
  PutCommentRequest,
  getSearchDiaryRequest,
  postDiaryRequest,
} from "@/app/_types/diary/type";
import { cookies } from "next/headers";

// const petId = cookies().get("petId")?.value;

export const postDiary = async ({ formData }: { formData: FormData }) => {
  const petId = cookies().get("petId")?.value;
  try {
    const res = await instance.post(`/pets/${petId}/diaries`, formData, { headers: { "Content-Type": "multipart/form-data" } });

    return res.data;
  } catch (error: any) {
    throw Error("일기 생성 실패");
  }
};

export const getDiaryList = async ({ page, size }: GetDiaryListRequest) => {
  const petId = cookies().get("petId")?.value;
  try {
    const res = await instance.get(`/pets/${petId}/diaries`, { params: { page, size } });

    return await res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const getDiary = async ({ diaryId }: { diaryId: string | string[] }): Promise<GetDiaryResponse | null> => {
  const petId = cookies().get("petId")?.value;
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}`);

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const getComments = async ({ diaryId, page, size }: GetCommentsRequest): Promise<GetCommentsResponse | null> => {
  const petId = cookies().get("petId")?.value;
  try {
    const res = await instance.get(`pets/${petId}/diaries/${diaryId}/comments`, { params: { page, size } });

    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};

export const deleteDiary = async ({ diaryId }: { diaryId: string | string[] }) => {
  const petId = cookies().get("petId")?.value;
  try {
    await instance.delete(`pets/${petId}/diaries/${diaryId}`);
  } catch (error: any) {
    throw Error("일기 샥제 실패");
  }
};

export const postDiaryLike = async ({ diaryId }: { diaryId: string | string[] }) => {
  const petId = cookies().get("petId")?.value;
  await instance.post(`pets/${petId}/diaries/${diaryId}/like`);
};

export const postComment = async ({ diaryId, content }: PostCommentRequest) => {
  const petId = cookies().get("petId")?.value;
  await instance.post(`pets/${petId}/diaries/${diaryId}/comments`, { content });
};

export const deleteComment = async ({ commentId }: { commentId: number }) => {
  const petId = cookies().get("petId")?.value;
  await instance.delete(`pets/${petId}/diaries/comments/${commentId}`);
};

export const putComment = async ({ commentId, content }: PutCommentRequest) => {
  const petId = cookies().get("petId")?.value;
  await instance.put(`pets/${petId}/diaries/comments/${commentId}`, { content });
};

export const postCommentLike = async ({ commentId }: { commentId: number }) => {
  const petId = cookies().get("petId")?.value;
  await instance.post(`pets/${petId}/diaries/comments/${commentId}/like`);
};

export const getSearchDiary = async ({ page, size, keyword }: getSearchDiaryRequest): Promise<GetDiaryListResponse | null> => {
  const petId = cookies().get("petId")?.value;
  try {
    const res = await instance.get(`pets/${petId}/diaries/search`, { params: { page, size, keyword } });
    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return null;
  }
};
