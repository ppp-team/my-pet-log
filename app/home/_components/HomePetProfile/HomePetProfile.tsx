"use client";

import Image from "next/image";
import * as styles from "./HomePetProfile.css";
import { PetsType } from "@/app/_types/petGroup/types";
import calculateAge from "@/app/_utils/calculateAge";
import NoPetProfileIconSrc from "@/public/images/pet-profile-default.svg?url";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "@/app/_api/pets";

const HomePetProfile = () => {
  const { data: pets } = useQuery<PetsType>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  });

  const petList = pets?.data ?? [];

  const currentPetGroup = petList.find((petGroup) => petGroup.repStatus === "REPRESENTATIVE") ?? petList[0];

  if (!currentPetGroup) return <></>;
  return (
    <div className={styles.container}>
      <Image className={styles.petProfileImage} src={currentPetGroup.petImageUrl ?? NoPetProfileIconSrc} alt="동물 프로필 이미지" width={180} height={180} priority={true} />
      <p className={styles.petName}>{currentPetGroup.name}</p>
      <span className={styles.petInfo}>
        {currentPetGroup.breed && currentPetGroup.breed}
        {currentPetGroup.gender && " · " + (currentPetGroup.gender === "FEMALE" ? "여" : "남")}
        {currentPetGroup.birth && " · " + calculateAge(currentPetGroup.birth)}
      </span>
      <p className={styles.subtitle}>⭐️ {currentPetGroup.name}의 스케줄을 잊지 마세요!</p>
    </div>
  );
};

export default HomePetProfile;
