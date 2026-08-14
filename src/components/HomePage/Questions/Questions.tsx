"use client";

import { useMemo, useState } from "react";
import styles from "./Questions.module.scss";
import { QUESTIONS_DATA, QuestionsItem } from "@/data/Questions_data";
import Icon from "@/components/Icon/Icon";

const getStableShuffledQuestions = (array: QuestionsItem[]): QuestionsItem[] => {
  if (array.length <= 4) return array;
  const shuffled = [...array];
  const step = 3;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (i * step) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Questions() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const shuffledQuestions = useMemo(() => {
    return getStableShuffledQuestions(QUESTIONS_DATA).slice(0, 4);
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

  const renderQuestionItem = (question: QuestionsItem, index: number) => {
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

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.questions__wrapper}>
          <h2 className={styles["questions__wrapper-title"]}>
            Часто задаваемые вопросы
          </h2>
          <div className={styles.questions__container}>
            <ul className={styles.questions__column}>
              {leftColumnQuestions.map((q, idx) => renderQuestionItem(q, idx))}
            </ul>
            <ul className={styles.questions__column}>
              {rightColumnQuestions.map((q, idx) => renderQuestionItem(q, idx))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useMemo, useState } from "react";
// import styles from "./Questions.module.scss";
// import { QUESTIONS_DATA, QuestionsItem } from "@/data/Questions_data";
// import Icon from "@/components/Icon/Icon";

// const getStableShuffledQuestions = (array: QuestionsItem[]): QuestionsItem[] => {
//   if (array.length <= 4) return array;
//   const shuffled = [...array];
//   const step = 3;
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = (i * step) % (i + 1);
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const renderQuestionItem = (
//   question: QuestionsItem,
//   index: number,
//   activeId: string | null,
//   toggleQuestion: (id: string) => void,
// ) => {
//   const isOpen = activeId === question.id;
//   return (
//     /* ⚡ Возвращаем класс на родительский li */
//     <li
//       key={question.id}
//       className={`${styles["questions__item"]} ${isOpen ? styles["questions__item--open"] : ""}`}
//       style={{ "--index": index } as React.CSSProperties}
//     >
//       <button
//         className={styles["questions__item-header"]}
//         onClick={() => toggleQuestion(question.id)}
//         aria-expanded={isOpen}
//       >
//         <Icon className={styles["questions__item-icon"]} name={"open-icon"} />
//         <span className={styles["questions__item-title"]}>
//           {question.title}
//         </span>
//       </button>

//       <div className={styles["questions__item-body"]}>
//         <div className={styles["questions__item-content"]}>
//           {question.text.map((paragraph, pIdx) => (
//             <p key={pIdx} className={styles["questions__item-text"]}>
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </div>
//     </li>
//   );
// };

// export default function Questions() {
//   const [activeId, setActiveId] = useState<string | null>(null);

//   const shuffledQuestions = useMemo(() => {
//     return getStableShuffledQuestions(QUESTIONS_DATA).slice(0, 4);
//   }, []);

//   const leftColumnQuestions = useMemo(() => {
//     return shuffledQuestions.filter((_, index) => index % 2 === 0);
//   }, [shuffledQuestions]);

//   const rightColumnQuestions = useMemo(() => {
//     return shuffledQuestions.filter((_, index) => index % 2 !== 0);
//   }, [shuffledQuestions]);

//   const toggleQuestion = (id: string) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <section className={styles.questions}>
//       <div className="container">
//         <div className={styles.questions__wrapper}>
//           <h2 className={styles["questions__wrapper-title"]}>
//             Часто задаваемые вопросы
//           </h2>
//           <div className={styles.questions__container}>
//             <ul className={styles.questions__column}>
//               {leftColumnQuestions.map((q, idx) =>
//                 renderQuestionItem(q, idx, activeId, toggleQuestion),
//               )}
//             </ul>
//             <ul className={styles.questions__column}>
//               {rightColumnQuestions.map((q, idx) =>
//                 renderQuestionItem(q, idx, activeId, toggleQuestion),
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }