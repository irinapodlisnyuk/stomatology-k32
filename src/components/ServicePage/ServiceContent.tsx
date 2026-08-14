"use client"; // Делаем его интерактивным, чтобы он без проблем работал с клиентской кнопкой AppointmentButton

import React from "react";
import Hero from "@/components/Hero/Hero";
import { AppointmentButton } from "@/components/Form/Button/AppointmentButton";
import styles from "./ServicePage.module.scss";

interface PriceItem {
  name: string;
  price: string;
}

interface ServiceContentProps {
  service: {
    title: string;
    imgName: string;
    altText: string;
    fullText?: string;
    slug?: string;
  };
  prices: PriceItem[];
}

export function ServiceContent({ service, prices }: ServiceContentProps) {
  return (
    <>
      <Hero
        title={service.title}
        subtitle="Стоматология экспертного уровня в Кабардинке"
        imageFolder="/image/services"
        imageName={service.imgName}
        altText={service.altText}
        pageType="services"
      />

      <div className="container">
        <div className={styles.serviceLayout}>
          
          <article className={styles.serviceContent}>
            <div 
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ 
                __html: service.fullText || "<p>Описание услуги временно наполняется...</p>" 
              }} 
            /> 
          </article>

    
          {prices.length > 0 && (
            <section className={styles.priceSection}>
              <h2 className={styles.priceTitle}>Стоимость услуги</h2>
              <div className={styles.priceTable}>
                {prices.map((item, idx) => (
                  <div key={idx} className={styles.priceRow}>
                    <span className={styles.priceName}>{item.name}</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.priceActions}>
                <AppointmentButton />
              </div>
            </section>
          )}
          
        </div>
      </div>
    </>
  );
}