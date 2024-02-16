import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import closeIconSrc from "@/public/icons/close.svg?url";
import ReceivedInvitationList from "../ReceivedInvitationList/ReceivedInvitationList";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/app/_constants/inputConstant";
import { useForm } from "react-hook-form";
import InvitationInput from "@/app/_components/Invitation/InvitationInput";
import InvitationInputError from "@/app/_components/Invitation/InvitationInputError";
import InvitationSubmitButton from "@/app/_components/Invitation/InvitationSubmitButton";

export interface TInvitationCodeFormValues {
  inputValue: string;
  invalid: string;
}

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}

const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TInvitationCodeFormValues>({ mode: "onTouched" });

  const onSubmit = (data: TInvitationCodeFormValues) => {};

  return (
    <section className={styles.modalContainer}>
      <button onClick={onClickClose} className={styles.closeButton}>
        <Image src={closeIconSrc} alt="모달 종료 버튼 이미지" width={24} height={24} />
      </button>
      <p className={styles.title}>
        초대 내역을 승낙하거나
        <br />
        직접 초대 코드를 입력해주세요.
      </p>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InvitationInput
            labelText={"초대 코드"}
            isError={!!errors?.inputValue}
            placeholder={PLACEHOLDER.receivedInvitationCode}
            requiredErrorMessage={ERROR_MESSAGE.receivedInvitationCodeRequired}
            register={register}
          />
          <InvitationInputError errorMessage={errors?.inputValue?.message} />
          <InvitationSubmitButton />
        </form>
      </div>
      <ReceivedInvitationList />
    </section>
  );
};

export default ParticipatePetGroupModal;
