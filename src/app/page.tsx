import ScrollReveal from "@/components/scroll-reveal/ScrollReveal"
import About from "@/components/AboutK+32/About";
import Hero from "@/components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>
    </>
  );
}
