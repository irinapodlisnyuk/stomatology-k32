import React from "react";
import { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage/PolicyPage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Стоматология К+32",
  robots: { index: true, follow: true },
};

export default function PolicyRoute() {
  return <PolicyPage />;
}
