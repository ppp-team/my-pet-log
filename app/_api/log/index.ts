"use server";

import instance from "@/app/_api/axios";

export const getLogs = async (petId: number, year: number, month: number, day: number) => {
  try {
    const response = await instance.get(`/pets/${petId}/logs`, {
      params: { year, month, day },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
    return [];
  }
};

export const getLogDetail = async (petId: number, logId: number) => {
  try {
    const response = await instance.get(`/pets/${petId}/logs/${logId}`, {});
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
  }
};

export const deleteLog = async (petId: number, logId: number) => {
  try {
    const response = await instance.delete(`/pets/${petId}/logs/${logId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};
