import Hero from "@/components/Hero/Hero";
import ServicesAll from "@/components/ServicePage/ServicesAll/ServicesAll";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Услуги стоматологии в Кабардинке | Цены клиники «Клиника +32»",
  description:
    "Полный спектр стоматологических услуг в клинике «Клиника +32» в Кабардинке: от профессиональной гигиены и лечения кариеса до имплантации и протезирования. Честные цены, современное оборудование, опытные врачи.",
  keywords: [
    "услуги стоматолога Кабардинка",
    "лечение зубов цены",
    "стоматологическая клиника услуги",
    "протезирование зубов",
    "имплантация зубов Геленджик",
    "эстетическая стоматология Кабардинка"
  ],
  robots: {
    index: true,
    follow: true,
  },
};


export default function ServiceRoute() {

  return (
    <>
      <Hero
        title="Наши услуги"
        subtitle="Комплексный уход за&nbsp;вашей прекрасной улыбкой"
        imageFolder="/image/servicePage"
        imageName="service"
        altText="Стоматологические услуги К+32"
        pageType="call" // Используем тип "call", чтобы автоматически применились наши оптимизированные sizes="360px" для первого экрана!
      />

      <ServicesAll />
    </>
  );
}