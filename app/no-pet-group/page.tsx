"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import Link from "next/link";
import { useModal } from "@/app/_hooks/useModal";
import ParticipatePetGroupModal from "@/app/home/components/ParticipatePetGroupModal/ParticipatePetGroupModal";
import ModalContainer from "@/app/_components/ModalContainer";
import Image from "next/image";
import MockUpImageSrc from "@/public/images/mock-up.svg?url";

const NoPetGroupPage: NextPage = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  return (
    <main className={styles.container}>
      <p className={styles.title}>시작하기 전에</p>
      <p className={styles.subTitle}>
        육아 기록을 작성할 동물을
        <br />
        등록하시겠어요?
      </p>
      <Image className={styles.mockUpImage} src={MockUpImageSrc} width={203} height={254} alt="목업 이미지" />
      <Link className={styles.linkCreate} href="/create/pet-group">
        마이펫을 등록할래요
      </Link>
      <button className={styles.linkParticipate} onClick={openModalFunc}>
        기존 그룹에 참여할래요
      </button>
      {isModalOpen && (
        <ModalContainer>
          <ParticipatePetGroupModal onClickClose={closeModalFunc} />
        </ModalContainer>
      )}
    </main>
  );
};

export default NoPetGroupPage;
