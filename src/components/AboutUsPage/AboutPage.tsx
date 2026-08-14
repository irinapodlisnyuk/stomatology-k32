import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import Teams from "@/components/HomePage/Teams/Teams"; 
import Advantages from "./Advantages/Advantages"; 
import dynamic from "next/dynamic"; 

const Licenses = dynamic(() => import("./Licenses/Licenses"), {
  ssr: false,
});

const Photogallery = dynamic(() => import("./PhotoGallery/PhotoGallery"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="О стоматологической клинике&nbsp;К+32"
        subtitle="Ваш партнер в&nbsp;области здоровья зубов"
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