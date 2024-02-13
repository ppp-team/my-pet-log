import axios from "axios";
import { cookies } from "next/headers";

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

export default instance;
