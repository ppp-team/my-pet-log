import mockData from "./mockData.json";
import * as styles from "./style.css";

const Page = () => {
  return (
    <main className={styles.container}>
      {mockData.data.map((member) => (
        <section key={member.guardianId} className={styles.member}>
          <div className={styles.profileWrapper}>
            <div
              className={styles.profileImg}
              style={{
                backgroundImage: `url(${member.profileImageUrl})`,
              }}
            />
            <p className={styles.nickname}>
              {member.nickname} {member.guardianRole === "leader" ? "(나)" : ""}
            </p>
          </div>
          <button className={styles.deleteButton}>{member.guardianRole === "leader" ? "탈퇴하기" : "삭제"}</button>
        </section>
      ))}
    </main>
  );
};

export default Page;
