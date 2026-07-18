"use client";
import { useState } from "react";
import styles from "./list-service.module.scss";

const SERVICES_DATA = [
  {
    id: "therapy",
    title: "терапия",
    imgName: "preventive-care",
    altText: "Терапевтическое лечение зубов в клинике К+32",
  },
  {
    id: "orthopedics",
    title: "ортопедия",
    imgName: "orthopedics",
    altText: "Ортопедическая стоматология в клинике К+32",
  },
  {
    id: "whitening",
    title: "отбеливание",
    imgName: "whitening",
    altText: "Отбеливание зубов в клинике К+32",
  },

  {
    id: "implantation",
    title: "имплантация",
    imgName: "implantation",
    altText: "Имплантация зубов в клинике К+32",
  },
  {
    id: "surgery",
    title: "хирургия",
    imgName: "surgery",
    altText: "Хирургическая стоматология в клинике К+32",
  },
  {
    id: "orthodontics",
    title: "ортодонтия",
    imgName: "orthodontics",
    altText: "Ортодонтическая стоматология в клинике К+32",
  },
  {
    id: "planmeca-3D",
    title: "3D",
    imgName: "planmeca-3D",
    altText: "ТРЕХМЕРНЫЙ ТОМОГРАФ PLANMECA PROMAX 3D CLASSIC в клинике К+32",
  },

  {
    id: "endodontics",
    title: "эндодонтия",
    imgName: "endodontics",
    altText: "Эндодонтическая стоматология в клинике К+32",
  },
    {
    id: "professional hygiene",
    title: "профессиональная гигиена",
    imgName: "professional hygiene",
    altText: "Профессиональная гигиена в клинике К+32",
  },
];

// Функция для случайного перемешивания массива (Алгоритм Фишера-Йетса)
const shuffleArray = (
  array: { id: string; title: string; imgName: string; altText: string }[],
) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const ServicesList = () => {
  // Инициализируем стейт перемешанным массивом при первой загрузке.
  // Если услуг больше 4, можно ограничить вывод: shuffleArray(SERVICES_DATA).slice(0, 4)
  const [shuffledServices] = useState(() =>
    shuffleArray(SERVICES_DATA).slice(0, 4),
  );

  return (
    <ul className={styles["services__list"]}>
      {shuffledServices.map(({ id, title, imgName, altText }) => (
        <li key={id} className={styles["services__item"]}>
          <div className={styles["services__item-image"]}>
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
            <span className={styles["services__item-title"]}>{title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
