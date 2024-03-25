import { IFormInput } from "@/app/_components/PetRegister";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import * as styles from "./style.css";

interface Props {
  register: UseFormRegister<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}

const GenderSelection = ({ register, watch }: Props) => {
  return (
    <div className={styles.radioContainer}>
      <input type="radio" id="MALE" value="MALE" {...register("gender")} style={{ display: "none" }} />
      <label htmlFor="MALE" className={`${styles.leftRadio} ${watch("gender") === "MALE" && styles.checkedRadio}`}>
        남
      </label>

      <input type="radio" id="FEMALE" value="FEMALE" {...register("gender")} style={{ display: "none" }} />
      <label htmlFor="FEMALE" className={`${styles.rightRadio} ${watch("gender") === "FEMALE" && styles.checkedRadio}`}>
        여
      </label>
    </div>
  );
};

export default GenderSelection;
