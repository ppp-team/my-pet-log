import { getLostPet } from "@/app/_api/lostpet";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as styles from "./style.css";

const LostPet = () => {
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const shortenAddress = (address: string) => {
    const parts = address.split(" ");
    if (parts.length > 2) {
      return `${parts[0]} ${parts[1]}`;
    }
    return address;
  };

  const router = useRouter();
  const randomPage = getRandomInt(1, 9);

  const {
    data: lostPet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["lostPet", randomPage, 10],
    queryFn: () => getLostPet(randomPage, 10),
  });

  return (
    <div className={styles.lostPetWrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.lostPetTitle}>🏡 저와 함께 집에 갈래요?</p>
        <button className={styles.moreButton} onClick={() => router.push("https://animal.seoul.go.kr/index")}>
          {"자세히보기 >"}
        </button>
      </div>
      <div className={styles.lostPetCardList}>
        {isLoading ? (
          <p>유기동물 정보 로딩 중...</p>
        ) : error ? (
          <p>유기동물 데이터를 불러오는 데 실패했습니다.</p>
        ) : (
          lostPet?.map((lostPetData: any) => (
            <div key={lostPetData.desertionNo} className={styles.lostPetCard}>
              <Image className={styles.lostPetImage} src={lostPetData.popfile || "/default-thumbnail.png"} alt="유기동물 사진" width={63} height={63} objectFit="cover" />
              <div className={styles.lostPetCardDetail}>
                <div>품종: {lostPetData.kindCd}</div>
                <div>공고일: {lostPetData.noticeSdt}</div>
                <div>발견장소: {shortenAddress(lostPetData.happenPlace)}</div>
                <div>보호소: {lostPetData.careNm}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LostPet;
