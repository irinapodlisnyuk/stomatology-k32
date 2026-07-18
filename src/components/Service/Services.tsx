import Link from "next/link";
import styles from "./Services.module.scss";
import { ServicesList } from "./list-service";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles["services__header"]}>
            <h2 className={styles["services__header-title"]}>
              Комплексные стоматологические услуги
            </h2>
            <p className={styles["services__subtitle"]}>
              Забота о&nbsp;каждом аспекте вашей улыбки.
            </p>
            <p className={styles.services__text}>
              Здоровье зубов определяет качество жизни, поэтому мы&nbsp;создали
              пространство, где лечение проходит абсолютно безболезненно
              и&nbsp;комфортно. Индивидуальный план лечения, современное
              оборудование премиум-класса и&nbsp;бережное отношение
              к&nbsp;каждому пациенту гарантируют идеальный результат, которым
              вы&nbsp;будете гордиться.
            </p>
          </div>

          <ServicesList/>

          {/* <ul className={styles["services__list"]}>
            <li className={styles["services__item"]}>
              <div className={styles["services__item-image"]}>
                <picture className={styles["services__picture"]}>
                  <source
                    srcSet="/image/services/сosmetic-dentistry.webp 1x, /image/services/сosmetic-dentistry@2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/image/services/сosmetic-dentistry.jpg 1x, /image/services/сosmetic-dentistry@2x.jpg 2x"
                    type="image/jpg"
                  />
                  <img
                    src="/image/services/сosmetic-dentistry.jpg"
                    alt="Услуги в К+32"
                    className={styles["services__picture-img"]}
                  />
                </picture>
                <span  className={styles["services__item-title"]}>
                    отбеливание
                </span>
              </div>
            </li>

                 <li className={styles["services__item"]}>
              <div className={styles["services__item-image"]}>
                <picture className={styles["services__picture"]}>
                  <source
                    srcSet="/image/services/preventive-care.webp 1x, /image/services/preventive-care@2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/image/services/preventive-care.jpg 1x, /image/services/preventive-care@2x.jpg 2x"
                    type="image/jpg"
                  />
                  <img
                    src="/image/services/preventive-care.jpg"
                    alt="Услуги в К+32"
                    className={styles["services__picture-img"]}
                  />
                </picture>
                <span  className={styles["services__item-title"]}>
                   терапия
                </span>
              </div>
            </li>

                 <li className={styles["services__item"]}>
              <div className={styles["services__item-image"]}>
                <picture className={styles["services__picture"]}>
                  <source
                    srcSet="/image/services/orthopedics.webp 1x, /image/services/orthopedics@2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/image/services/orthopedics.jpg 1x, /image/services/orthopedics@2x.jpg 2x"
                    type="image/jpg"
                  />
                  <img
                    src="/image/services/orthopedics.jpg"
                    alt="Услуги в К+32"
                    className={styles["services__picture-img"]}
                  />
                </picture>
                <span  className={styles["services__item-title"]}>
                    ортопедия
                </span>
              </div>
            </li>

                 <li className={styles["services__item"]}>
              <div className={styles["services__item-image"]}>
                <picture className={styles["services__picture"]}>
                  <source
                    srcSet="/image/services/implantation.webp 1x, /image/services/implantation@2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/image/services/implantation.jpg 1x, /image/services/implantation@2x.jpg 2x"
                    type="image/jpg"
                  />
                  <img
                    src="/image/services/implantation.jpg"
                    alt="Услуги в К+32"
                    className={styles["services__picture-img"]}
                  />
                </picture>
                <span  className={styles["services__item-title"]}>
                    имплантация
                </span>
              </div>
            </li>
          </ul> */}

          <div className={styles["services__actions"]}>
            <Link href="/services" className="btn btn--services">
              Изучите все услуги
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
