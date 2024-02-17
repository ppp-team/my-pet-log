"use server";

import instance from "@/app/_api/axios";
import { PetRegisterType } from "@/app/_types/pets/types";

export const postPet = async ({ data }: { data: PetRegisterType }) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("breed", data.breed);
    formData.append("gender", data.gender);
    formData.append("isNeutered", JSON.stringify(data.isNeutered));
    formData.append("birth", data.birth || "");
    formData.append("firstMeetDate", data.firstMeetDate || "");
    formData.append("weight", data.weight?.toString() || "");
    formData.append("registeredNumber", data.registeredNumber?.toString() || "");
    formData.append("petImageUrl", data.petImageUrl || "");

    const res = await instance.post(`/my/pets`, formData, { headers: { "Content-Type": "multipart/form-data" } });

    return res.data;
  } catch (error: any) {
    console.error(error.response);
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
      return response.data;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
