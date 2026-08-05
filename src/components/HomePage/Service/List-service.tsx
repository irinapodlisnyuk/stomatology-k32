"use client";

import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./List-service.module.scss";
import { SERVICES_DATA, ServiceItem } from "@/data/Service_data";

const shuffleArray = (array: ServiceItem[]): ServiceItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const ServicesList = () => {
  const shuffledServices = shuffleArray(SERVICES_DATA).slice(0, 4);

  return (
    <ul className={styles["services__list"]}>
      {shuffledServices.map(({ id, title, imgName, altText }, index) => (
        <li
          key={id}
          className={styles["services__item"]}
          style={{ "--index": index } as React.CSSProperties}
        >
          <ResponsivePicture
            folder="/image/services"
            baseName={imgName}
            alt={altText}
            className={styles["services__picture-img"]}
          />
          <span className={styles["services__item-text"]}>{title}</span>
        </li>
      ))}
    </ul>
  );
};
