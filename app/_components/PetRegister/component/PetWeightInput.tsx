import ErrorMessage from "@/app/_components/ErrorMessage";
import { IFormInput } from "@/app/_components/PetRegister";
import OptionalMessage from "@/app/_components/PetRegister/component/OptionalCheck";
import * as styles from "@/app/_components/PetRegister/style.css";
import { PET_PLACEHOLDER, PET_WEIGHT_RULES } from "@/app/_constants/inputConstant";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";

interface Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
  getValue: UseFormGetValues<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}

const PetWeightInput = ({ register, errors, getValue, setValue, watch }: Props) => {
  const [isOptionActive, setIsOptionActive] = useState(!Boolean(getValue("weight")));

  useEffect(() => {
    setIsOptionActive(!Boolean(watch("weight")));
  }, [watch("weight")]);

  const clearWeight = () => {
    setValue("weight", null);
    setIsOptionActive((prev) => !prev);
  };
  return (
    <>
      <input className={styles.writeInput} {...register("weight", PET_WEIGHT_RULES)} placeholder={PET_PLACEHOLDER.weight} />
      {errors.weight && <ErrorMessage message={errors?.weight.message} />}
      <div className={styles.plusMarginWrapper}>
        <OptionalMessage onClearInput={clearWeight} message={"모르겠어요"} isActive={isOptionActive} />
      </div>
    </>
  );
};

export default PetWeightInput;
