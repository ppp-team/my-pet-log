import { UseFormRegister, UseFormWatch } from "react-hook-form";
import * as styles from "./style.css";
import { IFormInput } from "@/app/_components/PetRegister";

interface Props {
  register: UseFormRegister<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}

const NeuteringSelection = ({ register, watch }: Props) => {
  return (
    <div>
      <div className={styles.radioContainer}>
        <input type="radio" id="Y" value="Y" {...register("neutering")} style={{ display: "none" }} />
        <label className={`${styles.leftRadio} ${watch("neutering") === "Y" && styles.checkedRadio}`} htmlFor="Y">
          했어요
        </label>
        <input type="radio" id="N" value="N" {...register("neutering")} style={{ display: "none" }} />
        <label className={`${styles.rightRadio} ${watch("neutering") === "N" && styles.checkedRadio}`} htmlFor="N">
          안했어요
        </label>
      </div>
    </div>
  );
};

export default NeuteringSelection;
