import { useState } from "react";
import * as styles from "./style.css";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { PET_PLACEHOLDER } from "@/app/_constants/inputConstant";

const PET_WEIGHT_MAX_DECIMALS = 2;
const PetWeightInput = ({ register }) => {
  const {
    formState: { errors },
    register,
  } = useForm(); // useForm 훅 사용

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;

    // 입력값에서 소수점 이하를 둘째 자리까지 자르기
    const trimmedValue = parseFloat(inputValue).toFixed(PET_WEIGHT_MAX_DECIMALS);

    // 입력값 설정
    setValue(trimmedValue);

    // React Hook Form의 register에 설정
    register("weight", {
      value: trimmedValue,
      validate: (val) => {
        // 숫자가 아닌 경우
        if (isNaN(val)) {
          return "숫자만 입력 가능합니다.";
        }
        // 소수점 이하가 너무 긴 경우
        if (val.split(".")[1]?.length > PET_WEIGHT_MAX_DECIMALS) {
          return "소수점 이하 " + PET_WEIGHT_MAX_DECIMALS + "자리까지만 입력 가능합니다.";
        }
        return true; // 유효한 경우
      },
    });
  };

  return (
    <div>
      <input className={styles.writeInput} value={value} onChange={handleChange} placeholder={PET_PLACEHOLDER.weight} />
      {/* 에러 메시지 표시 */}
      {errors.weight && <ErrorMessage message={errors.weight.message} />}
    </div>
  );
};

export default PetWeightInput;
