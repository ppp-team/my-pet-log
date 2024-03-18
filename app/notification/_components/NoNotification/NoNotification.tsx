import Image from "next/image";
import * as styles from "./NoNotification.css";
import NoNotificationIcon from "@/public/images/no-notification.svg?url";

const NoNotification = () => {
  return (
    <section className={styles.container}>
      <Image className={styles.image} src={NoNotificationIcon} alt="아이콘" width={60} height={64} />
      <p className={styles.description}>받은 알림이 없어요.</p>
    </section>
  );
};

export default NoNotification;
