"use server";

import instance from "@/app/_api/axios";

export const getLogs = async (petId: number, year: number, month: number, day: number) => {
  try {
    const response = await instance.get(`/pets/${petId}/logs`, {
      params: { year, month, day },
    });
    return response.data;
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
    return [];
  }
};
