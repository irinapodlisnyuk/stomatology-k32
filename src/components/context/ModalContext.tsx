"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isAppointmentOpen: boolean;
  openAppointment: () => void;
  closeAppointment: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <ModalContext.Provider value={{ isAppointmentOpen, openAppointment, closeAppointment }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals должен использоваться внутри ModalProvider");
  }
  return context;
}