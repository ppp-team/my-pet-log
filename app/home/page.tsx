import { NextPage } from "next";
import * as styles from "./page.css";
import HomePetProfile from "@/components/Home/HomePetProfile/HomePetProfile";
import HomeHeathLogPreview from "@/components/Home/HomeHealthLogPreview/HomeHeathLogPreview";

const HomePage: NextPage = () => {
  return (
    <main className={styles.container}>
      <HomePetProfile />
      <HomeHeathLogPreview />
    </main>
  );
};
export default HomePage;
