"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";
import ParticipatePetGroupModal from "@/components/Participate/ParticipatePetGroupModal";
import Modal from "@/components/@common/Modal";
import FooterNavigationBar from "@/components/Layout/Mobile/FooterNavigationBar/FooterNavigationBar";
import HeaderLogo from "@/components/Layout/Mobile/HeaderLogo/HeaderLogo";
import HeaderPetGroup from "@/components/Layout/Mobile/HeaderPetGroup/HeaderPetGroup";

const SelectCreateJoinPage: NextPage = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  return (
    <main className={styles.container}>
      <p className={styles.title}>시작하기 전에</p>
      <p className={styles.subTitle}>육아 기록을 작성할 동물을 등록하시겠어요?</p>
      <div className={styles.sampleImg}></div>
      <Link className={styles.linkCreate} href="/create/pet-group">
        확인
      </Link>
      <button className={styles.linkParticipate} onClick={openModalFunc}>
        공동 집사로 초대 받으셨나요?
      </button>
      {isModalOpen && (
        <Modal>
          <ParticipatePetGroupModal onClickClose={closeModalFunc} />
        </Modal>
      )}
      <FooterNavigationBar /> {/* 개발용 임시 렌더링 */}
      <HeaderLogo /> {/* 개발용 임시 렌더링 */}
      <HeaderPetGroup /> {/* 개발용 임시 렌더링 */}
    </main>
  );
};

export default SelectCreateJoinPage;
