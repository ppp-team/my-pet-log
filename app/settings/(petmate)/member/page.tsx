"use client";

import Modal from "@/app/_components/Modal";
import mockData from "./mockData.json";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { useModal } from "@/app/_hooks/useModal";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";

const Page = () => {
  const { isModalOpen: isModalOpen1, openModalFunc: openModal1, closeModalFunc: closeModal1 } = useModal();
  const { isModalOpen: isModalOpen2, openModalFunc: openModal2, closeModalFunc: closeModal2 } = useModal();
  const { isModalOpen: isModalOpen3, openModalFunc: openModal3, closeModalFunc: closeModal3 } = useModal();

  // 내 정보 조회로 가지고오기
  const currentUser = {
    id: "seul9085",
    nickname: "이슬", // 현재 사용자의 닉네임
    profileImageUrl: "", // 현재 사용자의 프로필 이미지 URL
  };

  // mockData에서 현재 사용자의 데이터를 찾음
  const currentUserData = mockData.data.find((member) => member.guardianId === currentUser.id);

  // 현재 사용자가 리더인지 확인
  const isLeader = currentUserData ? currentUserData.guardianRole === "leader" : false;

  // 현재 사용자를 제외한 멤버들만 필터링
  const otherMembers = mockData.data.filter((member) => member.guardianId !== currentUser.id);

  // 확인 버튼 누를 시
  const handleConfirm = () => {
    closeModal1();
    closeModal2();
    closeModal3();

    //멤버 삭제되는 로직
  };

  return (
    <main className={container}>
      <section className={memberlist}>
        <div className={profileWrapper}>
          <div className={profileImg} style={{ backgroundImage: `url(${currentUser.profileImageUrl || NoProfileImage})` }} />
          <p className={nickname}>{currentUser.nickname} (나)</p>
        </div>
        <button className={button} onClick={() => (isLeader ? openModal1() : openModal2())}>
          탈퇴하기
        </button>
      </section>
      {isModalOpen1 && <Modal text="그룹 생성자의 경우 탈퇴는 관리자에게 문의해주세요." buttonText="확인" onClick={handleConfirm} onClose={closeModal1} />}
      {isModalOpen2 && <Modal text="정말 탈퇴하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModal2} />}

      {otherMembers.map((member) => (
        <section key={member.guardianId} className={memberlist}>
          <div className={profileWrapper}>
            <div
              className={profileImg}
              style={{
                backgroundImage: `url(${member.profileImageUrl || NoProfileImage})`,
              }}
            />
            <p className={nickname}>{member.nickname}</p>
          </div>
          {isLeader && (
            <button className={button} onClick={openModal3}>
              삭제
            </button>
          )}
        </section>
      ))}
      {isModalOpen3 && <Modal text="정말 멤버를 삭제하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModal3} />}
    </main>
  );
};

export default Page;
