"use client";

import * as styles from "./style.css";
import React, { useState } from "react";
import starIconSrc from "@/assets/important-star-icon.svg?url";
import Image from "next/image";

export type TasksType = {
  logId: number;
  isComplete: boolean;
  isImportant: boolean;
  taskName: string;
  time: string;
  manager: {
    id: string;
    nickname: string;
    isCurrentUser: boolean;
  };
};

interface LogItemProps {
  taskItem: TasksType;
  pageType: string;
}

const LogItem = ({ taskItem, pageType }: LogItemProps) => {
  const [isChecked, setIsChecked] = useState(taskItem.isComplete);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const swipeButtonsWidth = 66;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isSwiping) {
      const currentX = event.touches[0].clientX;
      const swipingDistance = startX - currentX;

      if (swipingDistance > 0) {
        setCurrentTranslate(Math.max(-swipeButtonsWidth, -swipingDistance));
      } else if (swipingDistance < 0 && currentTranslate !== 0) {
        setCurrentTranslate(Math.min(0, -swipingDistance + currentTranslate));
      }
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (currentTranslate <= -swipeButtonsWidth / 2) {
      setCurrentTranslate(-swipeButtonsWidth);
    } else {
      setCurrentTranslate(0);
    }
  };

  const listItemStyle = {
    transform: `translateX(${currentTranslate}px)`,
    transition: "transform 0.5s ease",
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} style={listItemStyle} className={styles.swipeArea}>
      <li className={styles.container}>
        <div className={styles.leftPart}>
          {pageType !== "home" && (
            <span>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            </span>
          )}
          <div className={styles.taskAndTimeBox}>
            <div className={styles.checkStar}>
              <span>{taskItem.isImportant && <Image src={starIconSrc} width={17} height={17} alt={"중요 표시"} />}</span>
              <span className={styles.taskName}>{taskItem.taskName}</span>
            </div>
            <span className={styles.time}>{taskItem.time}</span>
          </div>
        </div>
        <div className={styles.manager}>
          <span>{taskItem.manager.nickname}</span>
        </div>
      </li>
      {currentTranslate === -swipeButtonsWidth && (
        <div className={styles.swipeButtons}>
          <div className={styles.editButton}>수정</div>
          <div className={styles.deleteButton}>삭제</div>
        </div>
      )}
    </div>
  );
};

export default LogItem;
