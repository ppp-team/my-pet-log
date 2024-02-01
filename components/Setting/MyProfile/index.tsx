import * as styles from "@/components/Setting/MyProfile/style.css";
import data from "./mockData.json";

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.profileImg}
        style={{
          backgroundImage: `url(${data.imgUrl})`,
        }}
      />
      <div className={styles.userInfo}>
        <p className={styles.nickname}>{data.nickname}</p>
        <p className={styles.email}>{data.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
