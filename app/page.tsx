"use client";

import { useState } from "react";
import * as styles from "./style.css";
import Onboarding from "@/app/(auth)/onboarding/OnbordingUI";
import OnboardingData from "@/app/(auth)/onboarding/OnboardingData";
import Link from "next/link";

const Page = () => {
  const [currentShow, setCurrentShow] = useState(0);
  const currentOnboarding = OnboardingData[currentShow];

  const handleNext = () => {
    if (currentShow < OnboardingData.length - 1) {
      setCurrentShow(currentShow + 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.skipButtonWrapper}>
          <Link href="/signup">
            <button className={styles.skipButton}>건너뛰기</button>
          </Link>
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
            <Link href="/signup" className={styles.link}>
              <button className={styles.bottomButton}>시작하기</button>
            </Link>
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
