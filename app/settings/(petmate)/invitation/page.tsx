"use client";

import mockData from "./mockData.json";
import { container, memberlist, profileWrapper, profileImg, nickname, state, button } from "@/app/settings/(petmate)/petmate.css";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import InviteModal from "@/app/settings/components/InviteModal";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";

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
                  backgroundImage: `url(${invite.profileImageUrl || NoProfileImage})`,
                }}
              />
              <p className={nickname}>{invite.nickname}</p>
              <div className={state}>{invite.state}</div>
            </div>
            {invite.state !== "거절" && (
              <button className={button} onClick={openModalFunc}>
                초대 취소
              </button>
            )}
          </section>
        ))}
      </main>
      {isModalOpen && <Modal text="정말 초대를 취소하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default Page;
