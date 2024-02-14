"use server";

import instance from "@/app/_api/axios";
import { PetsType } from "@/app/_types/petGroup/pets";

export const getPets = async () => {
  try {
    const response = await instance.get<PetsType>("/my/pets");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Pet data not found");
    }
  } catch (error) {
    throw new Error("Error fetching pet data");
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
