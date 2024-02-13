"use client";

import * as styles from "./MobileHeaderPetGroup.css";
import Image from "next/image";
import Link from "next/link";
import NoUserProfileIconSrc from "@/public/icons/user-profile-default-no-camera.svg?url";
import MobilePetGroupDropdown from "../MobilePetGroupDropdown/MobilePetGroupDropdown";

const SAMPLE_USER_PROFILE_IMAGE = NoUserProfileIconSrc;

const MobileHeaderPetGroup = () => {
  return (
    <header className={styles.header}>
      <MobilePetGroupDropdown />
      <Link className={styles.userProfileLink} href="/settings/profile">
        <Image className={styles.userProfileImage} src={SAMPLE_USER_PROFILE_IMAGE ?? NoUserProfileIconSrc} alt="유저 프로필 관리 아이콘" width={40} height={40} />
      </Link>
    </header>
  );
};

export default MobileHeaderPetGroup;
