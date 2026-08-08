"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./CookieBanner.module.scss";
import Icon from "../models/Icon";
import CookieOption from "./CookieOption";

export default function CookieBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Инициализация состояний (безопасная для SSR)
  const [analytics, setAnalytics] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookieAnalyticsAccepted") === "true";
  });
  const [advertising, setAdvertising] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookieAdvertisingAccepted") === "true";
  });

  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookieConsentAccepted");
  });

  const [showSettings, setShowSettings] = useState(false);
  const [expandedSection, setExpandedSection] = useState<
    "necessary" | "analytics" | "advertising" | null
  >(null);

  const toggleSection = (
    section: "necessary" | "analytics" | "advertising",
  ) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // Клик вне баннера закрывает только панель настроек (чтобы не прятать сам баннер)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bannerRef.current &&
        !bannerRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
        setExpandedSection(null);
      }
    };
    if (isVisible && isMounted) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, isMounted]);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("cookieConsentAccepted", "true");
      localStorage.setItem("cookieAnalyticsAccepted", "true");
      localStorage.setItem("cookieAdvertisingAccepted", "true");
      setAnalytics(true);
      setAdvertising(true);
    } catch {
      console.warn("localStorage недоступен");
    }
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    try {
      localStorage.setItem("cookieConsentAccepted", "true");
      localStorage.setItem("cookieAnalyticsAccepted", analytics.toString());
      localStorage.setItem("cookieAdvertisingAccepted", advertising.toString());
    } catch {
      console.warn("localStorage недоступен");
    }
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <div
      className={`${styles.cookie} ${showSettings ? styles["cookie--settings-open"] : ""}`}
      ref={bannerRef}
    >
      {!showSettings ? (
        /* Главное окно (Темное по умолчанию) */
        <div className={styles.cookie__container}>
          <div className={styles.cookie__wrapper}>
            <div className={styles.cookie__header}>
              <Icon className={styles["cookie__header-icon"]} name={"cookie"} />
              <h2 className={styles["cookie__header-title"]}>
                Мы&nbsp;используем файлы cookie
              </h2>
            </div>
            <p className={styles.cookie__text}>
              Мы&nbsp;активируем все файлы cookie по&nbsp;умолчанию, чтобы
              обеспечить правильное функционирование нашего веб-сайта, рекламы
              и&nbsp;аналитики в&nbsp;соответствии с&nbsp;
              <a href="/privacy-policy" className={styles.cookie__link}>
                Политикой конфиденциальности
              </a>
              .
            </p>
          </div>
          <div className={styles.cookie__button}>
            <button
              className="btn btn--cookie-param"
              onClick={() => setShowSettings(true)}
            >
              Настройки
            </button>
            <button className="btn btn--cookie" onClick={handleAcceptAll}>
              Принять
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.cookie__settings}>
          <h2 className={styles["cookie__settings-title"]}>
            Настройки файлов cookie
          </h2>
          <p className={styles["cookie__settings-text"]}>
            <strong>О файлах cookie</strong>
            <br />
            Мы&nbsp;используем файлы cookie, чтобы предоставить вам доступ
            ко&nbsp;всем функциям веб-сайта, а&nbsp;также для анализа,
            персонализации и&nbsp;улучшения пользовательского опыта. В&nbsp;этом
            блоке вы&nbsp;можете изменить настройки файлов cookie или принять
            их&nbsp;все по&nbsp;умолчанию. Чтобы лучше понять, что такое файлы
            cookie и&nbsp;как они используются на&nbsp;нашем веб-сайте,
            прочитайте нашу политику конфиденциальности.
          </p>

          <div className={styles.cookie__options}>
            <CookieOption
              id="necessary"
              title="Необходимые файлы cookie"
              description="Целью этих файлов cookie является предоставление запрошенной услуги, приложения или ресурса. Любой из&nbsp;ваших запросов не&nbsp;может быть сделан должным образом без этих файлов cookie. В&nbsp;целом, их&nbsp;цель состоит в&nbsp;том, чтобы управлять действиями, которые вы&nbsp;выполняете на&nbsp;нашем веб -сайте, например, они помогают вам получить визуальные элементы, использовать ресурсы страниц. В&nbsp;дополнение к&nbsp;настройке основных функций, с&nbsp;этими файлами cookie, мы&nbsp;можем обеспечить безопасность и&nbsp;эффективность нашего веб -сайта."
              checked={true}
              disabled={true}
              isExpanded={expandedSection === "necessary"}
              onToggle={() => toggleSection("necessary")}
            />

            {/* 2. Аналитические файлы cookie */}
            <CookieOption
              id="analytics"
              title="Аналитические файлы cookie"
              description="Целью этих файлов cookie является предоставление количественных данных о&nbsp;взаимодействии пользователей с&nbsp;нашим веб -сайтом. Кроме того, эти файлы cookie собирают информацию, которая используется для отслеживания производительности веб -сайта. Обычно они не&nbsp;собирают конфиденциальную информацию и&nbsp;предоставляют нам только общую статистику, например, количество посетителей разных страниц, источников трафика и&nbsp;коэффициента конверсии, чтобы помочь нам повысить производительность веб -сайта. Отключив эти файлы cookie, мы&nbsp;не&nbsp;сможем идентифицировать вас как посетителя."
              checked={analytics}
              onChange={setAnalytics}
              isExpanded={expandedSection === "analytics"}
              onToggle={() => toggleSection("analytics")}
            />

            {/* 3. Рекламные файлы cookie */}
            <CookieOption
              id="advertising"
              title="Рекламные файлы cookie"
              description="Эти файлы cookie устанавливаются нашими рекламными партнерами, чтобы обеспечить поведенческую рекламу и&nbsp;аналитику ремаркетинга. Они собирают информацию о&nbsp;просмотре для создания профилей пользователей и&nbsp;запускают персонализированную рекламу. Когда вы&nbsp;посещаете другие веб -сайты, вы&nbsp;увидите индивидуальные объявления на&nbsp;основе вашего профиля, созданного в&nbsp;соответствии с&nbsp;вашими интересами и&nbsp;поведением."
              checked={advertising}
              onChange={setAdvertising}
              isExpanded={expandedSection === "advertising"}
              onToggle={() => toggleSection("advertising")}
            />
          </div>
          <div className={styles["cookie__options-button"]}>
            <button
              className="btn btn--cookie-save"
              onClick={handleSaveSettings}
            >
              Сохранить настройки
            </button>
            <button className="btn btn--options" onClick={handleAcceptAll}>
              <Icon
                className={styles["cookie__options-icon"]}
                name={"icon-check"}
              />
              Принять все
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
