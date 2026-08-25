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

    if (isAccepted) {
      if (!window.ym) {
        const ymWithQueue: YmFunction = (...args: unknown[]) => {
          ymWithQueue.a = ymWithQueue.a || [];
          ymWithQueue.a.push(args);
        };
        ymWithQueue.l = Date.now();
        window.ym = ymWithQueue;
      }

      const existingScript = document.querySelector('script[src*="tag.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://yandex.ru";
        document.head.appendChild(script);
      }

      if (window.ym) {
        window.ym(123456, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: false,
          defer: true,
        });
      }
    }
  } catch (e) {
    void e;
  }
};

export const activateAdvertising = () => {
  if (typeof window === "undefined") return;
  try {
    const isAccepted =
      localStorage.getItem("cookieAdvertisingAccepted") === "true";
    if (isAccepted) {
      // Будущий код рекламы
    }
  } catch (e) {
    void e;
  }
};

export const initAppConsent = () => {
  if (typeof window === "undefined") return;

  const startAnalyticsOnActivity = () => {
    activateAnalytics();
    activateAdvertising();

    window.removeEventListener("scroll", startAnalyticsOnActivity);
    window.removeEventListener("mousemove", startAnalyticsOnActivity);
    window.removeEventListener("touchstart", startAnalyticsOnActivity);
  };

  window.addEventListener("scroll", startAnalyticsOnActivity, {
    passive: true,
  });
  window.addEventListener("mousemove", startAnalyticsOnActivity, {
    passive: true,
  });
  window.addEventListener("touchstart", startAnalyticsOnActivity, {
    passive: true,
  });
};
