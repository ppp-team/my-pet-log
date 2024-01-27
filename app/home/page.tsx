import { NextPage } from "next";
import * as styles from "./page.css";
import HomeHeathLogPreview from "../../components/HomeHealthLogPreview/HomeHeathLogPreview";
import HomePetProfile from "@/components/HomePetProfile/HomePetProfile";

const HomePage: NextPage = () => {
  return (
    <main className={styles.container}>
      <HomePetProfile />
      <HomeHeathLogPreview />
    </main>
  );
};
export default HomePage;
