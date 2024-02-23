// "use server";

import * as styles from "./PcHeader.css";
import PcHeaderNav from "../PcHeaderNav/PcHeaderNav";

const PcHeader = () => {
  const isLoggedIn = false; // TODO react-cookie try
  return (
    <header className={styles.header}>
      <PcHeaderNav isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default PcHeader;
