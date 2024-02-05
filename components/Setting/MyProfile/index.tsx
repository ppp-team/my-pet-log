import * as styles from "./style.css";
import data from "./mockData.json";
import CheckRigntIcon from "@/assets/chevron-right.svg?url";
import Image from "next/image";

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>마이프로필 관리하기</div>
      <div className={styles.ProfileWrapper}>
        <div
          className={styles.profileImg}
          style={{
            backgroundImage: `url(${data.imgUrl})`,
          }}
        />
        <div>
          <p className={styles.nickname}>{data.nickname}</p>
          <p className={styles.email}>{data.email}</p>
        </div>
        <Image className={styles.checkRightIcon} src={CheckRigntIcon} alt="check right icon" width={22} height={22} />
      </div>
    </div>
  );
};

export default MyProfile;
