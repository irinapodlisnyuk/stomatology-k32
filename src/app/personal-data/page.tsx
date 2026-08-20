import React from "react";
import { Metadata } from "next";
import PersonalPage from "@/components/PersonalPage/PersonalPage";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных | Стоматология К+32",
  robots: { index: true, follow: true },
};

export default function PersonalRoute() {
  return <PersonalPage />;
}
