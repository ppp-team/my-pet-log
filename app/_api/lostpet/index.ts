import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1543061/abandonmentPublicSrvc",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLostPet = async (pageNo: number, numOfRows: number) => {
  const myKey = "XTqXXeEeKIE8ta7%2BHCBICZqEKDi2PS%2BhJEPEDhePNPWvsilRUkRmfgCOsnkFZQblCTX2zr%2BtdInRCl61nw6Stg%3D%3D";

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
