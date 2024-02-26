import * as styles from "./PcHeader.css";
import PcHeaderNav from "../PcHeaderNav/PcHeaderNav";

const PcHeader = () => {
  return (
    <header className={styles.header}>
      <PcHeaderNav />
    </header>
  );
};

export default PcHeader;
