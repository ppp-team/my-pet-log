import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1543061/abandonmentPublicSrvc",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLostPet = async (pageNo: number, numOfRows: number) => {
  const myKey = process.env.NEXT_PUBLIC_LOSTPET_API_KEY || "";

  try {
    const serviceKey = encodeURIComponent(myKey);
    const url = `/abandonmentPublic`;
    const params = {
      serviceKey: serviceKey,
      pageNo: pageNo,
      numOfRows: numOfRows,
      _type: "json",
    };

    const response = await instance.get(url, { params });
    if (response.status === 200 && response.data.response.body.items.item) {
      return response.data.response.body.items.item;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};
