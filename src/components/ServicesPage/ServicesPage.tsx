import Hero from "../Hero/Hero";
import ServicesAll from "./ServicesAll/ServicesAll";

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Наши услуги"
        subtitle="Комплексный уход за&nbsp;вашей прекрасной улыбкой"
        imageFolder="/image/servicePage"
        imageName="service"
        altText="Стоматологические услуги К+32"
        pageType="service"
      />

      <ServicesAll />
    </>
  );
}
