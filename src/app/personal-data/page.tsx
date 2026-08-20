import React from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Политика обработки персональных данных | Стоматология К+32",
  robots: { index: true, follow: true },
};


export default function PersonalDataPage() {
  return (
    <main style={{ padding: "140px 0 80px", maxWidth: "800px", margin: "0 auto" }}>
      <div className="container" style={{ padding: "0 20px" }}>
        <h1 style={{ fontSize: "28px", color: "#005a70", marginBottom: "20px" }}>
          Политика в отношении обработки персональных данных
        </h1>
        <div style={{ color: "#333", lineHeight: "1.6", fontSize: "16px" }}>
          <p>
            Настоящая Политика определяет порядок сбора, систематизации, накопления, 
            хранения, уточнения и уничтожения персональных данных пациентов в ООО 
            Стоматологическая клиника «К+32» в соответствии с ФЗ-152 «О персональных данных».
          </p>
          <p style={{ marginTop: "15px" }}>
            Клиника обеспечивает конфиденциальность полученных персональных данных и 
            использует их исключительно для оказания медицинских услуг и связи с пациентами.
          </p>
        </div>
      </div>
    </main>
  );
}