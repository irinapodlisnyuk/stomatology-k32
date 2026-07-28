import { Metadata } from "next";
import styles from "./aboutUs.module.scss"; // Здесь будут уникальные стили страницы

export const metadata: Metadata = {
  title: "О клинике «Клиника +32» в Кабардинке | Наша история и стандарты",
  description:
    "Узнайте больше о стоматологии «Клиника +32». Наша миссия, передовое медицинское оборудование и стандарты безопасного лечения зубов в Геленджике.",
  keywords: ["о клинике +32", "стоматология кабардинка о нас", "лицензия стоматологии геленджик"],
};

export default function AboutUsPage() {
  return (
    <section className={styles.aboutPage}>
      <div className="container">
        
        <div className={styles.aboutPage__breadcrumbs}>
          <span>Главная</span> — <span>О клинике</span>
        </div>


        <h1 className={styles.aboutPage__title}>О нашей клинике</h1>
        
        <div className={styles.aboutPage__wrapper}>
    
          <p className={styles.aboutPage__text}>
            Добро пожаловать в «Клинику +32» — место, где современные технологии 
            встречаются с заботой и профессионализмом. Мы работаем, чтобы обеспечивать 
            экспертный уровень лечения зубов в уютной атмосфере курорта Кабардинка.
          </p>
        </div>

      </div>
    </section>
  );
}