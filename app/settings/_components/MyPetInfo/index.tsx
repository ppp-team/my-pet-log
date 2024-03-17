import calculateAge from "@/app/_utils/calculateAge";
import { profile, container, info, name, detail, breed, iconWrapper, icon } from "./style.css";
import { PetType } from "@/app/_types/pets/types";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import Image from "next/image";
import EditIcon from "@/public/icons/edit-petcard.svg?url";
import Link from "next/link";

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
  const age = petInfo.birth ? ` · ${calculateAge(petInfo.birth)}` : "";

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
        <span className={name} style={{ color: nameTextColor }}>
          {petInfo.name}
        </span>
        <span className={breed} style={{ color: breedTextColor }}>
          {petInfo.breed}
        </span>
        <span className={detail} style={{ color: breedTextColor }}>
          {gender}
          {age}
        </span>
      </div>
      <Link href={`/settings/pet-info/${petInfo.petId}`} className={iconWrapper}>
        <Image className={icon} src={EditIcon} alt="Edit icon" width={20} height={20} />
      </Link>
    </div>
  );
};

export default MyPetInfo;
