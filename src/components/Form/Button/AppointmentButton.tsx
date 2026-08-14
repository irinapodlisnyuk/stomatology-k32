"use client"; 

import { useModals } from "@/components/context/ModalContext";

 export interface AppointmentButtonProps {
  className?: string; 
}

export function AppointmentButton({ className = "btn btn--appointment" }: AppointmentButtonProps) {
  const { openAppointment } = useModals();

  return (
    <button 
      className={className} 
      style={{ marginTop: "30px" }}
      onClick={openAppointment} 
    >
      Записаться на консультацию
    </button>
  );
}
