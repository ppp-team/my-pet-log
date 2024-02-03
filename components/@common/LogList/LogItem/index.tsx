"use client";

import * as styles from "./style.css";
import React, { useState } from "react";

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
        {pageType !== "home" && (
          <span>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          </span>
        )}
        <span>{taskItem.isImportant && "⭐️"}</span>
        <span>{taskItem.taskName}</span>
        <span>{taskItem.time}</span>
        <span>{taskItem.manager.nickname}</span>
      </li>
    </>
  );
};

export default LogItem;
