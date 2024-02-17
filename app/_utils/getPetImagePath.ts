import { UserType } from "@/app/_types/users/types";
import NoPetProfileImage from "@/public/images/pet-profile-default.svg?url";

export const getImagePath = (path: UserType["profilePath"]) => {
  if (path == null) return NoPetProfileImage;
  else return `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${path}`;
};
