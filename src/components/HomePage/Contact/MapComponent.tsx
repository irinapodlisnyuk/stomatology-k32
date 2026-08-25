import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";

export default function MapComponent() {
  const [isUserActive, setIsUserActive] = useState(false);

  useEffect(() => {
    if (isUserActive) return;

    const handleUserActivity = () => {
      setIsUserActive(true);
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
    };

    // Слушаем любые признаки присутствия реального человека на странице
    window.addEventListener("scroll", handleUserActivity, { passive: true });
    window.addEventListener("mousemove", handleUserActivity, { passive: true });
    window.addEventListener("touchstart", handleUserActivity, { passive: true });

    return () => removeListeners();
  }, [isUserActive]);

  return (
    <div
      className={styles["contact__container-map"]}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "200px",
      }}
    >
      {isUserActive? (
        <iframe
          className={styles["contact__container-map"]}
          src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.938656%2C44.650382&mode=usermaps&source=mapframe&um=constructor%3A17c5e99398aa80de68596ce5822d5849aa805038971cfac10d65aee07c8efb4f&utm_source=mapframe&z=18"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "200px" }}
          allowFullScreen
          loading="lazy"
          title="Стоматологическая клиника К+32 в Кабардинке на карте"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      ) : (
       
        <div
          style={{ position: "absolute", inset: 0, backgroundColor: "#eef2f5" }}
        />
      )}
    </div>
  );
}
