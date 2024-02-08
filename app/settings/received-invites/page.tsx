import TitleHeader from "@/components/@common/TitleHeader";
import mockData from "./mockData.json";
import * as styles from "./page.css";
import { getTimeAgo } from "@/utils/getTimeAgo";
import NoProfileImage from "@/assets/images/person-profile-default.svg?url";

const Page = () => {
  return (
    <>
      <TitleHeader title="초대 받은 내역" redirectPath="/settings" />
      <main className={styles.container}>
        {mockData.invitations.map((invitations) => (
          <section key={invitations.invitationId} className={styles.list}>
            <div
              className={styles.profileImg}
              style={{
                backgroundImage: `url(${invitations.petImageUrl || NoProfileImage})`,
              }}
            />
            <div className={styles.infoContainer}>
              <div className={styles.text}>
                <span className={styles.petname}>{invitations.petName}</span>
                <span className={styles.group}>펫메이트 그룹</span>
                <span className={styles.date}>{getTimeAgo(invitations.invitedAt)}</span>
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
