import { toast } from "react-toastify";
import { container } from "./style.css";
import Image from "next/image";
import ConfirmIcon from "@/public/icons/confirm.svg?url";
import WarningIcon from "@/public/icons/circle-warning.svg?url";

type messageProps = {
  message: string;
  isSuccess: boolean;
};

const ToastComponent = ({ message, isSuccess }: messageProps) => (
  <div className={container}>
    <Image src={isSuccess ? ConfirmIcon : WarningIcon} alt="icon" width={25} height={25} />
    <span style={{ color: isSuccess ? "var(--Green)" : "var(--Red)" }}>{message}</span>
  </div>
);

export const showToast = (message: string, isSuccess: boolean) => {
  toast(<ToastComponent message={message} isSuccess={isSuccess} />, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: true,
    closeOnClick: true,
    theme: "light",
  });
};
