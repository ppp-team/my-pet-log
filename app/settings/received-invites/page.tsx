"use client";

import TitleHeader from "@/app/_components/TitleHeader";
import * as styles from "./page.css";
import { InvitationType } from "@/app/_types/invitaion/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getInvitations, postAcceptance, postRefusal } from "@/app/_api/invitation";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import EmptyRecivedInvitation from "@/app/settings/_components/EmptyRecivedInvitation";

const Page = () => {
  const queryClient = useQueryClient();

  const { data: invites } = useQuery<InvitationType[]>({
    queryKey: ["invites"],
    queryFn: () => getInvitations(),
  });

  const acceptMutation = useMutation({
    mutationFn: (invitationId: number) => postAcceptance(invitationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invites"] });
    },
  });
  const refuseMutation = useMutation({
    mutationFn: (invitationId: number) => postRefusal(invitationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invites"] });
    },
  });

  const handleAccept = (invitationId: number) => {
    acceptMutation.mutate(invitationId);
  };

  const handleRefuse = (invitationId: number) => {
    refuseMutation.mutate(invitationId);
  };

  if (invites?.length === 0) return <EmptyRecivedInvitation />;

  return (
    <>
      <TitleHeader title="초대 받은 내역" />
      <main className={styles.container}>
        {invites?.map((invitation) => (
          <section key={invitation.invitationId} className={styles.list}>
            <Image className={styles.profileImg} src={getImagePath(invitation.petImageUrl)} alt="pet image" width={40} height={40} />
            <div className={styles.infoContainer}>
              <div className={styles.text}>
                <span className={styles.petname}>{invitation.petName}</span>
                <span className={styles.group}>펫메이트 그룹</span>
                <span className={styles.date}>{invitation.invitedAt}</span>
              </div>
              <button className={styles.acceptButton} onClick={() => handleAccept(invitation.invitationId)}>
                수락
              </button>
              <button className={styles.refuseButton} onClick={() => handleRefuse(invitation.invitationId)}>
                거절
              </button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Page;
