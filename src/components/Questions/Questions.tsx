"use client"
import { useState } from "react";
import styles from "./Questions.module.scss";
import { QUESTIONS_DATA } from "./questions_data";

export default function Questions() {

 const [activeId, setActiveId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.questions__wrapper}>
          <h2 className={styles["questions__title"]}>
            Часто задаваемые вопросы
          </h2>

          <ul className={styles.questions__list}>
            {QUESTIONS_DATA.map(({ id, title, text }, index) => {
              const isOpen = activeId === id;

              return (
                <li
                  key={id}
                  className={`${styles["questions__item"]} ${isOpen ? styles["questions__item--open"] : ""}`}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  <button 
                    className={styles["questions__item-header"]} 
                    onClick={() => toggleQuestion(id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles["questions__item-title"]}>{title}</span>
                    <span className={styles["questions__item-icon"]}></span>
                  </button>
                  
                  <div className={styles["questions__item-body"]}>
                    <div className={styles["questions__item-content"]}>
                      {text.map((paragraph, pIdx) => (
                        <p key={pIdx} className={styles["questions__item-text"]}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}