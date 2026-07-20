"use client";

import React from "react";
import styles from "./List-service.module.scss";
import { SERVICES_DATA, ServiceItem } from "./Service_data";

const shuffleArray = (array: ServiceItem[]): ServiceItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffledServices = shuffleArray(SERVICES_DATA).slice(0, 4);

export const ServicesList = () => {
  return (
    <ul className={styles["services__list"]}>
      {shuffledServices.map(({ id, title, imgName, altText }, index) => (
        <li
          key={id}
          className={styles["services__item"]}
          style={{ "--index": index } as React.CSSProperties}
        >
          <picture className={styles["services__picture"]}>
            <source
              srcSet={`/image/services/${imgName}.webp 1x, /image/services/${imgName}@2x.webp 2x`}
              type="image/webp"
            />
            <source
              srcSet={`/image/services/${imgName}.jpg 1x, /image/services/${imgName}@2x.jpg 2x`}
              type="image/jpeg"
            />
            <img
              src={`/image/services/${imgName}.jpg`}
              alt={altText}
              className={styles["services__picture-img"]}
            />
          </picture>
          <span className={styles["services__item-text"]}>{title}</span>
        </li>
      ))}
    </ul>
  );
};
