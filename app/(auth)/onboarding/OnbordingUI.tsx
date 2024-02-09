import * as styles from "./style.css";
import Image, { StaticImageData } from "next/image";

interface OnboardingProps {
  image: string | StaticImageData;
  title: string[];
  description: string[];
}

const Onboarding = ({ image, title, description }: OnboardingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={image} alt="content image" width={300} height={338} />
      </div>
      <div className={styles.textArea}>
        <h1 className={styles.titleSection}>
          {title.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h1>
        <div className={styles.scriptSection}>
          {description.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
