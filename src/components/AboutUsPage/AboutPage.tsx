import Hero from "../Hero/Hero";
import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import Teams from "../HomePage/Teams/Teams";
import Advantages from "./Advantages/Advantages";
import Licenses from "./Licenses/Licenses";
import Photogallery from "./PhotoGallery/PhotoGallery";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="О стоматологической клинике&nbsp;К+32"
        subtitle="  Ваш партнер в&nbsp;области здоровья зубов"
        imageFolder="/image/aboutPage"
        imageName="aboutPage"
        altText="Современная стоматология Клиника +32"
        pageType="about"
      />
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
