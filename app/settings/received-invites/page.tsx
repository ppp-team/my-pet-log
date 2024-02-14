"use client";

import TitleHeader from "@/app/_components/TitleHeader";
import * as styles from "./page.css";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import { InvitationType } from "@/app/_types/invitaion/types";
import { useQuery } from "@tanstack/react-query";
import { getInvitations } from "@/app/_api/invitation";

const Page = () => {
  const { data: invites, isLoading } = useQuery<InvitationType[]>({
    queryKey: ["invites"],
    queryFn: () => getInvitations(),
  });

  if (isLoading) return <div>Loading...</div>;
  const invitationList = invites ?? [];

  return (
    <>
      <TitleHeader title="초대 받은 내역" redirectPath="/settings" />
      <main className={styles.container}>
        {invitationList.map((invitation) => (
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
              <button className={styles.acceptButton}>수락</button>
              <button className={styles.refuseButton}>거절</button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Page;
