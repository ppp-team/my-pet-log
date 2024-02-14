"use server";

import instance from "@/app/_api/axios";

export const getGuardians = async (petId: number) => {
  try {
    const response = await instance.get(`/my/guardians/${petId}`);
    return response.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};
