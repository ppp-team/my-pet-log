import Image from "next/image";
import * as styles from "./MainWrapper.css";
import pcTempBackGround from "@/public/images/pc-bg.jpg";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image className={styles.pcBackground} src={pcTempBackGround} alt="배경 이미지" />
      <div className={styles.wrapper}>
        <div className={styles.scrollArea}>{children}</div>
      </div>
    </>
  );
};

export default MainWrapper;
