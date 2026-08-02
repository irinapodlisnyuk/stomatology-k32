import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import CallBack from "./CallBack/CallBack";
import Feedback from "./Feedback/Feedback";
import HeroContact from "./Hero/HeroContact";

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <ScrollReveal>
        <CallBack />
      </ScrollReveal>

        <ScrollReveal>
        <Feedback/>
      </ScrollReveal>

      
    </>
  );
}
