"use client";
import { useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import * as styles from "@/app/onboarding/page.css";
import Onboarding from "@/components/Onboarding";

const MOCK = [<Onboarding key={1} />, <Onboarding key={2} />, <Onboarding key={3} />];

const ImagePagination = ({ currentImage }: { currentImage: React.ReactNode }) => {
  return (
    <div>
      <div>{currentImage}</div>
    </div>
  );
};

const Page = () => {
  const [currentShow, setCurrentShow] = useState(1);
  const currentImage = MOCK[currentShow - 1];

  const handleNext = () => {
    if (currentShow < MOCK.length) {
      setCurrentShow(currentShow + 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/signup">
          <button className={styles.button}>건너뛰기</button>
        </Link>
        <ImagePagination currentImage={currentImage} />
        <div className={styles.paginationButtons}>
          {MOCK.map((_, index) => (
            <button
              key={index + 1}
              className={`${styles.nextButton} ${currentShow === index + 1 ? styles.activePaginationButton : ""}`}
              disabled={currentShow === index + 1}
            ></button>
          ))}
          {MOCK.length === currentShow ? (
            <Link href="/signup" className="nextButton">
              시작하기
            </Link>
          ) : (
            <button className="nextButton" onClick={handleNext}>
              다음
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
