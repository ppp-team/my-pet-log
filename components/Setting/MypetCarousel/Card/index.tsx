import * as styles from "./style.css";
import EditIconUrl from "@/assets/edit-petcard.svg?url";
import InviteIconUrl from "@/assets/invite-petcard.svg?url";
import Image from "next/image";
import calculateAge from "@/utils/calculateAge";

interface PetInfo {
  name: string;
  type: string;
  breed: string;
  gender: string;
  petImageUrl: string;
  birth: string;
  weight: string;
}
interface PetInfoProbs {
  petinfo: PetInfo;
}

const Card = ({ petinfo }: PetInfoProbs) => {
  const age = calculateAge(petinfo.birth); // 나이 계산

  return (
    <div className={styles.container}>
      <div
        className={styles.profile}
        style={{
          backgroundImage: `url(${petinfo.petImageUrl})`,
        }}
      />
      <div className={styles.petInfo}>
        <p>{petinfo.name}</p>
        <p>{petinfo.type}</p>
        <p>
          {petinfo.gender} {age} {petinfo.weight}kg
        </p>
      </div>
    </div>
  );
};

export default Card;
