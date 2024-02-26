import * as styles from "./style.css";
import CopyIcon from "@/public/icons/copy.svg?url";
import Image from "next/image";
import MyPetInfo from "@/app/settings/_components/MyPetInfo";
import { showToast } from "@/app/_components/Toast";
import { useQuery } from "@tanstack/react-query";
import { getPet, getCode } from "@/app/_api/pets";
import { PetType } from "@/app/_types/pets/types";

const InviteCode = ({ petId }: { petId: number }) => {
  const { data: petInfo } = useQuery<PetType>({
    queryKey: ["petInfo", petId],
    queryFn: () => getPet(petId),
  });
  const { data: code } = useQuery<string>({
    queryKey: ["inviteCode", petId],
    queryFn: () => getCode(),
  });

  // 복사 버튼 클릭 시
  const handleCopyClick = () => {
    if (!code) return;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        showToast("복사가 완료됐습니다.", true);
      })
      .catch(() => {
        showToast("복사를 실패했습니다.", false);
      });
  };

  return (
    <>
      <h3 className={styles.title}>마이펫 초대 코드</h3>
      <section className={styles.codeContainer}>
        {petInfo && <MyPetInfo petInfo={petInfo} />}
        <div className={styles.copyContainer}>
          <span className={styles.code}>{code}</span>
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
