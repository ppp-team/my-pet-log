import mockData from "./mockData.json";
import * as styles from "./style.css";

const Page = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.invitation}>
          <p>💌 다른 펫메이트도 초대하고 싶다면?</p>
          <button className={styles.invitationButton}>초대하기 &gt;</button>
        </section>
      </header>
      <main className={styles.main}>
        {mockData.data.map((invite) => (
          <section key={invite.guardianId} className={styles.member}>
            <div className={styles.profileWrapper}>
              <div
                className={styles.profileImg}
                style={{
                  backgroundImage: `url(${invite.profileImageUrl})`,
                }}
              />
              <p className={styles.nickname}>{invite.nickname}</p>
              <div className={styles.state}>{invite.state}</div>
            </div>
            <button className={styles.cancelButton}>초대 취소</button>
          </section>
        ))}
      </main>
    </>
  );
};

export default Page;
