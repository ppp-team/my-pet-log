import Image from "next/image";
import * as styles from "./HomePetProfile.css";
import { PetGroupType } from "@/app/_types/petGroup";
import calculateAge from "@/app/_utils/calculateAge";
import NoPetProfileIconSrc from "@/public/images/pet-profile-default.svg?url";

export const SAMPLE_CURRENT_PET: PetGroupType = {
  petId: "3",
  ownerId: "3",
  inviteCode: "",
  name: "멍멍이",
  type: "",
  breed: "말티즈",
  gender: "여",
  isNeutered: "Y",
  birth: "2022.01.01",
  weight: "5.5",
  registNumber: "",
  repStatus: "Y",
  petImageUrl: null,
};

const HomePetProfile = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.petProfileImage} src={SAMPLE_CURRENT_PET.petImageUrl ?? NoPetProfileIconSrc} alt="동물 프로필 이미지" width={180} height={180} priority={true} />
      <p className={styles.petName}>{SAMPLE_CURRENT_PET.name}</p>
      <span className={styles.petInfo}>
        {SAMPLE_CURRENT_PET?.breed && SAMPLE_CURRENT_PET.breed}
        {SAMPLE_CURRENT_PET?.gender && " · " + SAMPLE_CURRENT_PET.gender}
        {SAMPLE_CURRENT_PET?.birth && " · " + calculateAge(SAMPLE_CURRENT_PET.birth)}
      </span>
      <p className={styles.subtitle}>⭐️ {SAMPLE_CURRENT_PET.name}의 스케줄을 잊지 마세요!</p>
    </div>
  );
};

export default HomePetProfile;
