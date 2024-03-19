"use client";

import * as styles from "./MobileHeaderPetGroup.css";
import Image from "next/image";
import Link from "next/link";
import MobilePetGroupDropdown from "../MobilePetGroupDropdown/MobilePetGroupDropdown";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@/app/_types/users/types";
import { getMe } from "@/app/_api/users";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import NotificationIcon from "@/public/icons/notification.svg?url";

const MobileHeaderPetGroup = () => {
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  if (!user) return <></>;
  return (
    <header className={styles.header}>
      <MobilePetGroupDropdown />
      <Link href="/notification">
        <Image src={NotificationIcon} alt="알림센터 아이콘" width={20} height={20} />
      </Link>
      <Link className={styles.userProfileLink} href="/settings/profile">
        <Image className={styles.userProfileImage} src={getImagePath(user.profilePath)} alt="유저 프로필 관리 아이콘" width={40} height={40} />
      </Link>
    </header>
  );
};

export default MobileHeaderPetGroup;
