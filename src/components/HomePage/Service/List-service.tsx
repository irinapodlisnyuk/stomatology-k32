"use client";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./List-service.module.scss";
import {  SERVICES_DATA } from "@/data/Services_data";
import { FC, CSSProperties, useMemo } from "react";
import Link from "next/link";
import { getRandomItems } from "@/utils/shuffle";

interface ServicesListProps {
  isFullPage?: boolean;
}

export const ServicesList: FC<ServicesListProps> = ({ isFullPage = false }) => {
  const currentServices = useMemo(() => {
    return isFullPage
      ? SERVICES_DATA
      : getRandomItems(SERVICES_DATA);
  }, [isFullPage]);

  return (
    <ul className={styles["services__list"]}>
      {currentServices.map(({ id, slug, title, imgName, altText }, index) => {
        const cardContent = (
          <>
            <ResponsivePicture
              folder="/image/services"
              baseName={imgName}
              alt={altText}
              className={styles["services__picture-img"]}
              sizes={
                isFullPage
                  ? "(max-width: 767px) 360px, (max-width: 1023px) 768px, 500px"
                  : "(max-width: 767px) 360px, (max-width: 1023px) 500px, 285px"
              }
            />
            <span
              className={`${styles["services__item-text"]} ${
                isFullPage ? styles["services__item-text--color"] : ""
              }`}
            >
              {title}
            </span>
          </>
        );

        const itemStyles: CSSProperties = {
          "--service-index": index,
        } as CSSProperties;

        return (
          <li
            key={id}
            className={`${styles["services__item"]} ${
              isFullPage ? styles["services__item--static"] : ""
            }`}
            style={itemStyles}
          >
            <Link
              href={`/services/${slug || id}`}
              className={styles["services__item-link"]}
            >
              {cardContent}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
