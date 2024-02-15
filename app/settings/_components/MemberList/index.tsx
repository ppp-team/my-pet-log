import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import { useModal } from "@/app/_hooks/useModal";
import Modal from "@/app/_components/Modal";
import { memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { GuardianType } from "@/app/_types/guardians/types";

interface MemberListProps {
  members: GuardianType[];
  isLeader: boolean;
}

const MemberList = ({ members, isLeader }: MemberListProps) => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  // 확인 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();
  };

  return (
    <>
      {members.map((member) => (
        <section key={member.guardianId} className={memberlist}>
          <div className={profileWrapper}>
            <div
              className={profileImg}
              style={{
                backgroundImage: `url(${member.profileImageUrl ?? NoProfileImage})`,
              }}
            />
            <p className={nickname}>{member.nickname}</p>
          </div>
          {isLeader && (
            <button className={button} onClick={openModalFunc}>
              삭제
            </button>
          )}
        </section>
      ))}
      {isModalOpen && <Modal text="정말 멤버를 삭제하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default MemberList;
