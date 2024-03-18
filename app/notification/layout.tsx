import * as styles from "./layout.css";
import BackHeader from "../_components/BackHeader";

export default function NotificationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackHeader title="알림 센터" styleTop="0" />
      <section className={styles.layoutContainer}>{children}</section>
    </>
  );
}
