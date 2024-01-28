import * as styles from "@/components/MypetCarousel/Card/style.css";

interface PetInfo {
  name: string;
  type: string;
  gender: string;
  age: number;
  weight: number;
}

interface CardProps {
  slide: PetInfo;
  backgroundColor: string;
}

const Card = ({ slide, backgroundColor }: CardProps) => {
  return (
    <div className={styles.container} style={{ background: backgroundColor }}>
      <h3>{slide.name}</h3>
      <p>
        {slide.type} - {slide.gender}
      </p>
      <p>
        나이: {slide.age}, 몸무게: {slide.weight}kg
      </p>
    </div>
  );
};

export default Card;
