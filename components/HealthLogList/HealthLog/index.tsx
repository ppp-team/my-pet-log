import * as styles from "./style.css";
import React, { useState } from "react";

const HealthLog = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className={styles.container}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
        </label>
        <div>❗️</div>
        <div>[대분류명]</div>
        <div>[10:00]</div>
        <div>[담당자명]</div>
      </div>
    </>
  );
};

export default HealthLog;
