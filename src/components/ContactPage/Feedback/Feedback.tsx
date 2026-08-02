"use client";
import { useState } from "react";
import styles from "./Feedback.module.scss";
import { ContactForm } from "@/components/Form/ContactForm";
import { ModalOpen } from "@/components/ModalOpen/ModalOpen";

export default function Feedback() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [modalText, setModalText] = useState("");

  // Обработчик успешной отправки формы
  const handleFormSuccess = () => {
    setModalText(
      "Ваше сообщение успешно отправлено! Наши администраторы свяжутся с вами в ближайшее время.",
    );
    setIsSuccessModalOpen(true);
  };

  // Обработчик ошибки
  const handleFormError = () => {
    setModalText(
      "Не удалось отправить сообщение. Пожалуйста, проверьте интернет-соединение или позвоните нам по телефону.",
    );
    setIsSuccessModalOpen(true);
  };
  return (
    <section className={styles["feedback"]}>
      <div className="container">
        <div className={styles["feedback__wrapper"]}>
          <div className={styles["feedback__inner"]}>
            <picture className={styles.feedback__picture}>
              {/* 1. МОБИЛЬНЫЕ (до 768px включительно) */}
              <source
                media="(max-width: 768px)"
                srcSet="/image/feedback/feedback-mob.webp 1x, /image/feedback/feedback-mob@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/image/feedback/feedback-mob.jpg 1x, /image/feedback/feedback-mob@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 2. ПЛАНШЕТЫ (от 769px до 1024px включительно) */}
              <source
                media="(max-width: 1024px)"
                srcSet="/image/feedback/feedback-tab.webp 1x, /image/feedback/feedback-tab@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/image/feedback/feedback-tab.jpg 1x, /image/feedback/feedback-tab@2x.jpg 2x"
                type="image/jpg"
              />

              {/* 3. ДЕСКТОП (все, что больше 1024px) */}
              <source
                srcSet="/image/feedback/feedback.webp 1x, /image/feedback/feedback@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcSet="/image/feedback/feedback.jpg 1x, /image/feedback/feedback@2x.jpg 2x"
                type="image/jpg"
              />

              {/* Базовый тег (фоллбек) */}
              <img
                src="/image/feedback/feedback.jpg"
                alt="Прием в Клиника +32"
                className={styles["feedback__picture-img"]}
                loading="lazy"
              />
            </picture>
          </div>
          <div className={styles["feedback__header"]}>
            <h2 className={styles["feedback__title"]}>Форма обратной связи</h2>
            <p className={styles["feedback__subtitle"]}>
              Мы&nbsp;свяжемся с&nbsp;вами как можно скорее.
            </p>
            <ContactForm
              onSuccess={handleFormSuccess}
              onError={handleFormError}
            />
          </div>
        </div>
      </div>

      <ModalOpen
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        text={modalText}
      />
    </section>
  );
}
