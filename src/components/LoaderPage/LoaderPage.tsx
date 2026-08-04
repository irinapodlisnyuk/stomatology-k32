"use client";
import { useEffect, useState } from "react";
import styles from "./LoaderPage.module.scss";

interface LoaderPageProps {
  local?: boolean;
}

export default function LoaderPage({ local = false }: LoaderPageProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!local) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    const handleLoad = () => {

      setTimeout(() => {
        setIsFadingOut(true);

        setTimeout(() => {
          setIsVisible(false);
          if (!local) {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
          }
        }, 600); 
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      if (!local) {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };
  }, [local]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        ${styles["loader-wrapper"]} 
        ${isFadingOut ? styles["loader-wrapper--hide"] : ""} 
        ${local ? styles["loader-wrapper--local"] : ""}
      `}
    >
      <div className={styles["loader-page"]}>
        {/* Передаем индекс каждому из 13 div-ов для построения идеального 3D-круга */}
        {[...Array(13)].map((_, i) => (
          <div key={i} style={{ "--i": i } as React.CSSProperties}></div>
        ))}
      </div>
    </div>
  );
}
