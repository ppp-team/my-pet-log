import * as styles from "./style.css";
import petInfo from "./mockData.json";
import CopyIcon from "@/assets/copy.svg?url";
import Image from "next/image";
import MyPetInfo from "@/components/Setting/MyPetInfo";

const InviteCode = () => {
  const inviteCode = "seul1234";

  // 복사 버튼 클릭 시
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inviteCode)
      .then(() => {
        alert("초대 코드가 복사되었습니다."); // 여기에 토스트 메시지 띄우면 될 듯?!
      })
      .catch(() => {
        alert("복사를 실패했습니다.");
      });
  };

  return (
    <>
      <h3 style={{ fontSize: "1.6rem", fontWeight: "500", marginBottom: "1.1rem" }}>마이펫 초대 코드</h3>
      <section className={styles.codeContainer}>
        <MyPetInfo petInfo={petInfo} />
        <div className={styles.copyContainer}>
          <span style={{ fontSize: "1.4rem", fontWeight: "500", color: "var(--Gray81)" }}>{inviteCode}</span>
          <button className={styles.copyIcon} onClick={handleCopyClick}>
            <Image src={CopyIcon} alt="copy icon" width={14} height={14} />
            <span>복사하기</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default InviteCode;
