"use client";
import ReactDOM from "react-dom";
import * as styles from "./style.css";

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default ModalContainer;
