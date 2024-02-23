import calculateAge from "@/app/_utils/calculateAge";
import { profile, container, info } from "./style.css";
import { PetType } from "@/app/_types/pets/types";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import Image from "next/image";

interface StyleProps {
  styles?: {
    profileBorderColor: string;
    nameTextColor: string;
    breedTextColor: string;
  };
}

interface MyPetProps extends StyleProps {
  petInfo: PetType;
}

const MyPetInfo = ({ petInfo, styles }: MyPetProps) => {
  // 프롭 안넘겨줄 시 기본값들
  const { profileBorderColor = "var(--MainOrange)", nameTextColor = "var(--Black)", breedTextColor = "var(--Gray81)" } = styles || {};
  const gender = petInfo.gender === "MALE" ? "남아" : "여아";

  return (
    <div className={container}>
      <Image
        style={{ border: `3px solid ${profileBorderColor}` }}
        className={profile}
        src={getImagePath(petInfo.petImageUrl)}
        alt="profile icon"
        width={70}
        height={70}
        priority={true}
      />
      <div className={info}>
        <span style={{ fontSize: "1.8rem", fontWeight: "600", color: nameTextColor }}>{petInfo.name}</span>
        <span style={{ fontSize: "1.2rem", fontWeight: "500", color: breedTextColor }}>{petInfo.breed}</span>
        <span style={{ fontSize: "1.2rem", fontWeight: "500", color: breedTextColor }}>
          {gender} · {calculateAge(petInfo.birth)}
        </span>
      </div>
    </div>
  );
};

export default MyPetInfo;
