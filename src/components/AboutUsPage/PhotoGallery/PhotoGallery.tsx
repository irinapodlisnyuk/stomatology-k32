"use client";

import { useEffect, useState } from "react";
import styles from "./PhotoGallery.module.scss";
import { Gallery_DATA } from "./PhotoGallery_data";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

export default function Photogallery() {
  const gallery = Gallery_DATA;
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.gallery__wrapper}>
          <div className={styles["gallery__wrapper-header"]}>
            <h2 className={styles.gallery__title}>
              Экскурсия по&nbsp;нашей клинике
            </h2>
            <p className={styles.gallery__subtitle}>
              Современные условия для исключительного ухода
            </p>
          </div>

          <div className={styles["gallery__slider-container"]}>
            <ul className={styles["gallery__list"]}>
              {gallery.map(({ id, imgName, altText }, index) => {
                const isCenter = index === activeIndex;

                let diff = index - activeIndex;
                const half = gallery.length / 2;
                if (diff <= -half) diff += gallery.length;
                if (diff > half) diff -= gallery.length;

                const isVisible = diff >= -1 && diff <= 1;

                return (
                  <li
                    key={id}
                    className={`${styles["gallery__item"]} ${
                      isCenter ? styles["gallery__item--center"] : ""
                    } ${isVisible ? styles["gallery__item--visible"] : ""}`}
                    onClick={() => !isCenter && setActiveIndex(index)}
                    style={{ 
                      "--offset": diff,
                      "--abs-offset": Math.abs(diff) 
                    } as React.CSSProperties}
                  >
                    <div className={styles["gallery__item-link"]}>
                      <ResponsivePicture
                        folder="/image/gallery"
                        baseName={imgName}
                        alt={altText}
                        className={styles["gallery__picture-img"]}
                        sizes="(max-width: 767px) 360px, (max-width: 1023px) 380px, 520px"
                        isHero={false} 
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}




