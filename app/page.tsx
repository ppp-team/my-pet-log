import * as styles from "@/app/page.css";
import EditIcon from "@/assets/edit.svg";
import EditIconUrl from "@/assets/edit.svg?url";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      homee
      <EditIcon color={"gold"} width={30} height={30} />
      <Image src={EditIconUrl} alt="edit icon" width={20} height={20} />
    </div>
  );
};

export default Home;
