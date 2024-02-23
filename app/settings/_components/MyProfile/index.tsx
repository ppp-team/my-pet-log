"use client";

import * as styles from "./style.css";
import CheckRigntIcon from "@/public/icons/chevron-right.svg?url";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@/app/_types/user/types";
import { getMe } from "@/app/_api/users";
import { getImagePath } from "@/app/_utils/getPersonImagePath";

const MyProfile = () => {
  const { data } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>마이프로필 관리하기</div>
      {data && (
        <div className={styles.ProfileWrapper}>
          <Image className={styles.profileImg} src={getImagePath(data.profilePath)} alt="profile image" width={50} height={50} />
          <div>
            <p className={styles.nickname}>{data.nickname}</p>
            <p className={styles.email}>{data.email}</p>
          </div>
          <Image className={styles.checkRightIcon} src={CheckRigntIcon} alt="check right icon" width={22} height={22} />
        </div>
      )}
    </div>
  );
};

export default MyProfile;
