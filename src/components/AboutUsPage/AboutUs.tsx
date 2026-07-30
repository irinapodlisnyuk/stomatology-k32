import styles from "./AboutUs.module.scss";

import HeroAbout from "./Hero/HeroAbout";
import Licenses from "./Licenses/Licenses";

export default function AboutUs() {
  return (
    <main className={styles.aboutPage}>
      <HeroAbout />
      <Licenses />
    </main>
  );
}