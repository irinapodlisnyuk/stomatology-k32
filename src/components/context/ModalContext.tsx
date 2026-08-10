"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";
import { ModalOpen } from "../ModalOpen/ModalOpen";

const AppointmentModal = dynamic(
  () => import("@/components/Modals/AppointmentModal"),
  { ssr: false },
);

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner/CookieBanner"),
  { ssr: false },
);

interface ModalContextType {
  isAppointmentOpen: boolean;
  openAppointment: () => void;
  closeAppointment: () => void;
  triggerSuccess: (text: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successText, setSuccessText] = useState("");

  const triggerSuccess = (text: string) => {
    setIsAppointmentOpen(false); // Закрываем форму ввода
    setSuccessText(text);
    setIsSuccessOpen(true); // Открываем окно успеха
  };

  const handleCloseAll = () => {
    setIsAppointmentOpen(false);
    setIsSuccessOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isAppointmentOpen,
        openAppointment,
        closeAppointment,
        triggerSuccess,
      }}
    >
      {children}
      {isAppointmentOpen && <AppointmentModal />}

      <ModalOpen
        isOpen={isSuccessOpen}
        onClose={handleCloseAll}
        text={successText}
      />

      <CookieBanner />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModals must be used within a ModalProvider");
  return context;
};

