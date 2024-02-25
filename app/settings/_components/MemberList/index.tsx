import { useModal } from "@/app/_hooks/useModal";
import Modal from "@/app/_components/Modal";
import { memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { GuardianType } from "@/app/_types/guardians/types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGuardians } from "@/app/_api/guardians";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPersonImagePath";

interface MemberListProps {
  members: GuardianType[];
  isLeader: boolean;
  petId: number;
}

const MemberList = ({ members, isLeader, petId }: MemberListProps) => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [selectedGuardianId, setSelectedGuardianId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const deleteGuardianMutation = useMutation({
    mutationFn: (guardianId: number) => deleteGuardians(guardianId),

    onSuccess: () => {
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
            <p style={{ width: "unset" }} className={nickname}>
              {member.nickname}
            </p>
          </div>
          {isLeader && (
            <button
              className={button}
              onClick={() => {
                setSelectedGuardianId(member.guardianId);
                openModalFunc();
              }}
            >
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
