"use client";

import mockData from "./mockData.json";
import { container, memberlist, profileWrapper, profileImg, nickname, state, button } from "@/app/(settingsMenu)/(petmate)/petmate.css";
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
      <main className={container}>
        {mockData.data.map((invite) => (
          <section key={invite.guardianId} className={memberlist}>
            <div className={profileWrapper}>
              <div
                className={profileImg}
                style={{
                  backgroundImage: `url(${invite.profileImageUrl})`,
                }}
              />
              <p className={nickname}>{invite.nickname}</p>
              <div className={state}>{invite.state}</div>
            </div>
            <button className={button} onClick={openModalFunc}>
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
