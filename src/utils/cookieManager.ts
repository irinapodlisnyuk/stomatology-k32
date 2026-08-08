// src/utils/cookieConsent.ts

/**
 * Функция для активации аналитических систем (Яндекс.Метрика, Google Analytics и т.д.)
 */
export const activateAnalytics = () => {
  if (typeof window === "undefined") return;

  const isAccepted = localStorage.getItem("cookieAnalyticsAccepted") === "true";

  if (isAccepted) {
    console.log("--- [Cookie Consent] АКТИВАЦИЯ АНАЛИТИКИ ---");
    // ТУТ БУДЕТ КОД МЕТРИК В БУДУЩЕМ:
    // window.ym(123456, 'init', { ... });
    // window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  } else {
    console.log("--- [Cookie Consent] Аналитика отключена пользователем ---");
  }
};

/**
 * Функция для активации рекламных скриптов (VK Пиксель, MyTarget и т.д.)
 */
export const activateAdvertising = () => {
  if (typeof window === "undefined") return;

  const isAccepted = localStorage.getItem("cookieAdvertisingAccepted") === "true";

  if (isAccepted) {
    console.log("--- [Cookie Consent] АКТИВАЦИЯ РЕКЛАМНЫХ ПИКСЕЛЕЙ ---");
    // ТУТ БУДЕТ КОД РЕКЛАМНЫХ СКРИПТОВ В БУДУЩЕМ
  } else {
    console.log("--- [Cookie Consent] Рекламные куки отключены пользователем ---");
  }
};

/**
 * Общая функция для запуска всех разрешенных систем при входе на сайт
 */
export const initAppConsent = () => {
  activateAnalytics();
  activateAdvertising();
};