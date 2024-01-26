"use client";
import { useState } from "react";
import * as styles from "./styles.css";

const MOCK = ["설명1", "설명2", "설명3"];

const ImagePagination = ({ currentImage }: { currentImage: string }) => {
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
      <h1>Page {currentShow}</h1>
      <ImagePagination currentImage={currentImage} />
      <div className={styles.paginationButtons}>
        {MOCK.map((_, index) => (
          <div
            key={index + 1}
            className={`${styles.paginationButton} ${currentShow === index + 1 ? styles.activePaginationButton : ""}`}
            disabled={currentShow === index + 1}
          ></div>
        ))}
        {MOCK.length === currentShow ? <button>시작하기</button> : <button onClick={handleNext}>다음</button>}
      </div>
    </div>
  );
};

export default Pagination;
