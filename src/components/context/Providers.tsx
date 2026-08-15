"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider, useModals } from "@/components/context/ModalContext";
import dynamic from "next/dynamic";


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

interface ProvidersProps {
  children: ReactNode;
}

function ProvidersContent({ children }: { children: ReactNode }) {
  const { isAppointmentOpen, isSuccessOpen, successText, closeSuccess } =
    useModals();

  return (
    <>
      {children}

      {isAppointmentOpen && <AppointmentModal />}

      {isSuccessOpen && (
        <ModalOpen
          isOpen={isSuccessOpen}
          onClose={closeSuccess}
          text={successText}
        />
      )}
      <CookieBanner />
    </>
  );
}


let browserQueryClient: QueryClient | undefined = undefined;

// 2. Функция-генератор стабильного клиента
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,       
        refetchOnWindowFocus: false, 
      },
    },
  });
}

// 3. Паттерн синглтон: разделяем серверный и клиентский контекст
function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
  
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ProvidersContent>{children}</ProvidersContent>
      </ModalProvider>
    </QueryClientProvider>
  );
}