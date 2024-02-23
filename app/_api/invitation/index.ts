"use server";

import instance from "@/app/_api/axios";
import { cookies } from "next/headers";

export const getInvitations = async () => {
  try {
    const response = await instance.get("/my/invitations");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const getMyInvitations = async () => {
  const petId = cookies().get("petId")?.value;
  try {
    const response = await instance.get(`/my/invitations/${petId}/my-invitations`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postAcceptance = async (invitationId: number) => {
  try {
    const response = await instance.post("/my/acceptance", {
      invitationId,
    });

    if (response.status === 200) {
      return invitationId;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const postRefusal = async (invitationId: number) => {
  try {
    const response = await instance.post("/my/refusal", {
      invitationId,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const postCancel = async (invitationId: number) => {
  try {
    const response = await instance.post("/my/invitations/cancel", {
      invitationId,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const postRegister = async (inviteCode: string) => {
  try {
    const response = await instance.post("/my/invitations/register", {
      inviteCode,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    return false;
  }
};
