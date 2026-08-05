"use client";
import { useMemo, useState, useSyncExternalStore } from "react";
import styles from "./Questions.module.scss";
import { QUESTIONS_DATA, QuestionsItem } from "@/data/Questions_data";
import Icon from "@/components/models/Icon";
import LoaderPage from "../../LoaderPage/LoaderPage";

const shuffleArray = (array: QuestionsItem[]): QuestionsItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

// Функция-хелпер для рендеринга карточки
const renderQuestionItem = (
  question: QuestionsItem,
  index: number,
  activeId: string | null,
  toggleQuestion: (id: string) => void,
) => {
  const isOpen = activeId === question.id;
  return (
    <li
      key={question.id}
      className={`${styles["questions__item"]} ${isOpen ? styles["questions__item--open"] : ""}`}
      style={{ "--index": index } as React.CSSProperties}
    >
      <button
        className={styles["questions__item-header"]}
        onClick={() => toggleQuestion(question.id)}
        aria-expanded={isOpen}
      >
        <Icon className={styles["questions__item-icon"]} name={"open-icon"} />
        <span className={styles["questions__item-title"]}>
          {question.title}
        </span>
        
      </button>

      <div className={styles["questions__item-body"]}>
        <div className={styles["questions__item-content"]}>
          {question.text.map((paragraph, pIdx) => (
            <p key={pIdx} className={styles["questions__item-text"]}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default function Questions() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const shuffledQuestions = useMemo(() => {
    return shuffleArray(QUESTIONS_DATA).slice(0, 4);
  }, []);

  const leftColumnQuestions = useMemo(() => {
    return shuffledQuestions.filter((_, index) => index % 2 === 0);
  }, [shuffledQuestions]);

  const rightColumnQuestions = useMemo(() => {
    return shuffledQuestions.filter((_, index) => index % 2 !== 0);
  }, [shuffledQuestions]);

  const toggleQuestion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  if (!isMounted) {
    return (
      <section className={styles.questions}>
        <div className="container">
          <div className={styles.questions__wrapper}>
            <h2 className={styles["questions__wrapper-title"]}>
              Часто задаваемые вопросы
            </h2>
            <LoaderPage local={true} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.questions__wrapper}>
          <h2 className={styles["questions__wrapper-title"]}>
            Часто задаваемые вопросы
          </h2>
          <div className={styles.questions__container}>
            <ul className={styles.questions__column}>
              {leftColumnQuestions.map((q, idx) =>
                renderQuestionItem(q, idx, activeId, toggleQuestion),
              )}
            </ul>
            <ul className={styles.questions__column}>
              {rightColumnQuestions.map((q, idx) =>
                renderQuestionItem(q, idx, activeId, toggleQuestion),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
