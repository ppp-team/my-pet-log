import Input, { InputProps } from "@/components/Sign/SignInput/Input";
import { inputContainer } from "./styles.css";

const PasswordInput: React.FC<InputProps> = ({ label, value, hasError, errorText, onChange, onBlur, placeholder }) => {
  return (
    <div className={inputContainer}>
      <Input label={label} value={value} hasError={hasError} errorText={errorText} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
    </div>
  );
};
export default PasswordInput;
