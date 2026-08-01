import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import CallBack from "./CallBack/CallBack";
import HeroContact from "./Hero/HeroContact";

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <ScrollReveal>
        <CallBack />
      </ScrollReveal>
    </>
  );
}
