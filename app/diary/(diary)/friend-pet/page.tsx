import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import * as styles from "./style.css";

const mock = {
  name: "은행이",
  isSubscribed: true,
  profileImage: null,
};

const FriendPetDiaryPage = async () => {
  return (
    <section className={styles.profileInfo}>
      <Image src={getImagePath(mock.profileImage)} alt="profile image" width={45} height={45} />
      <div className={styles.text}>
        {mock.name} · {mock.isSubscribed ? "구독 중 🐾" : "구독하기"}
      </div>
    </section>
  );
};

export default FriendPetDiaryPage;
