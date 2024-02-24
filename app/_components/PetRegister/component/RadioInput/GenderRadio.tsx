import * as styles from "./style.css";

interface Props {
  selectedGender: string;
  handleGenderChange: (value: "MALE" | "FEMALE") => void;
}

const GenderSelection: React.FC<Props> = ({ selectedGender, handleGenderChange }) => {
  return (
    <div className={styles.radioContainer}>
      <div className={`${styles.leftRadio} ${selectedGender === "MALE" ? styles.leftSelectedBorder : ""}`}>
        <input type="radio" id="MALE" value="MALE" checked={selectedGender === "MALE"} onChange={() => handleGenderChange("MALE")} />
        <label className={`${styles.radioOption} ${selectedGender === "MALE" && styles.leftSelected}`} htmlFor="MALE">
          남
        </label>
      </div>
      <div className={`${styles.rightRadio} ${selectedGender === "FEMALE" ? styles.rightSelectedBorder : ""}`}>
        <input type="radio" id="FEMALE" value="FEMALE" checked={selectedGender === "FEMALE"} onChange={() => handleGenderChange("FEMALE")} />
        <label className={`${styles.radioOption} ${selectedGender === "FEMALE" && styles.rightSelected}`} htmlFor="FEMALE">
          여
        </label>
      </div>
    </div>
  );
};

export default GenderSelection;
