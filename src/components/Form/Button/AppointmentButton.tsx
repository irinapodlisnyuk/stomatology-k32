"use client"; 

import { useModals } from "@/components/context/ModalContext";

export function AppointmentButton() {
  const { openAppointment } = useModals();

  return (
    <button 
      className="btn btn--appointment" 
      style={{ marginTop: "30px" }}
      onClick={openAppointment} 
    >
      Записаться на консультацию
    </button>
  );
}
