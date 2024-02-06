"use client";
import { useState } from "react";
import * as styles from "@/app/onboarding/page.css";
import Onboarding from "./onboardingContent/OnbordingUI";
import { useRouter } from "next/navigation";

const MOCK = [<Onboarding key={1} />, <Onboarding key={2} />, <Onboarding key={3} />];

const ImagePagination = ({ currentImage }: { currentImage: React.ReactNode }) => {
  return (
    <div>
      <div>{currentImage}</div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const [currentShow, setCurrentShow] = useState(0);
  const currentImage = MOCK[currentShow];

  const handleNext = () => {
    if (currentShow < MOCK.length - 1) {
      setCurrentShow(currentShow + 1);
    }
  };

  const handleStartClick = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.skipButtonWrapper}>
          <button className={styles.skipButton} onClick={handleStartClick}>
            건너뛰기
          </button>
        </div>
        <div className={styles.paginationButtons}>
          {MOCK.map((item, index) => (
            <button
              key={item.key}
              className={`${styles.nextButton} ${currentShow === index ? styles.activePaginationButton : ""}`}
              disabled={currentShow === index}
              onClick={() => setCurrentShow(index)}
            ></button>
          ))}
        </div>
        <ImagePagination currentImage={currentImage} />

        <div className={styles.bottomButtonWrapper}>
          {currentShow === MOCK.length - 1 ? (
            <button className={styles.bottomButton} onClick={handleStartClick}>
              시작하기
            </button>
          ) : (
            <button className={styles.bottomButton} onClick={handleNext}>
              다음
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
