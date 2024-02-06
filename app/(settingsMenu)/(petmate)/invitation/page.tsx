"use client";

import mockData from "./mockData.json";
import * as styles from "./page.css";
import Modal from "@/components/@common/Modal";
import { useModal } from "@/hooks/useModal";
import InviteModal from "@/components/Setting/InviteModal";

const Page = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleConfirm = () => {
    closeModalFunc();
    // 초대 취소 로직 구현...
  };

  return (
    <>
      <InviteModal />
      <main className={styles.main}>
        {mockData.data.map((invite) => (
          <section key={invite.guardianId} className={styles.member}>
            <div className={styles.profileWrapper}>
              <div
                className={styles.profileImg}
                style={{
                  backgroundImage: `url(${invite.profileImageUrl})`,
                }}
              />
              <p className={styles.nickname}>{invite.nickname}</p>
              <div className={styles.state}>{invite.state}</div>
            </div>
            <button className={styles.cancelButton} onClick={openModalFunc}>
              초대 취소
            </button>
          </section>
        ))}
      </main>
      {isModalOpen && <Modal text="정말 초대를 취소하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default Page;
