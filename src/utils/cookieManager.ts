export const activateAnalytics = () => {
  if (typeof window === "undefined") return;

  try {
    const isAccepted = localStorage.getItem("cookieAnalyticsAccepted") === "true";

    if (isAccepted) {
      // ТУТ БУДЕТ КОД МЕТРИК В БУДУЩЕМ (БЕЗ ОПАСНЫХ CONSOLE.LOG):
      // window.ym(123456, 'init', { ... });
    }
  } catch (e) {
    // Безопасный отлов ошибок, который не уронит сайт
    void e; 
  }
};

/**
 * Функция для активации рекламных скриптов (VK Пиксель, MyTarget и т.д.)
 */
export const activateAdvertising = () => {
  if (typeof window === "undefined") return;

  try {
    const isAccepted = localStorage.getItem("cookieAdvertisingAccepted") === "true";

    if (isAccepted) {
      // ТУТ БУДЕТ КОД РЕКЛАМНЫХ СКРИПТОВ В БУДУЩЕМ
    }
  } catch (e) {
    void e;
  }
};

/**
 * Общая функция для запуска всех разрешенных систем при входе на сайт
 */
export const initAppConsent = () => {
  activateAnalytics();
  activateAdvertising();
};