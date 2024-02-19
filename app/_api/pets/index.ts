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

export const getPet = async (petId: number) => {
  try {
    const response = await instance.get(`/my/pets/${petId}`);
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

export const getCode = async (petId: number) => {
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

export const editPetRep = async (petId: string) => {
  try {
    const response = await instance.post(`/my/pets/${petId}/selectRep`);

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
