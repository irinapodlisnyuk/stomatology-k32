"use client";

import React from "react";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton";
import styles from "./ServiceContent.module.scss";

interface PriceItem {
  name: string;
  price: string;
}

interface ServiceContentProps {
  service: {
    title: string;
    fullText?: string;
  };
  prices: PriceItem[];
}

export function ServiceContent({ service, prices }: ServiceContentProps) {
  return (
    <div className={styles.service}>
      <div className="container">
        <div className={styles.service__wrapper}>
          
          <article className={styles.service__content}>
            <div
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
              <h2 className={styles.priceTitle}>Стоимость услуги</h2>
              <div className={styles.priceTable}>
                {prices.map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className={styles.priceRow}>
                    <span className={styles.priceName}>{item.name}</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                ))}
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