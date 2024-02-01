import { submitButton } from "./styles.css";
interface ButtonProps {
  type: "로그인" | "회원가입";
  disabled: boolean;
}

const SubmitButton = ({ type, disabled }: ButtonProps) => {
  return (
    <div>
      <button className={submitButton} disabled={disabled}>
        {type === "로그인" ? "로그인" : "작성 완료"}
      </button>
    </div>
  );
};

export default SubmitButton;
