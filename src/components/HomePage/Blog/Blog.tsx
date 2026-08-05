"use client";

import { FC, useState } from "react";
import styles from "./Blog.module.scss";
import { BLOG_DATA } from "./Blog_data";
import Icon from "@/components/models/Icon";
import Link from "next/link";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

interface BlogProps {
  isFullPage?: boolean; // 💡 Флаг: true — для отдельной страницы, false — для главной (слайдер)
}

export const Blog: FC<BlogProps> = ({ isFullPage = false }) => {
  const blog = BLOG_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : blog.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < blog.length - 1 ? prev + 1 : 0));
  };

  return (
    // 💡 Меняем класс секции, добавляя модификатор для полноценной страницы блога
    <section
      className={`${styles.blog} ${isFullPage ? styles["blog--full-page"] : ""}`}
    >
      <div className="container">
        <div className={styles.blog__wrapper}>
          <div className={styles["blog__header"]}>
            {isFullPage ? (
              ""
            ) : (
              <>
                {" "}
                <h2 className={styles["blog__header-title"]}>Блог</h2>
                <p className={styles["blog__header-subtitle"]}>
                  Советы и Рекомендации
                </p>
              </>
            )}
          </div>

          {/* 💡 Меняем обертку: если это страница блога, убираем стили контейнера слайдера */}
          <div
            className={
              isFullPage
                ? styles["blog__grid-container"]
                : styles["blog__slider-container"]
            }
          >
            <ul
              className={`
              ${styles["blog__list"]} 
              ${isFullPage ? styles["blog__list--grid"] : ""}
            `}
            >
              {blog.map(
                ({ id, slug, name, title, imgName, altText }, index) => {
                  const isCenter = index === activeIndex;

                  // 💡 ВАЖНО: Если это страница блога, отключаем все JS-расчеты слайдера
                  let diff = index - activeIndex;
                  const half = blog.length / 2;
                  if (diff <= -half) diff += blog.length;
                  if (diff > half) diff -= blog.length;

                  const isVisible = diff >= -1 && diff <= 1;
                  const translateX = diff * 85;

                  // Стили применяем ТОЛЬКО если мы на главной (в режиме слайдера)
                  const inlineStyle = !isFullPage
                    ? ({
                        transform: isCenter
                          ? `translateX(${translateX}%) scale(1.05) translateY(-15px)`
                          : `translateX(${translateX}%) scale(0.85)`,
                        opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                        pointerEvents: isVisible ? "auto" : "none",
                      } as React.CSSProperties)
                    : undefined;

                  return (
                    <li
                      key={id}
                      style={inlineStyle}
                      className={`
                        ${styles["blog__item"]} 
                        ${!isFullPage && isCenter ? styles["blog__item--center"] : ""}
                        ${isFullPage ? styles["blog__item--card"] : ""}
                      `}
                      onClick={() =>
                        !isFullPage && !isCenter && setActiveIndex(index)
                      }
                    >
                      <Link
                        href={`/blog/${slug || id}`}
                        className={styles["blog__item-link"]}
                        onClick={(e) => {
                          if (!isFullPage && !isCenter) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <ResponsivePicture
                          folder="/image/blog"
                          baseName={imgName}
                          alt={altText}
                          className={styles["blog__picture-img"]}
                        />
                        <div
                          className={`
                        ${styles["blog__item-content"]}
                        ${isFullPage ? styles["blog__item-content--color"] : ""}
                      `}
                        >
                          {isFullPage ? (
                            ""
                          ) : (
                            <>
                              <span className={styles["blog__item-name"]}>
                                {name}
                              </span>
                            </>
                          )}

                          <h3
                            className={`
                        ${styles["blog__item-text"]}
                        ${isFullPage ? styles["blog__item-text--color"] : ""}
                      `}
                          >
                            {title}
                          </h3>

                          {/* 💡 Кнопка «Читать», которая появится только в полноценной ленте */}
                          {isFullPage && (
                            <span className="btn btn--blog">Читать далее</span>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                },
              )}
            </ul>

            {!isFullPage && (
              <div className={styles["blog__nav"]}>
                <button
                  className={`${styles["blog__btn"]} ${styles["blog__btn--prev"]}`}
                  onClick={handlePrev}
                  aria-label="Назад"
                >
                  <Icon className={styles["blog__btn-icon"]} name={"arrow"} />
                </button>
                <button
                  className={`${styles["blog__btn"]} ${styles["blog__btn--next"]}`}
                  onClick={handleNext}
                  aria-label="Вперед"
                >
                  <Icon
                    className={`${styles["blog__btn-icon"]} ${styles["blog__btn-icon--next"]}`}
                    name={"arrow"}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// "use client";

// import { useState } from "react";
// import styles from "./Blog.module.scss";
// import { BLOG_DATA } from "./Blog_data";
// import Icon from "@/components/models/Icon";
// import Link from "next/link";
// import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

// export default function Blog() {
//   const blog = BLOG_DATA;
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : blog.length - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev < blog.length - 1 ? prev + 1 : 0));
//   };

//   return (
//     <section className={styles.blog}>
//       <div className="container">
//         <div className={styles.blog__wrapper}>
//           <div className={styles["blog__header"]}>
//             <h2 className={styles["blog__header-title"]}>Блог</h2>
//             <p className={styles["blog__header-subtitle"]}>
//               Советы и Рекомендации
//             </p>
//           </div>

//           <div className={styles["blog__slider-container"]}>
//             <ul className={styles["blog__list"]}>
//               {blog.map(
//                 ({ id, slug, name, title, imgName, altText }, index) => {
//                   const isCenter = index === activeIndex;

//                   // Универсальное вычисление смещения для бесконечного цикла
//                   let diff = index - activeIndex;

//                   const half = blog.length / 2;
//                   if (diff <= -half) diff += blog.length;
//                   if (diff > half) diff -= blog.length;

//                   // Элемент видим только если это центр или его ближайшие соседи
//                   const isVisible = diff >= -1 && diff <= 1;

//                   // Множитель сдвига для абсолютного позиционирования карточек (в % от их ширины)
//                   const translateX = diff * 85;

//                   return (
//                     <li
//                       key={id}
//                       className={`${styles["blog__item"]} ${isCenter ? styles["blog__item--center"] : ""}`}
//                       onClick={() => !isCenter && setActiveIndex(index)}
//                       style={{
//                         // Сдвигаем карточки строго линейно по рельсам
//                         transform: isCenter
//                           ? `translateX(${translateX}%) scale(1.05) translateY(-15px)`
//                           : `translateX(${translateX}%) scale(0.85)`,
//                         opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
//                         pointerEvents: isVisible ? "auto" : "none",
//                       }}
//                     >
//                       <Link
//                         href={`/blog/${slug || id}`}
//                         className={styles["blog__item-link"]}
//                         onClick={(e) => {
//                           if (!isCenter) {
//                             e.preventDefault();
//                           }
//                         }}
//                       >
//                         <ResponsivePicture
//                           folder="/image/blog"
//                           baseName={imgName}
//                           alt={altText}
//                           className={styles["blog__picture-img"]}
//                         />
//                         <div className={styles["blog__item-content"]}>
//                           <span className={styles["blog__item-name"]}>
//                             {name}
//                           </span>
//                           <h3 className={styles["blog__item-text"]}>{title}</h3>
//                         </div>
//                       </Link>
//                     </li>
//                   );
//                 },
//               )}
//             </ul>

//             <div className={styles["blog__nav"]}>
//               <button
//                 className={`${styles["blog__btn"]} ${styles["blog__btn--prev"]}`}
//                 onClick={handlePrev}
//                 aria-label="Назад"
//               >
//                 <Icon className={styles["blog__btn-icon"]} name={"arrow"} />
//               </button>
//               <button
//                 className={`${styles["blog__btn"]} ${styles["blog__btn--next"]}`}
//                 onClick={handleNext}
//                 aria-label="Вперед"
//               >
//                 <Icon
//                   className={`${styles["blog__btn-icon"]} ${styles["blog__btn-icon--next"]}`}
//                   name={"arrow"}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
