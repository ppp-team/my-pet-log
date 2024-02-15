"use server";

import instance from "@/app/_api/axios";

export const getGuardians = async (petId: number) => {
  try {
    const response = await instance.get(`/my/guardians/${petId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const postInviteGuardian = async (petId: number, email: string) => {
  try {
    const response = await instance.post(`/my/guardians/${petId}/invite`, {
      email,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const deleteGuardians = async (petId: number, guardianId: number) => {
  try {
    const response = await instance.delete(`/my/guardians/${petId}`, {
      data: { guardianId },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};
