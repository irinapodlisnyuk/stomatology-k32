"use client";

import { useModals } from "@/components/context/ModalContext";
import { ContactForm } from "../Form/ContactForm/ContactForm";
import Icon from "@/components/Icon/Icon";
import { useEffect, useState } from "react";
import styles from "./AppointmentModal.module.scss"; 

export default function AppointmentModal() {

  const { isAppointmentOpen, triggerSuccess, closeAppointment } = useModals();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  
  useEffect(() => {
    if (isAppointmentOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAppointmentOpen]);

  const handleFormError = () => {
    setErrorMessage("Не удалось отправить заявку. Пожалуйста, проверьте интернет.");
  };

  const handleFormSuccess = () => {
    setErrorMessage(null);
    triggerSuccess("Ваше сообщение успешно отправлено! Администратор К+32 свяжется с вами.");
  };

if (!isAppointmentOpen) return null;

  return (
    <div className={styles.appointment} onClick={closeAppointment}>
      <div className={styles.appointment__modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles["appointment__modal-close"]}
          onClick={closeAppointment}
          aria-label="Закрыть окно"
        >
          <Icon name="close" className={styles["appointment__modal-icon"]} />
        </button>

        <div className={styles.appointment__header}>
          <h3 className={styles["appointment__header-title"]}>Запись на прием</h3>
          <p className={styles["appointment__header-subtitle"]}>
            Оставьте Ваши контактные данные. Наш администратор клиники К+32 свяжется с Вами.
          </p>
        </div>

        {errorMessage && (
          <div className={styles.appointment__error}>{errorMessage}</div>
        )}

        <ContactForm onError={handleFormError} onSuccess={handleFormSuccess} />
      </div>
    </div>
  );
}