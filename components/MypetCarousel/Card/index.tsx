import * as styles from "@/components/MypetCarousel/Card/style.css";
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
interface CardProps {
  card: PetInfo;
  backgroundColor: string;
}

const Card = ({ card, backgroundColor }: CardProps) => {
  const age = calculateAge(card.birth); // 나이 계산

  return (
    <div className={styles.container} style={{ background: backgroundColor }}>
      <div
        className={styles.profile}
        style={{
          backgroundImage: `url(${card.petImageUrl})`,
        }}
      />
      <div className={styles.petInfo}>
        <p>{card.name}</p>
        <p>{card.type}</p>
        <p>
          {card.gender} {age}살 {card.weight}kg
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <Image src={EditIconUrl} alt="edit icon" width={10} height={10} />
        <Image src={InviteIconUrl} alt="invite icon" width={10} height={10} />
      </div>
    </div>
  );
};

export default Card;
