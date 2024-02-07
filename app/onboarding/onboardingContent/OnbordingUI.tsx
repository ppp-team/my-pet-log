import * as styles from "./style.css";
import Image, { StaticImageData } from "next/image";

interface OnboardingProps {
  image: StaticImageData;
  title: string[];
  description: string[];
}

const Onboarding = ({ image, title, description }: OnboardingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={image} alt="content image" width={289} height={340} />
      </div>
      <div className={styles.textArea}>
        <h1 className={styles.titleSection}>
          {title.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h1>
        <p className={styles.scriptSection}>
          {description.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
