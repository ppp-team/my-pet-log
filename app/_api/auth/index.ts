"use server";
import instance from "@/app/_api/axios";
import { cookies } from "next/headers";

interface FormData {
  email: string;
  password: string;
}

interface SocialData {
  email: string;
}

export const postLogin = async ({ email, password }: FormData) => {
  try {
    const res = await instance.post("/auth/signin", {
      email,
      password,
    });

    if (res.status === 200) {
      cookies().set("accessToken", res.data.access_token);
      cookies().set("refreshToken", res.data.refresh_token);
      return "signin success";
    }
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export const postSocial = async ({ email }: SocialData) => {
  try {
    const res = await instance.post("/auth/login/social", {
      email,
    });

    if (res.status === 200) {
      cookies().set("accessToken", res.data.access_token);
      cookies().set("refreshToken", res.data.refresh_token);
      return "signin success";
    }
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export const postLogout = async () => {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    const res = await instance.post(
      "/auth/logout",
      {},
      {
        headers: {
          accessToken: accessToken,
        },
      },
    );

    if (res.status === 204) {
      cookies().delete("accessToken");
      return true;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postSignup = async ({ email, password }: FormData) => {
  try {
    const res = await instance.post("/auth/signup", {
      email,
      password,
    });

    if (res.status === 200) {
      return "signup success";
    }
  } catch (error: any) {
    console.error(error);
    return null;
  }
};
