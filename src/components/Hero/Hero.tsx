"use client";
import styles from "./hero.module.scss";
import { useModals } from "@/components/context/ModalContext";
import Image from "next/image";

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

  const modifierClass = pageType !== "home" ? styles[`hero--${pageType}`] : "";

  return (
    <section className={`${styles.hero} ${modifierClass}`}>
      <div className="container">
        {/* ИДЕАЛЬНОЕ РЕШЕНИЕ ДЛЯ LCP И NEXT.JS 16 */}
        <div className={styles.hero__picture}>
          <Image
            src={`${imageFolder}/${imageName}.webp`}
            alt={altText.replace(/&nbsp;/g, " ")}
            className={`${styles.hero__img || ""} ${styles.hero__bg || ""}`}
            fill 
            style={{ objectFit: "cover" }}
          
            priority={true}
            loading="eager" 
          />
        </div>

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
