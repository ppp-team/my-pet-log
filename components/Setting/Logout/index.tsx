"use client";

import { useRouter } from "next/navigation";
import * as styles from "./style.css";

const Logout = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.closeButton}
        onClick={() => {
          router.back();
        }}
      >
        닫기
      </button>
      <div className={styles.text}>로그아웃 하시겠습니까?</div>
      <button className={styles.checkButton}>확인</button>
    </div>
  );
};

export default Logout;
