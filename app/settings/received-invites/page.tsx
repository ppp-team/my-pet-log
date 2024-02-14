"use client";

import TitleHeader from "@/app/_components/TitleHeader";
import * as styles from "./page.css";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import { InvitationType } from "@/app/_types/invitaion/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getInvitations, postAcceptance } from "@/app/_api/invitation";

const Page = () => {
  const queryClient = useQueryClient();

  const { data: invites, isLoading } = useQuery<InvitationType[]>({
    queryKey: ["invites"],
    queryFn: () => getInvitations(),
  });

  const acceptMutation = useMutation({
    mutationFn: (invitationId: number) => postAcceptance(invitationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invites"] });
    },
  });

  const handleAccept = (invitationId: number) => {
    acceptMutation.mutate(invitationId);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TitleHeader title="초대 받은 내역" redirectPath="/settings" />
      <main className={styles.container}>
        {invites?.map((invitation) => (
          <section key={invitation.invitationId} className={styles.list}>
            <div
              className={styles.profileImg}
              style={{
                backgroundImage: `url(${invitation.petImageUrl ?? NoProfileImage})`,
              }}
            />
            <div className={styles.infoContainer}>
              <div className={styles.text}>
                <span className={styles.petname}>{invitation.petName}</span>
                <span className={styles.group}>펫메이트 그룹</span>
                <span className={styles.date}>{invitation.invitedAt}</span>
              </div>
              <button className={styles.acceptButton} onClick={() => handleAccept(invitation.invitationId)}>
                수락
              </button>
              <button className={styles.refuseButton}>거절</button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Page;
