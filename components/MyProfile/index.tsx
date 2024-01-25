import * as styles from "@/components/MyProfile/style.css";

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImg}></div>
      <div className={styles.userInfo}>
        <div className={styles.nickname}>내 닉네임</div>
        <div className={styles.email}>pet-lover@gmail.com</div>
      </div>
    </div>
  );
};

export default MyProfile;
