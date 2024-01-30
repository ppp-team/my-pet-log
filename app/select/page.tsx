"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";
import ParticipatePetGroupModal from "@/components/Participate/ParticipatePetGroupModal";

const SelectCreateJoinPage: NextPage = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  return (
    <main className={styles.container}>
      <p className={styles.title}>시작하기 전에</p>
      <p className={styles.subTitle}>육아 기록을 작성할 동물을 등록하시겠어요?</p>
      <div className={styles.sampleImg}></div>
      <Link className={styles.linkCreate} href="/create/petgroup">
        확인
      </Link>
      <button className={styles.linkParticipate} onClick={() => openModalFunc("participate")}>
        공동 집사로 초대 받으셨나요?
      </button>
      {isModalOpen === "participate" && <ParticipatePetGroupModal onClickClose={() => closeModalFunc()} />}
    </main>
  );
};

export default SelectCreateJoinPage;
