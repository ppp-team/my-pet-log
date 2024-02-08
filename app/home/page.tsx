import { NextPage } from "next";
import * as styles from "./page.css";
import HomePetProfile from "@/components/Home/HomePetProfile/HomePetProfile";
import HomeHealthLogPreview from "@/components/Home/HomeHealthLogPreview/HomeHealthLogPreview";

const HomePage: NextPage = () => {
  return (
    <main className={styles.container}>
      <HomePetProfile />
      <HomeHealthLogPreview />
    </main>
  );
};
export default HomePage;
