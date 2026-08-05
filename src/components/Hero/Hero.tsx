"use client";
import styles from "./hero.module.scss";
import { useModals } from "@/components/context/ModalContext";

interface HeroProps {
  title?: string;
  subtitle?: string;
  text?: string;
  imageFolder?: string;
  imageName?: string;
  altText?: string;
  showButton?: boolean;
  isStyle?: boolean;
  className?: string; // Пропс для переопределения стилей
}

export default function Hero({
  title = "Добро пожаловать в&nbsp;К+32",
  subtitle = "Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе.",
  text,
  imageFolder = "/image/hero",
  imageName = "hero",
  altText = "Современная стоматология Клиника +32",
  showButton = false,
  isStyle = false,
  className = "", // По умолчанию пустая строка
}: HeroProps) {
  const { openAppointment } = useModals();

  const mobSuffix = isStyle ? "-mob" : "-mobile";
  const tabSuffix = isStyle ? "-tab" : "-tablet";

  return (
    // 💡 ВАЖНО: Объединяем локальный класс стилей со внешним className через шаблонную строку
    <section className={`${styles.hero} ${className}`}>
      <div className="container">
        <picture className={styles.hero__picture}>
          {/* 1. Мобильные устройства (до 767px) */}
          <source
            media="(max-width: 767px)"
            srcSet={`${imageFolder}/${imageName}${mobSuffix}.webp 1x, ${imageFolder}/${imageName}${mobSuffix}@2x.webp 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imageFolder}/${imageName}${mobSuffix}.jpg 1x, ${imageFolder}/${imageName}${mobSuffix}@2x.jpg 2x`}
            type="image/jpg"
          />

          {/* 2. Планшеты (до 1199px) */}
          <source
            media="(max-width: 1199px)"
            srcSet={`${imageFolder}/${imageName}${tabSuffix}.webp 1x, ${imageFolder}/${imageName}${tabSuffix}@2x.webp 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet={`${imageFolder}/${imageName}${tabSuffix}.jpg 1x, ${imageFolder}/${imageName}${tabSuffix}@2x.jpg 2x`}
            type="image/jpg"
          />

          {/* 3. Десктоп (от 1200px) */}
          <source
            srcSet={`${imageFolder}/${imageName}.webp 1x, ${imageFolder}/${imageName}@2x.webp 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${imageFolder}/${imageName}.jpg 1x, ${imageFolder}/${imageName}@2x.jpg 2x`}
            type="image/jpg"
          />

          <img
            src={`${imageFolder}/${imageName}.jpg`}
            alt={altText.replace(/&nbsp;/g, " ")}

            className={`${styles.hero__img || ""} ${styles.hero__bg || ""}`}
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <div className={styles.hero__wrapper}>
          <h2
            className={styles.hero__title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className={styles.hero__subtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          {text && (
            <p
              className={styles.hero__text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}

          {showButton && (
            <div className={styles.hero__actions}>
              <button
                className="btn btn--appointment"
                onClick={openAppointment}
              >
                Записаться на прием
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}