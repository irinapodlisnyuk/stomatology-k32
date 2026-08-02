
import styles from "./Feedback.module.scss";
import { ContactForm } from "@/components/Form/ContactForm";


export default function Feedback() {
  return (
    <section className={styles["feedback"]}>
      <div className="container">
        <div className={styles["feedback__wrapper"]}>
           <div className={styles["feedback__inner"]}>
            
        
          </div>
          <div className={styles["feedback__header"]}>
            <h2 className={styles["feedback__title"]}>
             Форма обратной связи
            </h2>
            <p className={styles["feedback__subtitle"]}>
             Мы&nbsp;свяжемся с&nbsp;вами как можно скорее.
            </p>
            <p className={styles["feedback__text"]}>
         
            </p>
          
              <div className={styles["feedback__form"]}>
     
          <ContactForm />
    
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
