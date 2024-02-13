import { UseFormSetValue, UseFormSetError, UseFormWatch } from "react-hook-form";

interface FormValues {
  nickname: string;
  image: string;
  isNicknameConfirmed: boolean;
}

export const checkNickname = (setValue: UseFormSetValue<FormValues>, setError: UseFormSetError<FormValues>, watch: UseFormWatch<FormValues>) => {
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

  // 닉네임 중복 검사 로직
  const isConfirmed = true; // 실제로는 API 호출 결과 사용
  if (!isConfirmed) {
    setError("nickname", { type: "duplicated", message: "이미 사용 중인 닉네임입니다." });
  } else {
    setValue("isNicknameConfirmed", true);
  }
};
