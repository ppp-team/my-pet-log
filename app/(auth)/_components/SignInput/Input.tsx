import ErrorMessage from "@/app/_components/ErrorMessage";
import PasswordEyeOff from "@/public/icons/visibility-off.svg?url";
import PasswordEyeOn from "@/public/icons/visibility-on.svg?url";
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, forwardRef, useState } from "react";
import Image from "next/image";
import * as styles from "./styles.css";

export interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  hasError?: boolean;
  errorText?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", value, hasError = false, errorText, onChange, onBlur, placeholder, disabled }, ref) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`${styles.styledInput} ${hasError && styles.error}`}
        />
        {(label === "비밀번호*" || label === "비밀번호 확인*") && (
          <Image
            src={inputType === "password" ? PasswordEyeOff : PasswordEyeOn}
            alt="비밀번호 아이콘"
            width={24}
            height={24}
            className={styles.passwordEyeIcon}
            onClick={() => setInputType((prev) => (prev === "password" ? "text" : "password"))}
          />
        )}
      </div>
      {hasError && <ErrorMessage message={errorText} />}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
