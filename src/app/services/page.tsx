import ServicesPage from "@/components/ServicesPage/ServicesPage";
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
    "эстетическая стоматология Кабардинка",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
