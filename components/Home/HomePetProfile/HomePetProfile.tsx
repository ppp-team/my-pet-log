import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";
import * as styles from "./HomePetProfile.css";
interface HomePetProfileProps {
  imageSrc?: string;
}

const HomePetProfile = ({ imageSrc }: HomePetProfileProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.petProfileImage} src={sampleImageSrc} alt="동물 프로필 이미지" width={180} height={180} />
      <p className={styles.petName}>{"동물 이름"}</p>
      <span className={styles.petInfo}>
        {"말티즈"} · {"여"} · {"3년 6개월"}
      </span>
      <p className={styles.subtitle}>⭐️ 나나의 스케줄을 잊지 마세요!</p>
    </div>
  );
};

export default HomePetProfile;
