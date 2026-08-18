import Hero from "../Hero/Hero";
import CallBack from "./CallBack/CallBack";
import Feedback from "./Feedback/Feedback";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Связаться с нами"
        subtitle="Давайте общаться легко и&nbsp;непринужденно"
        imageFolder="/image/call"
        imageName="call"
        altText="Современная стоматология Клиника +32"
        pageType="call"
      />

      <CallBack />
      <Feedback />
    </>
  );
}
