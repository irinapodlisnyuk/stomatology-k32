import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import Advantages from "./Advantages/Advantages";
import HeroAbout from "./Hero/HeroAbout";
import Licenses from "./Licenses/Licenses";

export default function AboutUs() {
  return (
    <>
      <HeroAbout />
      <ScrollReveal>
        <Licenses />
      </ScrollReveal>

        <ScrollReveal>
         <Advantages />
      </ScrollReveal>
    </>
  );
}
