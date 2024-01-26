"use client";
import { useState } from "react";
import * as styles from "./styles.css";
import Onboarding from "../Onboarding";

const MOCK = [<Onboarding key={1} />, <Onboarding key={2} />, <Onboarding key={3} />];

const ImagePagination = ({ currentImage }: { currentImage: React.ReactNode }) => {
  return (
    <div>
      <div>{currentImage}</div>
    </div>
  );
};

const Pagination = () => {
  const [currentShow, setCurrentShow] = useState(1);
  const currentImage = MOCK[currentShow - 1];

  const handleNext = () => {
    if (currentShow < MOCK.length) {
      setCurrentShow(currentShow + 1);
    }
  };

  return (
    <div>
      <ImagePagination currentImage={currentImage} />
      <div className={styles.paginationButtons}>
        {MOCK.map((_, index) => (
          <button
            key={index + 1}
            className={`${styles.paginationButton} ${currentShow === index + 1 ? styles.activePaginationButton : ""}`}
            disabled={currentShow === index + 1}
          ></button>
        ))}
        {MOCK.length === currentShow ? (
          <button className="paginationButton">시작하기</button>
        ) : (
          <button className="paginationButton" onClick={handleNext}>
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
