import Input, { InputProps } from "@/app/(auth)/components/SignInput/Input";
import { forwardRef } from "react";
import { inputContainer } from "./styles.css";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ label, value, hasError, errorText, onChange, onBlur, placeholder }, ref) => {
  return (
    <div className={inputContainer}>
      <Input ref={ref} type="password" label={label} value={value} hasError={hasError} errorText={errorText} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
    </div>
  );
});

PasswordInput.displayName = "Input";

export default PasswordInput;
