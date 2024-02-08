import * as styles from "./style.css";
import Image from "next/image";
import logDetailIconSrc from "@/public/icons/log-detail-icon.svg?url";
import logMemoIconSrc from "@/public/icons/log-edit-icon.svg?url";

const LogDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <Image src={logDetailIconSrc} width={18} height={18} alt={"세부사항 아이콘"} />
            <p>세부사항 내용</p>
          </div>
          <div className={styles.box}>
            <Image src={logMemoIconSrc} width={18} height={18} alt={"메모 아이콘"} />
            <p>메모 내용</p>
          </div>
        </div>
        <button className={styles.editButton}>편집하기</button>
      </div>
    </>
  );
};

export default LogDetail;
