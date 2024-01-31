import Image from "next/image";
import * as styles from "./HeaderLogo.css";
import EditIconUrl from "@/assets/edit.svg?url";

const HeaderLogo = () => {
  return (
    <header className={styles.header}>
      <Image src={EditIconUrl} alt="펫그룹 이미지" width={40} height={40} />
    </header>
  );
};

export default HeaderLogo;
