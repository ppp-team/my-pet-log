"use client";

import Modal from "@/components/@common/Modal";
import mockData from "./mockData.json";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { useModal } from "@/hooks/useModal";

const Page = ({ params }: { params: { slug: string } }) => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  // 확인 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();

    //멤버 삭제되는 로직
  };

  return (
    <main className={container}>
      {mockData.data.map((member) => (
        <section key={member.guardianId} className={memberlist}>
          <div className={profileWrapper}>
            <div
              className={profileImg}
              style={{
                backgroundImage: `url(${member.profileImageUrl})`,
              }}
            />
            <p className={nickname}>
              {member.nickname} {member.guardianRole === "leader" ? "(나)" : ""}
              {params.slug}
            </p>
          </div>
          <button className={button} onClick={openModalFunc}>
            {member.guardianRole === "leader" ? "탈퇴하기" : "삭제"}
          </button>
        </section>
      ))}
      {isModalOpen && <Modal text="그룹 생성자의 경우 탈퇴는 관리자에게 문의해주세요." buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </main>
  );
};

export default Page;
