import * as styles from "./MainWrapperPcOnly.css";

const MainWrapperPcOnly = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MainWrapperPcOnly;
