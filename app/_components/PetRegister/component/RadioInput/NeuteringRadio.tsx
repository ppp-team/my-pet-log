import * as styles from "./style.css";

interface Props {
  selectedNeutering: string;
  handleNeuteringChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NeuteringSelection: React.FC<Props> = ({ selectedNeutering, handleNeuteringChange }) => {
  return (
    <div>
      <div className={styles.radioContainer}>
        <div className={`${styles.leftRadio} ${selectedNeutering === "true" ? styles.leftSelectedBorder : ""}`}>
          <input type="radio" id="yes" name="neutering" value="true" checked={selectedNeutering === "true"} onChange={handleNeuteringChange} />
          <label className={`${styles.radioOption} ${selectedNeutering === "true" && styles.leftSelected}`} htmlFor="yes">
            했어요
          </label>
        </div>
        <div className={`${styles.rightRadio} ${selectedNeutering === "false" ? styles.rightSelectedBorder : ""}`}>
          <input type="radio" id="no" name="neutering" value="false" checked={selectedNeutering === "false"} onChange={handleNeuteringChange} />
          <label className={`${styles.radioOption} ${selectedNeutering === "false" && styles.rightSelected}`} htmlFor="no">
            안했어요
          </label>
        </div>
      </div>
    </div>
  );
};

export default NeuteringSelection;
