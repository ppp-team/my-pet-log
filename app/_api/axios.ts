// import axios from "axios";
// import { setCookie, getCookie } from "cookies-next";
// import { cookies } from "next/headers";

// const baseURL = "http://13.124.44.0:8001/api/v1";

// const instance = axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// instance.interceptors.request.use(
//   async (config) => {
//     const accessToken = getCookie("accessToken", { cookies });
//     const refreshToken = getCookie("refreshToken", { cookies });

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     if (!accessToken || !refreshToken) {
//       throw new Error("토큰이 없거나 만료되었습니다.");
//     }

//     return config;
//   },
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     const refreshToken = getCookie("refreshToken", { cookies });

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const { data } = await axios.post("/auth/refresh-token", { refreshToken });

//         // 서버에서 받은 새로운 accessToken을 설정
//         setCookie("accessToken", data.accessToken);

//         originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
//         return axios(originalRequest);
//       } catch (error) {
//         console.error(error);
//         throw new Error("토큰을 확인해 주세요");
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// export default instance;

import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const instance = axios.create({
  baseURL: "http://13.124.44.0:8001/api/v1",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    //쿠키에서 액세스토큰, 리프레시토큰 가져와서 헤더에 주입
    const userAccessToken = getCookie(null, "accessToken");
    const userRefreshToken = getCookie(null, "refreshToken");

    if (userAccessToken) {
      config.headers.Authorization = `Bearer ${userAccessToken}`;
    }

    if (userRefreshToken) {
      config.headers["Authorization-refresh"] = userRefreshToken;
    }

    console.log("request start", config);
    return config;
  },
  (error) => {
    console.log("request error", error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    // 응답이 올바르다면 그대로 고
    console.log("get response", response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      const originalRequest = config;
      const userAccessToken = getCookie(null, "accessToken");
      const userRefreshToken = getCookie(null, "refreshToken");

      //리프레시토큰이 쿠키에 있는지 확인하고 리프레시토큰 있다면 NEW액세스토큰 가져와서 재요청
      if (userAccessToken && userRefreshToken) {
        try {
          const { data } = await axios.post("auth/refresh-token", {
            accessToken: userAccessToken,
            refreshToken: userRefreshToken,
          });

          // NEW액세스토큰 쿠키에 저장
          const { accessToken: newAccessToken } = data;
          setCookie(null, "accessToken", newAccessToken);

          //액세스토큰을 NEW액세스토큰으로 업데이트
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          //재요청
          return axios(originalRequest);
        } catch (error) {
          console.error(error);
          throw error;
        }
      } else {
        // 리프레시 토큰이 없으면 로그인 페이지로 이동
        window.location.replace("/login");
      }
      // 응답이 에러코드라면 로그인 페이지로 이동
    } else if (status === 403) {
      window.location.replace("/login");
    } else if (status === 400) {
      window.location.replace("/login");
    }

    console.log("response error", error);
    return Promise.reject(error);
  },
);

export default instance;
