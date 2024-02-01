import * as styles from "@/components/Setting/MypetCarousel/Card/style.css";
import EditIcon from "@/assets/edit-petcard.svg";
import InviteIcon from "@/assets/invite-petcard.svg";

interface PetInfo {
  imgUrl: string;
  name: string;
  type: string;
  gender: string;
  age: number;
  weight: number;
}

interface CardProps {
  card: PetInfo;
  backgroundColor: string;
}

const Card = ({ card, backgroundColor }: CardProps) => {
  return (
    <div className={styles.container} style={{ background: backgroundColor }}>
      <div
        className={styles.profile}
        style={{
          backgroundImage: `url(${card.imgUrl})`,
        }}
      />
      <div className={styles.petInfo}>
        <p>{card.name}</p>
        <p>{card.type}</p>
        <p>
          {card.gender} {card.age}살 {card.weight}kg
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <EditIcon />
        <InviteIcon />
      </div>
    </div>
  );
};

export default Card;
