import Image from "next/image";
import * as styles from "./MobileHeaderLogo.css";
import sampleImageSrc from "@/public/icons/edit.svg?url";

const MobileHeaderLogo = () => {
  return (
    <header className={styles.header}>
      <Image src={sampleImageSrc} alt="펫그룹 이미지" width={40} height={40} />
    </header>
  );
};

export default MobileHeaderLogo;
