"use client";

import { useModals } from "@/components/context/ModalContext";
import { ContactForm } from "@/components/Form/ContactForm";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./Feedback.module.scss";

export default function Feedback() {
  const { triggerSuccess } = useModals();

  const handleFormSuccess = () => {
    triggerSuccess(
      "Ваше сообщение успешно отправлено! Наши администраторы свяжутся с вами в ближайшее время."
    );
  };

  const handleFormError = () => {
    triggerSuccess(
      "Не удалось отправить сообщение. Пожалуйста, проверьте интернет-соединение или позвоните нам по телефону."
    );
  };

  return (
    <section className={styles.feedback}>
      <div className="container">
        <div className={styles.feedback__wrapper}>
          <div className={styles.feedback__inner}>
            <ResponsivePicture
              folder="/image/feedback"
              baseName="feedback"
              alt="Прием в Клинике +32"
              className={styles["feedback__picture-img"]}
              isHero={false}
              sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1023px) 600px, 500px"
            />
          </div>
          <div className={styles.feedback__header}>
            <h2 className={styles.feedback__title}>Форма обратной связи</h2>
            <p className={styles.feedback__subtitle}>
              Мы свяжемся с вами как можно скорее.
            </p>
            <ContactForm
              onSuccess={handleFormSuccess}
              onError={handleFormError}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
