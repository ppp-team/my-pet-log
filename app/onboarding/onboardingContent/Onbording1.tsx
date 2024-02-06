import * as styles from "./style.css";
import Image from "next/image";
import Onboarding1 from "@/public/onboarding/onboarding1.png";

const Onboarding = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image src={Onboarding1} alt="first image" width={289} height={340} />
        </div>
        <div className={styles.textArea}>
          <h1 className={styles.titleSection}>
            <div>
              함께 키우고 기록하는
              <br />
              마이펫로그
            </div>
          </h1>
          <p className={styles.scriptSection}>
            <div>
              친구와 가족 모두가 키우는 <br />
              마이펫의 육아일기와 건강수첩을 <br />
              다함께 기록해보세요!
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
