import React from "react";
import styles from "./Contact.module.scss";

export default function MapComponent() {
  return (
    <iframe
      className={styles["contact__container-map"]}
      src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.938656%2C44.650382&mode=usermaps&source=mapframe&um=constructor%3A17c5e99398aa80de68596ce5822d5849aa805038971cfac10d65aee07c8efb4f&utm_source=mapframe&z=18"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      title="Стоматологическая клиника К+32 в Кабардинке на карте"
     referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
