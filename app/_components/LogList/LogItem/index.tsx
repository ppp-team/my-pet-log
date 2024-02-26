"use client";

import { LogsType } from "@/app/_types/log/types";
import LogDetail from "@/app/healthlog/_components/LogDetail";
import starIconSrc from "@/public/icons/important-star-icon.svg?url";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./style.css";
import { checkLog } from "@/app/_api/log";

interface LogItemProps {
  petId: number;
  logItem: LogsType;
  onDelete: (logItem: LogsType) => void;
  onToggleDetail: (logId: number) => void;
  onSwipe: (logId: number) => void;
  isActive: boolean;
  isSwipeActive: boolean;
}

const SWIPE_BUTTON_WIDTH = 16;

const LogItem: React.FC<LogItemProps> = ({ petId, logItem, onDelete, onToggleDetail, isActive, onSwipe, isSwipeActive }: LogItemProps) => {
  const [isChecked, setIsChecked] = useState(logItem.isComplete);
  const [showDetails, setShowDetails] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const checkboxId = `checkbox-${logItem.logId}`;
  const logItemRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    try {
      await checkLog(petId, logItem.logId);
    } catch (error) {
      console.error("Failed to update log check status", error);
      setIsChecked(!newCheckedState);
    }
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
        setCurrentTranslate(Math.max(-SWIPE_BUTTON_WIDTH, -swipingDistance));
      } else if (swipingDistance < 0 && currentTranslate !== 0) {
        setCurrentTranslate(Math.min(0, -swipingDistance + currentTranslate));
      }
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsSwiping(false);
    const endX = event.changedTouches[0].clientX;
    const swipedDistance = startX - endX;

    if (swipedDistance > 0) {
      setCurrentTranslate(-SWIPE_BUTTON_WIDTH);
      onSwipe(logItem.logId);
    } else {
      setCurrentTranslate(0);
    }
  };

  const toggleDetails = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    if (target.id !== checkboxId && !target.closest(`label[for="${checkboxId}"]`)) {
      setShowDetails(!showDetails);
      onToggleDetail(logItem.logId);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (logItemRef.current && !logItemRef.current.contains(event.target as Node)) {
        setShowDetails(false);
        setCurrentTranslate(0);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [logItemRef]);

  return (
    <div className={styles.swipeArea} ref={logItemRef}>
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={styles.container}>
        <li className={styles.listContainer} onClick={toggleDetails} style={{ transform: `translateX(${currentTranslate}px)` }}>
          <div className={styles.leftPart}>
            <label htmlFor={checkboxId} className={styles.checkBox}>
              <input type="checkbox" id={checkboxId} checked={isChecked} onChange={handleCheckboxChange} className={styles.inputCheckbox} />
              <span className={styles.checkBoxOn}></span>
            </label>

            <div className={styles.taskAndTimeBox}>
              <div className={styles.checkStar}>
                {logItem.isImportant && <Image src={starIconSrc} width={17} height={17} alt="중요 표시" />}
                <span className={isSwipeActive ? styles.taskNameSwipeActive : styles.taskName}>{logItem.taskName}</span>
              </div>
              <span className={styles.time}>{logItem.time}</span>
            </div>
          </div>
          <div className={styles.manager}>
            <span>{logItem.manager.nickname}</span>
          </div>
        </li>
        {currentTranslate === -SWIPE_BUTTON_WIDTH && isSwipeActive && (
          <div className={styles.swipeButtons}>
            <Link href={`/healthlog/edit/${logItem.logId}`}>
              <button
                className={styles.editButton}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                수정
              </button>
            </Link>
            <button
              className={styles.deleteButton}
              onTouchEnd={(e) => {
                e.stopPropagation();
                onDelete(logItem);
              }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(logItem);
              }}
            >
              삭제
            </button>
          </div>
        )}
      </div>

      {isActive && showDetails && (
        <div className={styles.logDetailContainer}>
          <LogDetail petId={petId} logId={logItem.logId} />
        </div>
      )}
    </div>
  );
};

export default LogItem;
