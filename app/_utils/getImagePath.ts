import { UserType } from "@/app/_types/users/types";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";

export const getImagePath = (path: UserType["profilePath"]) => {
  if (!path) return NoProfileImage;
  else return `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${path}`;
};
