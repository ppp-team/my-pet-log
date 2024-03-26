"use server";

import instance from "@/app/_api/axios";

//구독자 리스트 조회
export const getSubscriberList = async (petId: number) => {
  try {
    const response = await instance.get(`/pets/${petId}/subscriptions`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

//구독 및 구독 취소
export const postPetSubscriptions = async (petId: number) => {
  try {
    const response = await instance.post(`/pets/${petId}/subscriptions`);
    return response.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

//구독중인 펫계정 조회
export const getSubscribedPet = async () => {
  try {
    const response = await instance.get("/pets/subscriptions");
    return response.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};
