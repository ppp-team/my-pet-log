import { NextPage } from "next";
import "@/app/globals.css";
import * as styles from "./page.css";
import Link from "next/link";

const SelectCreateJoinPage: NextPage = () => {
  return (
    <main className={styles.container}>
      <p className={styles.title}>시작하기 전에</p>
      <p className={styles.subTitle}>육아 기록을 작성할 동물을 등록하시겠어요?</p>
      <div className={styles.sampleImg}></div>
      <Link className={styles.linkCreate} href="/create">
        확인
      </Link>
      <Link className={styles.linkParticipate} href="/participate">
        공동 집사로 초대 받으셨나요?
      </Link>
    </main>
  );
};

export default SelectCreateJoinPage;
