import Image from "next/image";
import * as styles from "./MainWrapperPcOnly.css";
import pcTempBackGround from "@/public/images/pc-bg.jpg";

const MainWrapperPcOnly = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image className={styles.pcBackground} src={pcTempBackGround} alt="배경 이미지" />
      <div className={styles.wrapper}>
        <div className={styles.scrollArea}>{children}</div>
      </div>
    </>
  );
};

export default MainWrapperPcOnly;
