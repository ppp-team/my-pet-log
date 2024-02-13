import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, forwardRef } from "react";
import * as styles from "./styles.css";
import ErrorMessage from "@/app/_components/ErrorMessage";

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

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, value, hasError = false, errorText, onChange, onBlur, placeholder, disabled }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.styledInput} ${hasError && styles.error}`}
      />
      {hasError && <ErrorMessage message={errorText} />}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
