import { InputProps } from "@/app/(auth)/_components/SignInput/Input";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { forwardRef } from "react";
import * as styles from "./styles.css";

const EmailInput = forwardRef<HTMLInputElement, InputProps>(({ label, value, hasError, errorText, onChange, onBlur, placeholder }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <div className={styles.emailContainer}>
        <input ref={ref} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} className={`${styles.styledInput} ${hasError && styles.error}`} />
        <button className={styles.emailVerifyRequestButton} type="button">
          중복확인
        </button>
      </div>
      {hasError && <ErrorMessage message={errorText} />}
    </div>
  );
});

EmailInput.displayName = "EmailInput";

export default EmailInput;
