"use client";

import Modal from "@/components/@common/Modal";
import mockData from "./mockData.json";
import * as styles from "./style.css";
import { useModal } from "@/hooks/useModal";

const Page = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  // 확인 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();

    //멤버 삭제되는 로직
  };

  return (
    <main className={styles.container}>
      {mockData.data.map((member) => (
        <section key={member.guardianId} className={styles.member}>
          <div className={styles.profileWrapper}>
            <div
              className={styles.profileImg}
              style={{
                backgroundImage: `url(${member.profileImageUrl})`,
              }}
            />
            <p className={styles.nickname}>
              {member.nickname} {member.guardianRole === "leader" ? "(나)" : ""}
            </p>
          </div>
          <button className={styles.deleteButton} onClick={openModalFunc}>
            {member.guardianRole === "leader" ? "탈퇴하기" : "삭제"}
          </button>
        </section>
      ))}
      {isModalOpen && <Modal text="그룹 생성자의 경우 탈퇴는 관리자에게 문의해주세요." buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </main>
  );
};

export default Page;
