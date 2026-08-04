"use client";

import { useModals } from "@/components/context/ModalContext";
import { ContactForm } from "../Form/ContactForm/ContactForm";
import Icon from "@/models/Icon";
import styles from "./AppointmentModal.module.scss";
import { useEffect, useState } from "react";
import { ModalOpen } from "../ModalOpen/ModalOpen";

export default function AppointmentModal() {
  const { isAppointmentOpen, closeAppointment } = useModals();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");


  const handleCloseAll = () => {
    setErrorMessage(null);
    setIsSuccessModalOpen(false);
    closeAppointment();
  };

  useEffect(() => {
    if (isAppointmentOpen || isSuccessModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAppointmentOpen, isSuccessModalOpen]);

  if (!isAppointmentOpen && !isSuccessModalOpen) return null;

  const handleFormError = () => {
    setErrorMessage("Не удалось отправить заявку. Пожалуйста, проверьте интернет.");
  };

  const handleFormSuccess = () => {
    setErrorMessage(null);
    setModalText("Ваше сообщение успешно отправлено! Администратор К+32 свяжется с вами.");
    setIsSuccessModalOpen(true); 
    closeAppointment(); 
  };

  return (
    <>
      {isAppointmentOpen && (
        <div className={styles.appointment} onClick={handleCloseAll}>
          <div className={styles.appointment__modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles["appointment__modal-close"]}
              onClick={handleCloseAll}
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
      )}

      <ModalOpen
        isOpen={isSuccessModalOpen}
        onClose={handleCloseAll}
        text={modalText}
      />
    </>
  );
}