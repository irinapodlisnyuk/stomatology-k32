"use client";
import { useState } from "react";
import styles from "./CookieBanner.module.scss";
import Icon from "../models/Icon";


export default function CookieBanner() {
  // Сразу вычисляем, нужно ли показывать баннер, при создании состояния
  const isCookieAccepted = localStorage.getItem("cookieConsentAccepted");
  const [isVisible, setIsVisible] = useState(!isCookieAccepted);

  const [showSettings, setShowSettings] = useState(false);

  // Восстанавливаем настройки чекбоксов при монтировании
  const [analytics, setAnalytics] = useState<boolean>(() => {
    const val = localStorage.getItem("cookieAnalyticsAccepted");
    return val === "true";
  });

  const [advertising, setAdvertising] = useState<boolean>(() => {
    const val = localStorage.getItem("cookieAdvertisingAccepted");
    return val === "true";
  });

  // Состояние аккордеона
  const [expandedSection, setExpandedSection] = useState<"necessary" | "analytics" | "advertising" | null>(null);

  const toggleSection = (section: "necessary" | "analytics" | "advertising") => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("cookieConsentAccepted", "true");
      localStorage.setItem("cookieAnalyticsAccepted", "true");
      localStorage.setItem("cookieAdvertisingAccepted", "true");
    } catch (e) {
      console.warn("localStorage недоступен");
    }
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    try {
      localStorage.setItem("cookieConsentAccepted", "true");
      localStorage.setItem("cookieAnalyticsAccepted", analytics.toString());
      localStorage.setItem("cookieAdvertisingAccepted", advertising.toString());
    } catch (e) {
      console.warn("localStorage недоступен");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookie}>
      <div className={styles.cookie__container}>
        {!showSettings ? (
          <>
            <div className={styles.cookie__header}>
              <Icon className={styles["cookie__icon"]} name={"cookie"} />
              <h2 className={styles.cookie__title}>Мы&nbsp;используем файлы cookie</h2>
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
            <div className={styles.cookie__button}>
              <button className="btn btn--cookie" onClick={() => setShowSettings(true)}>
                Настройки
              </button>
              <button className="btn btn--cookie" onClick={handleAcceptAll}>
                Принять
              </button>
            </div>
          </>
        ) : (
          <div className={styles.cookie__settings}>
            <h2 className={styles.cookie__title}>Настройки файлов cookie</h2>
            <p className={styles.cookie__text}>
              <strong>О файлах cookie</strong>
              <br />
              Мы&nbsp;используем файлы cookie, чтобы предоставить вам доступ
              ко&nbsp;всем функциям веб-сайта, а&nbsp;также для анализа,
              персонализации и&nbsp;улучшения пользовательского опыта.
              В&nbsp;этом блоке вы&nbsp;можете изменить настройки файлов cookie
              или принять их&nbsp;все по&nbsp;умолчанию. Чтобы лучше понять, что
              такое файлы cookie и&nbsp;как они используются на&nbsp;нашем
              веб-сайте, прочитайте нашу политику конфиденциальности.{" "}
            </p>

            <div className={styles.cookie__options}>
              {/* Необходимые */}
              <label
                className={styles.cookie__checkboxLabel}
                onClick={() => toggleSection("necessary")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.cookie__top}>
                  <div className={styles.cookie__title}>
                    <Icon
                      className={styles["cookie__icon"]}
                      name={"arrow"}
                      style={{
                        transform: expandedSection === "necessary" ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    <span>Необходимые файлы cookie</span>
                  </div>
                  <input type="checkbox" checked disabled />
                </div>

                {expandedSection === "necessary" && (
                  <p className={styles["cookie__options-text"]}>
                    Целью этих файлов cookie является предоставление запрошенной
                    услуги, приложения или ресурса. Любой из&nbsp;ваших запросов
                    не&nbsp;может быть сделан должным образом без этих файлов
                    cookie. В&nbsp;целом, их&nbsp;цель состоит в&nbsp;том, чтобы
                    управлять действиями, которые вы&nbsp;выполняете на&nbsp;нашем
                    веб-сайте, например, они помогают вам получить визуальные
                    элементы, использовать ресурсы страниц, войти в&nbsp;свою
                    учетную запись. В&nbsp;дополнение к&nbsp;настройке основных
                    функций, с&nbsp;этими файлами cookie, мы&nbsp;можем обеспечить
                    безопасность и&nbsp;эффективность нашего веб-сайта.
                  </p>
                )}
              </label>

              {/* Аналитические */}
              <label
                className={styles.cookie__checkboxLabel}
                onClick={() => toggleSection("analytics")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.cookie__top}>
                  <div className={styles.cookie__title}>
                    <Icon
                      className={styles["cookie__icon"]}
                      name={"arrow"}
                      style={{
                        transform: expandedSection === "analytics" ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    <span>Аналитические файлы cookie</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                </div>

                {expandedSection === "analytics" && (
                  <p className={styles["cookie__options-text"]}>
                    Целью этих файлов cookie является предоставление количественных
                    данных о&nbsp;взаимодействии пользователей с&nbsp;нашим
                    веб-сайтом. Кроме того, эти файлы cookie собирают информацию,
                    которая используется для отслеживания производительности
                    веб-сайта. Обычно они не&nbsp;собирают конфиденциальную
                    информацию и&nbsp;предоставляют нам только общую статистику,
                    например, количество посетителей разных страниц, источников
                    трафика и&nbsp;коэффициента конверсии, чтобы помочь нам повысить
                    производительность веб-сайта. Отключив эти файлы cookie, мы
                    не&nbsp;сможем идентифицировать вас как посетителя.
                  </p>
                )}
              </label>

              {/* Рекламные */}
              <label
                className={styles.cookie__checkboxLabel}
                onClick={() => toggleSection("advertising")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.cookie__top}>
                  <div className={styles.cookie__title}>
                    <Icon
                      className={styles["cookie__icon"]}
                      name={"arrow"}
                      style={{
                        transform: expandedSection === "advertising" ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    <span>Рекламные файлы cookie</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={advertising}
                    onChange={(e) => setAdvertising(e.target.checked)}
                  />
                </div>

                {expandedSection === "advertising" && (
                  <p className={styles["cookie__options-text"]}>
                    Эти файлы cookie устанавливаются нашими рекламными партнёрами,
                    чтобы обеспечить поведенческую рекламу и&nbsp;аналитику
                    ремаркетинга. Они собирают информацию о&nbsp;просмотре для
                    создания профилей пользователей и&nbsp;запускают
                    персонализированную рекламу. Когда вы&nbsp;посещаете другие
                    веб-сайты, вы&nbsp;увидите индивидуальные объявления
                    на&nbsp;основе вашего профиля, созданного в&nbsp;соответствии
                    с&nbsp;вашими интересами и&nbsp;поведением.
                  </p>
                )}
              </label>
            </div>

            <div className={styles.cookie__button}>
              <button className="btn btn--cookie" onClick={handleSaveSettings}>
                Сохранить настройки
              </button>
              <button className="btn btn--cookie" onClick={handleAcceptAll}>
                Принять все
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
