import ScrollReveal from "@/components/Scroll-reveal/ScrollReveal";
import About from "@/components/AboutK+32/About";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Service/Services";
import Teams from "@/components/Teams/Teams";
import Questions from "@/components/Questions/Questions";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <Teams />

      <Questions/>
    </>
  );
}
