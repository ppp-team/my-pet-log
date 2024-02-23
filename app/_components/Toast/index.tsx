import { toast } from "react-toastify";
import { container } from "./style.css";
import ConfirmIcon from "@/public/icons/confirm.svg";
import WarningIcon from "@/public/icons/circle-warning.svg";

type messageProps = {
  message: string;
  isSuccess: boolean;
};

const ToastComponent = ({ message, isSuccess }: messageProps) => (
  <div className={container}>
    {isSuccess ? <ConfirmIcon width={20} height={20} color={"var(--Green)"} /> : <WarningIcon width={20} height={20} />}
    <span style={{ color: "var(--White)" }}>{message}</span>
  </div>
);

export const showToast = (message: string, isSuccess: boolean) => {
  toast.dismiss();
  toast(<ToastComponent message={message} isSuccess={isSuccess} />, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  });
};
