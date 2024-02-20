import Image from "next/image";
import * as styles from "./InvitationInputError.css";
import cautionIconSrc from "@/public/icons/circle-warning.svg?url";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const InvitationInputError = ({ errorMessage }: { errorMessage: string | undefined }) => {
  return (
    <div className={styles.errorMessageContainer} style={assignInlineVars({ [styles.errorMessageVisibility]: errorMessage ? "visible" : "hidden" })}>
      <Image src={cautionIconSrc} alt="주의 아이콘 이미지" width={13} height={13} />
      <span className={styles.errorMessage}>{errorMessage || ""}</span>
    </div>
  );
};

export default InvitationInputError;
