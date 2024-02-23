"use server";

import instance from "@/app/_api/axios";
import { cookies } from "next/headers";

export const postPet = async ({ formData }: { formData: FormData }) => {
  try {
    console.log("formData:", formData.get("petImage"));
    const res = await instance.post(`/my/pets`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // 응답 데이터 반환
    return res.data;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export const getPet = async ({ petId }: { petId: number }) => {
  // const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.get(`/my/pets/${petId}`);
    console.log("response:", response.data); //콘솔이 안찍힘...
    return response.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const getPets = async () => {
  try {
    const response = await instance.get("/my/pets");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const getCode = async () => {
  const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.get(`/my/pets/${petId}/code`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const putPet = async ({ petId, formData }: { petId: string; formData: FormData }) => {
  // const petId = cookies().get("petId")?.value;
  await instance.put(`my/pets/${petId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
};

export const editPetRep = async (petId: string) => {
  try {
    const response = await instance.post(`/my/guardians/${petId}/selectRep`);

    if (response.status === 200) {
      cookies().set("petId", petId);
      return response.data;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};

export const deletePet = async () => {
  const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.delete(`my/pets/${petId}`);
    if (response.status === 200) {
      console.log("삭제했당");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      console.error(error.response.data);
    } else {
      // 그 외의 서버 오류 처리
      console.error(error.response?.data);
    }
  }
};
