"use client";

import { useState } from "react";
import * as styles from "@/app/onboarding/page.css";
import Onboarding from "@/app/onboarding/_components/OnbordingUI";
import { useRouter } from "next/navigation";
import OnboardingData from "@/app/onboarding/_components/OnboardingData";

const Page = () => {
  const router = useRouter();
  const [currentShow, setCurrentShow] = useState(0);
  const currentOnboarding = OnboardingData[currentShow];

  const handleNext = () => {
    if (currentShow < OnboardingData.length - 1) {
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
          {OnboardingData.map((data, index) => (
            <button
              key={index}
              className={`${styles.nextButton} ${currentShow === index ? styles.activePaginationButton : ""}`}
              disabled={currentShow === index}
              onClick={() => setCurrentShow(index)}
            ></button>
          ))}
        </div>
        <Onboarding image={currentOnboarding.image} title={currentOnboarding.title} description={currentOnboarding.description} />
        <div className={styles.bottomButtonWrapper}>
          {currentShow === OnboardingData.length - 1 ? (
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
