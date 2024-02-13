import Image from "next/image";
import * as styles from "./MobileHeaderLogo.css";
import logoImageSrc from "@/public/icons/logo.svg?url";

const MobileHeaderLogo = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={logoImageSrc} alt="로고 이미지" width={37} height={36} />
    </header>
  );
};

export default MobileHeaderLogo;
