import { getLogDetail } from "@/app/_api/log";
import { LogDetailType } from "@/app/_types/log/types";
import logDetailIconSrc from "@/public/icons/log-detail-icon.svg?url";
import logMemoIconSrc from "@/public/icons/log-edit-icon.svg?url";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import * as styles from "./style.css";

interface LogDetailProps {
  logId: number;
}

const LogDetail = ({ logId }: LogDetailProps) => {
  const petId = 6;

  const { data: logDetailData, error } = useQuery<LogDetailType, Error>({
    queryKey: ["LogDetail", petId, logId],
    queryFn: () => getLogDetail(Number(petId), Number(logId)),
    enabled: !!petId,
  });

  if (error) return <div>Error loading log details: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <Image src={logDetailIconSrc} width={18} height={18} alt={"세부사항 아이콘"} />
            <p>{logDetailData?.subType || "수정하기로 세부사항을 입력해보세요"}</p>
          </div>
          {logDetailData?.memo && (
            <div className={styles.box}>
              <Image src={logMemoIconSrc} width={18} height={18} alt={"메모 아이콘"} />
              <p>{logDetailData.memo}</p>
            </div>
          )}
        </div>
        <button className={styles.editButton}>수정하기</button>
      </div>
    </>
  );
};

export default LogDetail;
