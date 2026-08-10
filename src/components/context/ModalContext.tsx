"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";


const AppointmentModal = dynamic(
  () => import("@/components/Modals/AppointmentModal"), 
  { ssr: false }
);

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner/CookieBanner"), 
  { ssr: false }
);

interface ModalContextType {
  isAppointmentOpen: boolean; 
  openAppointment: () => void;
  closeAppointment: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <ModalContext.Provider value={{ isAppointmentOpen, openAppointment, closeAppointment }}>
      {children}
      <AppointmentModal />
      
      <CookieBanner />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModals must be used within a ModalProvider");
  return context;
};


// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface ModalContextType {
//   isAppointmentOpen: boolean;
//   openAppointment: () => void;
//   closeAppointment: () => void;
// }

// const ModalContext = createContext<ModalContextType | undefined>(undefined);

// export function ModalProvider({ children }: { children: ReactNode }) {

//   const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

//   const openAppointment = () => setIsAppointmentOpen(true);
//   const closeAppointment = () => setIsAppointmentOpen(false);

//   return (
//     <ModalContext.Provider value={{ isAppointmentOpen, openAppointment, closeAppointment }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// export function useModals() {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error("useModals должен использоваться внутри ModalProvider");
//   }
//   return context;
// }
