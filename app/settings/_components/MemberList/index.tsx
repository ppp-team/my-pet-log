import { useModal } from "@/app/_hooks/useModal";
import Modal from "@/app/_components/Modal";
import { memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { GuardianType } from "@/app/_types/guardians/types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMemberGuardians } from "@/app/_api/guardians";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import { showToast } from "@/app/_components/Toast";

interface MemberListProps {
  members: GuardianType[];
  isLeader: boolean;
}

const MemberList = ({ members, isLeader }: MemberListProps) => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [selectedGuardianId, setSelectedGuardianId] = useState<number | null>(null);
  const [selectedGuardianNickname, setSelectedGuardianNickname] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const deleteGuardianMutation = useMutation({
    mutationFn: (guardianId: number) => deleteMemberGuardians(guardianId),

    onSuccess: () => {
      showToast("삭제가 완료됐습니다", true);
      queryClient.invalidateQueries({ queryKey: ["petmate"] });
    },
  });

  // 멤버 삭제 확인 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();

    if (selectedGuardianId !== null) {
      deleteGuardianMutation.mutate(selectedGuardianId);
    }
  };

  return (
    <>
      {members.map((member) => (
        <section key={member.guardianId} className={memberlist}>
          <div className={profileWrapper}>
            <Image className={profileImg} src={getImagePath(member.profileImageUrl)} alt="profile icon" width={40} height={40} />
            <p className={nickname}>{member.nickname}</p>
          </div>
          {isLeader && (
            <button
              className={button}
              onClick={() => {
                setSelectedGuardianId(member.guardianId);
                setSelectedGuardianNickname(member.nickname);
                openModalFunc();
              }}
            >
              삭제
            </button>
          )}
        </section>
      ))}
      {isModalOpen && <Modal text={`정말 ${selectedGuardianNickname}님을\n삭제하시겠습니까?`} buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default MemberList;
