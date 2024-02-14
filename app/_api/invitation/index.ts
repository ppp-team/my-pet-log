"use server";

import instance from "@/app/_api/axios";

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

export const postAcceptance = async (invitationId: number) => {
  try {
    const response = await instance.post("/my/acceptance", {
      invitationId,
    });

    if (response.status === 200) {
      return true;
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
