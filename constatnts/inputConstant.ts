export const PLACEHOLDER = {
  email: "이메일을 입력해 주세요.",
  password: "비밀번호를 입력해 주세요.",
  nickname: "닉네임을 입력해 주세요.",
  signUpPassword: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  confirmPassword: "비밀번호를 한 번 더 입력해 주세요.",
  currentPassword: "현재 비밀번호 입력",
  newPassword: "새 비밀번호 입력",
  confirmNewPassword: "새 비밀번호 확인",
};

export const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요.",
  emailInvalid: "이메일 형식으로 작성해 주세요.",
  emailCheck: "이메일을 확인해 주세요.",
  emailDuplicate: "이미 사용중인 이메일입니다.",

  passwordRequired: "비밀번호를 입력해 주세요.",
  signinPasswordInvalid: "8자 이상 입력해 주세요.",
  signupPasswordInvalid: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호를 확인해 주세요.",

  confirmPasswordRequired: "비밀번호 확인을 입력해 주세요.",
  confirmPasswordCheck: "비밀번호가 일치하지 않습니다.",

  nicknameRequired: "닉네임을 입력해 주세요.",
  nicknameInvalid: "닉네임은 10자를 초과할 수 없습니다.",

  currentPasswordRequired: "현재 비밀번호를 입력해 주세요.",
  currentPasswordDifferent: "현재 비밀번호와 다릅니다. 다시 입력해주세요.",
  currentEqualNewPassword: "현재 비밀번호와 동일합니다. 다른 비밀번호로 변경해주세요.",
  newPasswordRequired: "새 비밀번호를 입력해 주세요.",
  confirmNewPasswordRequired: "새 비밀번호 확인을 입력해 주세요.",
};

export const EMAIL_RULES = {
  required: ERROR_MESSAGE.emailRequired,
  pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
};

export const SIGNIN_PASSWORD_RULES = {
  required: ERROR_MESSAGE.passwordRequired,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: ERROR_MESSAGE.signinPasswordInvalid,
  },
};

export const SIGNUP_PASSWORD_RULES = {
  required: ERROR_MESSAGE.passwordRequired,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: ERROR_MESSAGE.signupPasswordInvalid,
  },
};

export const NICKNAME_RULES = {
  required: ERROR_MESSAGE.nicknameRequired,
  maxLength: { value: 10, message: ERROR_MESSAGE.nicknameInvalid },
};

export const CURRENT_PASSWORD_RULES = {
  required: ERROR_MESSAGE.currentPasswordRequired,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: ERROR_MESSAGE.signinPasswordInvalid,
  },
};

export const NEW_PASSWORD_RULES = {
  required: ERROR_MESSAGE.newPasswordRequired,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: ERROR_MESSAGE.signupPasswordInvalid,
  },
};
