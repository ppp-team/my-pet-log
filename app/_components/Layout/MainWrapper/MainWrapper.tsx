import * as styles from "./MainWrapper.css";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MainWrapper;
