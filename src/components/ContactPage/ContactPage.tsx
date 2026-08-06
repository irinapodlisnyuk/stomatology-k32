import Hero from "../Hero/Hero";
import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import CallBack from "./CallBack/CallBack";
import Feedback from "./Feedback/Feedback";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Связаться с нами"
        subtitle="Давайте общаться легко и непринужденно"
        imageFolder="/image/call"
        imageName="call"
        altText="Современная стоматология Клиника +32"
        pageType="call"
      />
      <ScrollReveal>
        <CallBack />
      </ScrollReveal>

      <ScrollReveal>
        <Feedback />
      </ScrollReveal>
    </>
  );
}
