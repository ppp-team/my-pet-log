import calculateAge from "@/utils/calculateAge";
import { profile, container, info } from "./style.css";

//타입 추후에 다른 파일로 빼기
interface MyPetProps {
  petInfo: {
    petId: string;
    ownerId: string;
    inviteCode: string;
    name: string;
    type: string;
    breed: string;
    gender: string;
    weight: string;
    isNeutered: string;
    birth: string;
    firstMeetDate: string;
    registNumber: string;
    repStatus: string;
    petImageUrl: string;
  };
  styles?: {
    profileBorderColor: string;
    nameTextColor: string;
    breedTextColor: string;
  };
}

const MyPetInfo = ({ petInfo, styles }: MyPetProps) => {
  // 프롭 안넘겨줄 시 기본값들
  const { profileBorderColor = "var(--MainOrange)", nameTextColor = "var(--Black)", breedTextColor = "var(--Gray81)" } = styles || {};

  return (
    <div className={container}>
      <div
        style={{
          backgroundImage: `url(${petInfo.petImageUrl})`,
          border: `3px solid ${profileBorderColor}`,
        }}
        className={profile}
      />
      <div className={info}>
        <span style={{ fontSize: "1.8rem", fontWeight: "600", color: nameTextColor }}>{petInfo.name}</span>
        <span style={{ fontSize: "1.2rem", fontWeight: "500", color: breedTextColor }}>{petInfo.breed}</span>
        <span style={{ fontSize: "1.2rem", fontWeight: "500", color: breedTextColor }}>
          {petInfo.gender} · {calculateAge(petInfo.birth)}
        </span>
      </div>
    </div>
  );
};

export default MyPetInfo;
