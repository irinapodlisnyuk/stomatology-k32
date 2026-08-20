interface YmFunction {
  (...args: unknown[]): void;
  a?: unknown[][];
  l?: number;
}

declare global {
  interface Window {
    ym?: YmFunction;
  }
}

export const activateAnalytics = () => {
  if (typeof window === "undefined") return;

  try {
    const isAccepted =
      localStorage.getItem("cookieAnalyticsAccepted") === "true";

    // Активируем Метрику только если пользователь дал согласие
    if (isAccepted) {
      // Инициализируем функцию-очередь ym со строгими типами без использования any
      if (!window.ym) {
        const ymWithQueue: YmFunction = (...args: unknown[]) => {
          ymWithQueue.a = ymWithQueue.a || [];
          ymWithQueue.a.push(args);
        };
        // 🔥 ИСПРАВЛЕНО: Используем нативный метод Date.now(), который возвращает чистый тип number
        ymWithQueue.l = Date.now();
        window.ym = ymWithQueue;
      }

      // Проверяем, не добавлен ли скрипт уже ранее, чтобы не дублировать его в DOM
      const existingScript = document.querySelector('script[src*="tag.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://yandex.ru";

        // Вставляем тег в head, не блокируя прорисовку макета сайта
        document.head.appendChild(script);
      }

      // Безопасный вызов инициализации счетчика
      // ⚠️ Замените 123456 на реальный ID счетчика вашей стоматологии
      if (window.ym) {
        window.ym(123456, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
      }
    }
  } catch (e) {
    void e;
  }
};

/**
 * Функция для активации рекламных скриптов (VK Пиксель, MyTarget и т.д.)
 */
export const activateAdvertising = () => {
  if (typeof window === "undefined") return;

  try {
    const isAccepted =
      localStorage.getItem("cookieAdvertisingAccepted") === "true";

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

// export const activateAnalytics = () => {
//   if (typeof window === "undefined") return;

//   try {
//     const isAccepted = localStorage.getItem("cookieAnalyticsAccepted") === "true";

//     if (isAccepted) {
//       // ТУТ БУДЕТ КОД МЕТРИК В БУДУЩЕМ (БЕЗ ОПАСНЫХ CONSOLE.LOG):
//       // window.ym(123456, 'init', { ... });
//     }
//   } catch (e) {
//     // Безопасный отлов ошибок, который не уронит сайт
//     void e;
//   }
// };

// /**
//  * Функция для активации рекламных скриптов (VK Пиксель, MyTarget и т.д.)
//  */
// export const activateAdvertising = () => {
//   if (typeof window === "undefined") return;

//   try {
//     const isAccepted = localStorage.getItem("cookieAdvertisingAccepted") === "true";

//     if (isAccepted) {
//       // ТУТ БУДЕТ КОД РЕКЛАМНЫХ СКРИПТОВ В БУДУЩЕМ
//     }
//   } catch (e) {
//     void e;
//   }
// };

// /**
//  * Общая функция для запуска всех разрешенных систем при входе на сайт
//  */
// export const initAppConsent = () => {
//   activateAnalytics();
//   activateAdvertising();
// };
