"use client";

import React from "react";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton";
import styles from "./ServiceContent.module.scss";
import ResponsivePicture from "../ResponsivePicture/ResponsivePicture";

interface PriceItem {
  name: string;
  price: string;
}

interface ServiceContentProps {
  service: {
    title: string;
    fullText?: string;
    imgName: string;
    altText: string;
  };
  prices: PriceItem[];
}

export function ServiceContent({ service, prices }: ServiceContentProps) {
  return (
    <div className={styles.service}>
      <div className="container">
        <div className={styles.service__wrapper}>
          <ResponsivePicture
            folder="/image/services"
            baseName={service.imgName}
            alt={service.altText}
            className={styles["service__picture-img"]}
            sizes="(max-width: 767px) 360px, (max-width: 1023px) 768px, 500px"
          />

          <article className={styles.service__content}>
            <div
              className={styles.service__info}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html:
                  service.fullText ||
                  "<p>Описание услуги временно наполняется...</p>",
              }}
            />
          </article>

          {prices.length > 0 && (
            <div className={styles.price__section}>
              <h2 className={styles.price__title}>Стоимость услуги</h2>
              <div className={styles.price__wrapper}>
                <table className={styles.price__table}>
   
                  <tbody className={styles["price__table-info"]}>
                    {prices.map((item, idx) => (
                      <tr
                        key={`${item.name}-${idx}`}
                        className={styles.price__row}
                      >
                        <td className={styles.price__name}>{item.name}</td>
                        <td className={styles.price__value}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.priceActions}>
                <AppointmentButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
