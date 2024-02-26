"use server";
import instance from "@/app/_api/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export const postLogin = async ({ email, password }: FormData) => {
  try {
    const res = await instance.post("/auth/signin", {
      email,
      password,
    });

    if (res.status === 200) {
      cookies().set("accessToken", res.data.access_token);
      cookies().set("refreshToken", res.headers.refreshtoken);
      return "signin success";
    }
  } catch (error: any) {
    console.error(error.response.data.message);
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
      cookies().delete("petId");
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
    console.error(error.response.data.message);
    return null;
  }
};

export const getRefreshToken = async () => {
  try {
    const res = await fetch(`http://13.124.44.0:8001/api/v1/auth/refresh-token`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
        refreshToken: `${cookies().get("refreshToken")?.value}`,
      },
    });
    if (res.status == 200) {
      //accessToken갱신
      const data = await res.json();
      cookies().set("accessToken", data.access_token);
      return data.access_token;
    } else {
      throw new Error("refresh token expired");
    }
  } catch (e) {
    //refresh-token도 만료됐다면 로그아웃
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
    cookies().delete("petId");
    redirect("/login");
  }
};
