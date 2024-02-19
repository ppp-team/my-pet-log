"use server";
import axios from "axios";
import { cookies } from "next/headers";

const BASE_URL = "http://13.124.44.0:8001/api/v1";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  let accessToken = cookies().get("accessToken")?.value;
  const refreshToken = cookies().get("refreshToken")?.value;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  //토큰 만료여부 확인
  const accessTokenExpiration = cookies().get("accessTokenExpiration");
  //액세스토큰 없거나 만료된 경우인데
  if (!accessToken || !accessTokenExpiration || new Date() > new Date(accessTokenExpiration)) {
    //1. 리프레쉬토큰도 없는 경우: 에러던지고 로그인페이지로 이동해야하는데 이동안됨
    if (!refreshToken) {
      throw new Error("No refreshToken available.");
    }

    //2. 리프레쉬토큰 있는경우 새로 토큰요청
    try {
      const res = await instance.post("/auth/refresh-token", { refreshToken });

      if (res.status === 200) {
        accessToken = res.data.accessToken;

        const accessTokenExpirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000); //24시간

        cookies().set("accessToken", accessToken, { expires: accessTokenExpirationDate });
        cookies().set("accessTokenExpiration", accessTokenExpirationDate.toISOString(), { expires: accessTokenExpirationDate });
        config.headers.Authorization = `Bearer ${accessToken}`;

        //새로운 액세스토큰으로 요청보내기
        return instance.request(config);
      }
    } catch (error) {
      console.error(error);
      //에러던지고 로그인페이지로 이동해야되는데 안됨
      throw new Error("Error refreshing accessToken");
    }
  }

  return config;
});

export default instance;
