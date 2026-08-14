"use client"; // Важно: строго клиентский компонент

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/components/context/ModalContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {

  const [queryClientInstance] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, 
            refetchOnWindowFocus: false, 
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClientInstance}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </QueryClientProvider>
  );
}