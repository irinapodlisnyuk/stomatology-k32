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
  pageType?: "home" | "blog" | "about" | "contacts" | "post" | "call";
}

export default function Hero({
  title = "Добро пожаловать в&nbsp;К+32",
  subtitle = "Заботимся о&nbsp;здоровье и&nbsp;красоте ваших зубов на&nbsp;каждом этапе.",
  text,
  imageFolder = "/image/hero",
  imageName = "hero",
  altText = "Современная стоматология Клиника +32",
  showButton = false,
  pageType = "home",
}: HeroProps) {
  const { openAppointment } = useModals();

  const mobSuffix = "-mob";
  const tabSuffix = "-tab";

  const modifierClass = pageType !== "home" ? styles[`hero--${pageType}`] : "";

  const imageSizes =
    pageType === "call"
      ? "(max-width: 767px) 515px, (max-width: 1199px) 768px, 100vw"
      : "(max-width: 767px) 100vw, (max-width: 1199px) 100vw, 100vw";

  return (
    <section className={`${styles.hero} ${modifierClass}`}>
      <div className="container">
        <picture className={styles.hero__picture}>
          {/* 1. Мобильные устройства (до 767px) */}
          <source
            media="(max-width: 767px)"
            srcSet={`${imageFolder}/${imageName}${mobSuffix}.webp 768w, ${imageFolder}/${imageName}${mobSuffix}@2x.webp 1536w`}
            sizes={imageSizes}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imageFolder}/${imageName}${mobSuffix}.jpg 768w, ${imageFolder}/${imageName}${mobSuffix}@2x.jpg 1536w`}
            sizes={imageSizes}
            type="image/jpeg"
          />

          {/* 2. Планшеты (до 1199px) */}
          <source
            media="(max-width: 1199px)"
            srcSet={`${imageFolder}/${imageName}${tabSuffix}.webp 1024w, ${imageFolder}/${imageName}${tabSuffix}@2x.webp 2048w`}
            sizes={imageSizes}
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet={`${imageFolder}/${imageName}${tabSuffix}.jpg 1024w, ${imageFolder}/${imageName}${tabSuffix}@2x.jpg 2048w`}
            sizes={imageSizes}
            type="image/jpeg"
          />

          {/* 3. Десктоп (от 1200px) */}
          <source
            media="(min-width: 1200px)"
            srcSet={`${imageFolder}/${imageName}.webp 1440w, ${imageFolder}/${imageName}@2x.webp 2880w`}
            sizes={imageSizes}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`${imageFolder}/${imageName}.jpg 1440w, ${imageFolder}/${imageName}@2x.jpg 2880w`}
            sizes={imageSizes}
            type="image/jpeg"
          />

          <img
            src={`${imageFolder}/${imageName}.jpg`}
            alt={altText.replace(/&nbsp;/g, " ")}
            className={`${styles.hero__img || ""} ${styles.hero__bg || ""}`}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
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
