import Image from "next/image";
import * as styles from "./Notification.css";
import SampleImageSrc from "@/public/icons/user-profile-default-no-camera.svg?url";

const Notification = ({ type, item }: { type: "new" | "past"; item: any }) => {
  return (
    <li className={type === "new" ? styles.containerBasic : styles.containerPast}>
      <div className={type === "new" ? styles.thumbnailWrapperNew : styles.thumbnailWrapperBasic}>
        <Image className={styles.thumbnail} src={SampleImageSrc} alt="썸네일 이미지" fill={true} />
      </div>
      <p className={styles.type}>{item.type}</p>
      <p className={styles.date}>{item.date}</p>
      <p className={styles.content}>{item.content}</p>
    </li>
  );
};

export default Notification;
