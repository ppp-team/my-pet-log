"use server";

import instance from "@/app/_api/axios";
import { GuardianForLogsType } from "@/app/_types/guardians/types";
import { cookies } from "next/headers";

export const getGuardians = async (paramPetId?: number) => {
  let petId;
  if (paramPetId === undefined) {
    petId = cookies().get("petId")?.value;
  } else {
    petId = paramPetId;
  }
  try {
    const response = await instance.get(`/my/guardians/${petId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const getGuardiansForLogs = async (petId: number): Promise<GuardianForLogsType[]> => {
  try {
    const response = await instance.get(`/pets/${petId}/guardians`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
    return [];
  }
};

export const postInviteGuardian = async (email: string) => {
  const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.post(`/my/guardians/${petId}/invite`, {
      email,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    throw new Error(error.response.data.message);
  }
};

//내가 탈퇴하기
export const deleteMeGuardians = async (guardianId: number) => {
  const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.delete(`/my/guardians/${petId}`, {
      data: { guardianId },
    });
    if (response.status === 200) {
      cookies().delete("petId");
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

// 멤버들 삭제하기(강퇴)
export const deleteMemberGuardians = async (guardianId: number) => {
  const petId = cookies().get("petId")?.value;
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
