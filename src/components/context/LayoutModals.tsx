"use client";

import dynamic from "next/dynamic";
import { useModals } from "@/components/context/ModalContext";

const AppointmentModal = dynamic(
  () => import("@/components/Modals/AppointmentModal"),
  { ssr: false },
);

const ModalOpen = dynamic(
  () => import("../ModalOpen/ModalOpen").then((mod) => mod.ModalOpen),
  { ssr: false },
);

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner/CookieBanner"),
  { ssr: false },
);

export function LayoutModals() {
  const context = useModals();

 if (!context) return null;

  const { isAppointmentOpen, isSuccessOpen, successText, closeSuccess } = context;

  return (
    <>
      {isAppointmentOpen && <AppointmentModal />}
      {isSuccessOpen && (
        <ModalOpen isOpen={isSuccessOpen} onClose={closeSuccess} text={successText} />
      )}
      <CookieBanner />
    </>
  );
}