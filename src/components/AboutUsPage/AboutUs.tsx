import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import Teams from "../HomePage/Teams/Teams";
import Advantages from "./Advantages/Advantages";
import HeroAbout from "./Hero/HeroAbout";
import Licenses from "./Licenses/Licenses";
import Photogallery from "./PhotoGallery/PhotoGallery";

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
      <ScrollReveal>
        <Teams />
      </ScrollReveal>

      <ScrollReveal>
        <Photogallery />
      </ScrollReveal>
    </>
  );
}
