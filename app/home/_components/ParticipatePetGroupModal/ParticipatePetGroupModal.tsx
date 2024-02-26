import * as styles from "./ParticipatePetGroupModal.css";
import Image from "next/image";
import closeIconSrc from "@/public/icons/close.svg?url";
import ReceivedInvitationList from "../ReceivedInvitationList/ReceivedInvitationList";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/app/_constants/inputConstant";
import { useForm } from "react-hook-form";
import InvitationInput from "@/app/_components/Invitation/InvitationInput";
import InvitationInputError from "@/app/_components/Invitation/InvitationInputError";
import InvitationSubmitButton from "@/app/_components/Invitation/InvitationSubmitButton";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@/app/_api/invitation";
import removeSpaces from "@/app/_utils/removeSpaces";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/_components/Toast";
import { useState } from "react";

export interface TInvitationCodeFormValues {
  inputValue: string;
  invalid: string;
}

interface ParticipatePetGroupModalProps {
  onClickClose: () => void;
}

const ParticipatePetGroupModal = ({ onClickClose }: ParticipatePetGroupModalProps) => {
  const [hasNoPets, setHasNoPets] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<TInvitationCodeFormValues>({ mode: "onTouched" });

  const { mutate: registerMutation, isPending: isRegisterPending } = useMutation({
    mutationFn: postRegister,
    onSuccess: (data) => {
      if (data) {
        showToast("등록되었습니다!", true);
        if (hasNoPets) setHasNoPets(false);
      } else {
        setError("inputValue", { type: "invalid", message: ERROR_MESSAGE.receivedInvitationCodeInvalid });
      }
    },
    onError: () => {
      setError("inputValue", { type: "invalid", message: ERROR_MESSAGE.receivedInvitationCodeInvalid });
    },
  });

  const onSubmit = (data: TInvitationCodeFormValues) => {
    registerMutation(removeSpaces(data.inputValue));
  };

  return (
    <section className={styles.modalContainer}>
      <button onClick={onClickClose} className={styles.closeButton}>
        <Image className={styles.closeIcon} src={closeIconSrc} alt="모달 종료 버튼 이미지" width={24} height={24} />
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
          <InvitationSubmitButton isDisable={isRegisterPending || getValues("inputValue") === ""} />
        </form>
      </div>
      <ReceivedInvitationList
        checkHasNoPets={() => {
          if (hasNoPets) setHasNoPets(false);
        }}
      />
      <button className={styles.linkButton} type="button" disabled={isRegisterPending || hasNoPets} onClick={() => router.push("/home-select")}>
        마이펫 선택하러 가기
      </button>
    </section>
  );
};

export default ParticipatePetGroupModal;
