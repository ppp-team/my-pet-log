"use server";

import instance from "@/app/_api/axios";

export const getMe = async () => {
  try {
    const response = await instance.get("/users/me");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postCheckNickname = async (nickname: string) => {
  try {
    const response = await instance.post("/users/check/nickname", {
      nickname,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.log(error.response);
    if (error.response?.status === 409) {
      throw new Error("이미 사용 중인 닉네임입니다.");
    }
    throw error;
  }
};

export interface postUserProfilePropType {
  nickname: string;
  profileImage?: string;
}

export const postUserProfile = async ({ formData }: { formData: FormData }) => {
  try {
    const response = await instance.post("/users/profile", formData, { headers: { "Content-Type": "multipart/form-data" } });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return false;
  }
};

export const putUserProfile = async ({ formData }: { formData: FormData }) => {
  try {
    const response = await instance.put("/users/profile", formData, { headers: { "Content-Type": "multipart/form-data" } });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postUserProfileImage = async ({ formData }: { formData: FormData }) => {
  try {
    const response = await instance.post("/users/profile/image", formData, { headers: { "Content-Type": "multipart/form-data" } });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postCheckPassword = async (password: string) => {
  try {
    const response = await instance.post("/users/password/validation", {
      password,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    if (error.response?.status === 400) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};
