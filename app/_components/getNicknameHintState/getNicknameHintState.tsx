import * as styles from "./getNicknameHintState.css";
import ErrorMessage from "@/app/_components/ErrorMessage";
import ConfirmMessage from "@/app/_components/ConfirmMessage/ConfirmMessage";
import { CONFIRM_MESSAGE } from "@/app/_constants/inputConstant";

interface getNicknameHintStateTypes {
  isNicknameConfirmed: boolean;
  nicknameErrorMessage: string | null;
  textLength: number;
}

export const getNicknameHintState = ({ isNicknameConfirmed, nicknameErrorMessage, textLength }: getNicknameHintStateTypes) => {
  if (isNicknameConfirmed) {
    return {
      hintStyle: styles.inputConfirmStyle,
      hintComponent: (
        <div className={styles.hintContainer}>
          <ConfirmMessage message={CONFIRM_MESSAGE.nicknameValid} />
          <p className={`${styles.length} ${textLength > 10 && styles.maxLengthOver}`}>{textLength ?? "0"} / 10</p>
        </div>
      ),
    };
  } else if (!!nicknameErrorMessage) {
    return {
      hintStyle: styles.inputErrorStyle,
      hintComponent: (
        <div className={styles.hintContainer}>
          <ErrorMessage message={nicknameErrorMessage} />
          <p className={`${styles.length} ${textLength > 10 && styles.maxLengthOver}`}>{textLength ?? "0"} / 10</p>
        </div>
      ),
    };
  } else {
    return {
      hintStyle: null,
      hintComponent: (
        <div className={styles.hintContainer}>
          <p className={`${styles.length} ${textLength > 10 && styles.maxLengthOver}`}>{textLength ?? "0"} / 10</p>
        </div>
      ),
    };
  }
};
