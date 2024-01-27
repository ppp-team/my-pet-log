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
}

const HealthLogTaskItem = ({ taskItem }: HealthLogTaskItemProps) => {
  const [isChecked, setIsChecked] = useState(taskItem.isComplete);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <li className={styles.container}>
        <span>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        </span>
        <span>{taskItem.isImportant}</span>
        <span>{taskItem.type}</span>
        <span>{taskItem.datetime}</span>
        <span>{taskItem.managerId}</span>
      </li>
    </>
  );
};

export default HealthLogTaskItem;
