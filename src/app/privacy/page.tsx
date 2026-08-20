import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Стоматология К+32",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ padding: "140px 0 80px", maxWidth: "800px", margin: "0 auto" }}>
      <div className="container" style={{ padding: "0 20px" }}>
        <h1 style={{ fontSize: "28px", color: "#005a70", marginBottom: "20px" }}>
          Политика конфиденциальности
        </h1>
        <div style={{ color: "#333", lineHeight: "1.6", fontSize: "16px" }}>
          <p>
            Настоящая Политика конфиденциальности регулирует порядок обработки и 
            использования персональных данных пользователей сайта стоматологической 
            клиники «К+32».
          </p>
        </div>
      </div>
    </main>
  );
}