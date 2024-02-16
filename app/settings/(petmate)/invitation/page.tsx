"use client";

import { container, memberlist, profileWrapper, profileImg, nickname, state, button } from "@/app/settings/(petmate)/petmate.css";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import InviteModal from "@/app/settings/_components/InviteModal";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import { postCancel, getMyInvitations } from "@/app/_api/invitation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MyInvitationType } from "@/app/_types/invitaion/types";

const Page = () => {
  const queryClient = useQueryClient();
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [selectedGuardianId, setSelectedGuardianId] = useState<number | null>(null);

  const { data } = useQuery<MyInvitationType[]>({
    queryKey: ["my-invitations"],
    queryFn: () => getMyInvitations(),
  });

  const invites = data ?? [];

  const cancelMutation = useMutation({
    mutationFn: (invitationId: number) => postCancel(invitationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-invitations"] });
    },
  });

  const handleConfirm = () => {
    closeModalFunc();
    // 초대 취소 로직 구현...

    if (selectedGuardianId !== null) {
      cancelMutation.mutate(selectedGuardianId);
    }
  };

  return (
    <>
      <InviteModal />
      <main className={container}>
        {invites.map((invite) => (
          <section key={invite.invitationId} className={memberlist}>
            <div className={profileWrapper}>
              <div
                className={profileImg}
                style={{
                  backgroundImage: `url(${invite.profilePath ?? NoProfileImage})`,
                }}
              />
              <p className={nickname}>{invite.inviteeName}</p>
              <div className={state}>{invite.inviteStatus}</div>
            </div>
            {invite.inviteStatus !== "거절" && (
              <button
                className={button}
                onClick={() => {
                  setSelectedGuardianId(invite.invitationId);
                  openModalFunc();
                }}
              >
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
