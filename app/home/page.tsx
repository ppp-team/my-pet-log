import { NextPage } from "next";
import * as styles from "./page.css";
import HomePetProfile from "@/app/home/_components/HomePetProfile/HomePetProfile";
import HomeHealthLogPreview from "@/app/home/_components/HomeHealthLogPreview/HomeHealthLogPreview";

const HomePage: NextPage = () => {
  return (
    <main className={styles.container}>
      <HomePetProfile />
      <HomeHealthLogPreview />
    </main>
  );
};
export default HomePage;
