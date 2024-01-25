import { NextPage } from "next";
import * as styles from "./page.css";
import PetProfile from "./_components/PetProfile/PetProfile";
import HealthLogPreview from "./_components/HealthLogPreview/HealthLogPreview";

const HomePage: NextPage = () => {
  return (
    <section className={styles.container}>
      <PetProfile />
      <HealthLogPreview />
    </section>
  );
};
export default HomePage;
