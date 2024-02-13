import { FieldErrors } from "react-hook-form";
import { inputConfirmStyle, inputErrorStyle } from "@/app/settings/(account)/profile/page.css";
import ErrorMessage from "@/app/_components/ErrorMessage";
import ConfirmMessage from "@/app/_components/ConfirmMessage/ConfirmMessage";
import { CONFIRM_MESSAGE } from "@/app/_constants/inputConstant";

interface FormValues {
  nickname: string;
  image: string;
  isNicknameConfirmed: boolean;
}

export const getNicknameState = (isNicknameConfirmed: boolean, errors: FieldErrors<FormValues>) => {
  if (isNicknameConfirmed) {
    return {
      style: inputConfirmStyle,
      message: <ConfirmMessage message={CONFIRM_MESSAGE.nicknameValid} />,
    };
  } else if (errors.nickname) {
    return {
      style: inputErrorStyle,
      message: <ErrorMessage message={errors.nickname.message} />,
    };
  } else {
    return {
      style: null,
      message: null,
    };
  }
};
