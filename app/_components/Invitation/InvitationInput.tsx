import * as styles from "./InvitationInput.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { UseFormRegister } from "react-hook-form";

interface InvitationInputProps {
  labelText: string;
  isError: boolean;
  placeholder: string;
  requiredErrorMessage: string;
  register: UseFormRegister<any>;
}

const InvitationInput = ({ labelText, isError, placeholder, requiredErrorMessage, register }: InvitationInputProps) => {
  return (
    <>
      <label className={styles.label}>{labelText}</label>
      <input
        className={styles.input}
        style={assignInlineVars({ [styles.borderColor]: isError ? "var(--Red)" : "var(--Gray81)" })}
        type="text"
        placeholder={placeholder}
        {...register("inputValue", {
          required: requiredErrorMessage,
        })}
      />
    </>
  );
};

export default InvitationInput;
