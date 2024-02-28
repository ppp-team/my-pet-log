import * as styles from "./style.css";
import HeartIcon from "@/public/icons/heart.svg";
import QuestionIcon from "@/public/icons/circle-help.svg";
import MessageIcon from "@/public/icons/message-alt.svg";
import NoticeIcon from "@/public/icons/megaphone.svg";
import CheckRigntIcon from "@/public/icons/chevron-right.svg";

const Skeleton = () => (
  <div className={styles.listcontainer}>
    <div className={styles.MenuContainer}>
      <HeartIcon className={styles.icon} width={24} height={24} />
      <div className={styles.text}>초대 받은 내역</div>
      <CheckRigntIcon className={styles.checkicon} width={22} height={22} />
    </div>
    <div className={styles.MenuContainer}>
      <QuestionIcon className={styles.icon} width={24} height={24} />
      <div className={styles.text}>FAQ</div>
      <CheckRigntIcon className={styles.checkicon} width={22} height={22} />
    </div>
    <div className={styles.MenuContainer}>
      <MessageIcon className={styles.icon} width={24} height={24} />
      <div className={styles.text}>1:1 문의하기</div>
      <CheckRigntIcon className={styles.checkicon} width={22} height={22} />
    </div>
    <div className={styles.MenuContainer}>
      <NoticeIcon className={styles.icon} width={24} height={24} />
      <div className={styles.text}>공지사항</div>
      <CheckRigntIcon className={styles.checkicon} width={22} height={22} />
    </div>
    <div className={styles.logoutButton}>로그아웃</div>
  </div>
);

export default Skeleton;
