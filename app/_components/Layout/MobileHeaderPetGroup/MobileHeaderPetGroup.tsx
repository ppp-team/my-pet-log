// "use client";

import * as styles from "./MobileHeaderPetGroup.css";
import Image from "next/image";
import Link from "next/link";
import NoUserProfileIconSrc from "@/public/icons/user-profile-default-no-camera.svg?url";
import MobilePetGroupDropdown from "../MobilePetGroupDropdown/MobilePetGroupDropdown";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@/app/_types/users/types";
import { getMe } from "@/app/_api/users";

const getImagePath = (path: UserType["profilePath"]) => {
  if (!path) return NoUserProfileIconSrc;
  else return `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${path}`;
};

const MobileHeaderPetGroup = () => {
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  if (!user) return <></>;
  return (
    <header className={styles.header}>
      <MobilePetGroupDropdown />
      <Link className={styles.userProfileLink} href="/settings/profile">
        <Image className={styles.userProfileImage} src={getImagePath(user.profilePath)} alt="유저 프로필 관리 아이콘" width={40} height={40} />
      </Link>
    </header>
  );
};

export default MobileHeaderPetGroup;
