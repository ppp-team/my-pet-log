"use server";

import instance from "@/app/_api/axios";
import { UserType } from "@/app/_types/users/types";

export const getMe = async () => {
  try {
    const response = await instance.get<UserType>("/users/me");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
