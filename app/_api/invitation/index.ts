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
