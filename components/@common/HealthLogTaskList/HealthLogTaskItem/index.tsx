"use client";

import * as styles from "./style.css";
import React, { useState } from "react";

export type TaskType = {
  type: string;
  subtype: string;
  datetime: string;
  isComplete: boolean;
  isImportant: boolean;
  managerId: string;
  memo: string;
};

interface HealthLogTaskItemProps {
  taskItem: TaskType;
  pageType: string;
}

const HealthLogTaskItem = ({ taskItem, pageType }: HealthLogTaskItemProps) => {
  const [isChecked, setIsChecked] = useState(taskItem.isComplete);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const extractTime = (datetime: string) => {
    const time = new Date(datetime).toLocaleTimeString("ko-KR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
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
        <span>{taskItem.type === "직접 입력" ? taskItem.subtype : taskItem.type}</span>
        <span>{extractTime(taskItem.datetime)}</span>
        <span>{taskItem.managerId}</span>
      </li>
    </>
  );
};

export default HealthLogTaskItem;
