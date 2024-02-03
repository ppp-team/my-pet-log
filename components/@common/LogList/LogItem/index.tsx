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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
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
    </>
  );
};

export default LogItem;
