import { getRefreshToken } from "@/app/_api/auth";
import axios from "axios";
import ExpiryMap from "expiry-map";
import { cookies } from "next/headers";
import pMemoize from "p-memoize";

const BASE_URL = "http://13.124.44.0:8001/api/v1";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = cookies().get("accessToken")?.value;
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

const cache = new ExpiryMap(1000);
const getNewAccessToken = pMemoize(
  async () => {
    const newAccessToken = await getRefreshToken();
    return newAccessToken;
  },
  { cache },
);

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    //토큰 만료 에러

    if (error.response.status === 401) {
      const newAccessToken = await getNewAccessToken();

      if (newAccessToken) {
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(error.config); //재요청
      }
    }

    return Promise.reject(error);
  },
);
export default instance;
