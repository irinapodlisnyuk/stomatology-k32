"use client";

import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./List-service.module.scss";
import { SERVICES_DATA } from "@/data/Service_data";
import { FC } from "react";
import Link from "next/link";

interface ServicesListProps {
  isFullPage?: boolean;
}

export const ServicesList: FC<ServicesListProps> = ({ isFullPage = false }) => {

  const displayedServices = isFullPage ? SERVICES_DATA : SERVICES_DATA.slice(0, 4);

  return (
    <ul className={styles["services__list"]}>
      {displayedServices.map(({ id, slug, title, imgName, altText }, index) => {
        const CardContent = (
          <>
            <ResponsivePicture
              folder="/image/services"
              baseName={imgName}
              alt={altText}
              className={styles["services__picture-img"]}
              sizes={
                isFullPage
                  ? "(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) calc(100vw - 40px), 500px"
                  : "(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) calc(50vw - 30px), 285px"
              }
            />
            <span
              className={`${styles["services__item-text"]} ${isFullPage ? styles["services__item-text--color"] : ""}`}
            >
              {title}
            </span>
          </>
        );

        return (
          <li
            key={id}
            className={`${styles["services__item"]} ${isFullPage ? styles["services__item--static"] : ""}`}
            style={{ "--index": index } as React.CSSProperties}
          >
            {isFullPage ? (
              <Link
                href={`/service/${slug || id}`}
                className={styles["services__item-link"]}
              >
                {CardContent}
              </Link>
            ) : (
              <div className={styles["services__item-content"]}>
                {CardContent}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};