import { UseFormSetValue, UseFormSetError, UseFormWatch } from "react-hook-form";
interface FormValues {
  nickname: string;
  image: string;
  isNicknameConfirmed: boolean;
}

export const checkNickname = (
  setValue: UseFormSetValue<FormValues>,
  setError: UseFormSetError<FormValues>,
  watch: UseFormWatch<FormValues>,
  mutate: (nickname: string) => void,
) => {
  const nickname = watch("nickname").replace(/\s+/g, "");
  setValue("nickname", nickname);

  if (nickname.length > 10) {
    setError("nickname", { type: "maxLength", message: "닉네임은 10자를 초과할 수 없습니다." });
    return;
  }

  if (nickname === "") {
    setError("nickname", { type: "required", message: "닉네임을 입력해주세요." });
    return;
  }

  mutate(nickname);
};
