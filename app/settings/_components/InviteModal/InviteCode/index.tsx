import * as styles from "./style.css";
import CopyIcon from "@/public/icons/copy.svg?url";
import Image from "next/image";
import MyPetInfo from "@/app/settings/_components/MyPetInfo";
import { showToast } from "@/app/_components/Toast";
import { useQuery } from "@tanstack/react-query";
import { getPetInfo } from "@/app/_api/pets";
import { PetInfo } from "@/app/_types/pets/types";

const petId = 7;

const InviteCode = () => {
  const inviteCode = "seul1234";

  const { data: petInfo, isLoading } = useQuery<PetInfo>({
    queryKey: ["petInfo", petId],
    queryFn: () => getPetInfo(petId),
  });

  if (isLoading) return <div>Loading...</div>;

  // 복사 버튼 클릭 시
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inviteCode)
      .then(() => {
        showToast("복사가 완료됐습니다.", true);
      })
      .catch(() => {
        showToast("복사를 실패했습니다.", false);
      });
  };

  return (
    <>
      <h3 style={{ fontSize: "1.6rem", fontWeight: "500", marginBottom: "1.1rem" }}>마이펫 초대 코드</h3>
      <section className={styles.codeContainer}>
        {petInfo && <MyPetInfo petInfo={petInfo} />}
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
