import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import * as styles from "./styles.css";

interface InputProps {
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

const Input = ({ label, type, value, hasError = false, errorText, onChange, onBlur, placeholder, disabled }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.styledInput} ${hasError ? styles.error : ""}`}
      />
      {hasError && <p className={styles.error}>{errorText}</p>}
    </div>
  );
};

export default Input;
