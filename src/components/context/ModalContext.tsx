"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isAppointmentOpen: boolean;
  openAppointment: () => void;
  closeAppointment: () => void;
  isSuccessOpen: boolean;
  successText: string;
  triggerSuccess: (text: string) => void;
  closeSuccess: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successText, setSuccessText] = useState("");

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  const triggerSuccess = (text: string) => {
    setSuccessText(text);
    setIsSuccessOpen(true);
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isAppointmentOpen,
        openAppointment,
        closeAppointment,
        isSuccessOpen,
        successText,
        triggerSuccess,
        closeSuccess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModals must be used within a ModalProvider");
  return context;
};
