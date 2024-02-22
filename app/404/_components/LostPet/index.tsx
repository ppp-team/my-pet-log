import { getLostPet } from "@/app/_api/lostpet";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as styles from "./style.css";

const LostPet = () => {
  const router = useRouter();

  const {
    data: lostPet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["lostPet", 1, 10],
    queryFn: () => getLostPet(1, 10),
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
          <p>로딩 중...</p>
        ) : error ? (
          <p>데이터를 불러오는 데 실패했습니다.</p>
        ) : (
          lostPet?.map((lostPetData: any) => (
            <div key={lostPetData.desertionNo} className={styles.lostPetCard}>
              <Image className={styles.lostPetImage} src={lostPetData.popfile || "/default-thumbnail.png"} alt="유기동물 사진" width={63} height={63} />
              <div className={styles.lostPetCardDetail}>
                <div>품종: {lostPetData.kindCd}</div>
                <div>공고일: {lostPetData.noticeSdt}</div>
                <div>발견장소: {lostPetData.happenPlace}</div>
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
