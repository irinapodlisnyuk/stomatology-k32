import { HeroPersonal } from "./HeroPersonal";
import styles from "./PersonalPage.module.scss";

export default function PersonalPage() {
  return (
    <>
      <HeroPersonal
        title={"Политика в отношении обработки персональных данных"}
      />
      <section className={styles.personal}>
        <div className="container">
          <div className={styles["personal__wrapper"]}>
            <div className={styles["personal__paragraphs"]}>
              <p className={styles["personal__text"]}>
                Настоящая Политика определяет порядок обработки персональных
                данных на сайте
                <strong> https://k32clinic.ru</strong> Оператором — ООО «К+32»
                (ОГРН 1192375034697, ИНН 2304075001, адрес: 353480, г.
                Геленджик, с. Кабардинка, ул. Мира, д. 15, офис 22-23).
              </p>
              <p className={styles["personal__text"]}>
                Оставляя данные на Сайте или отправляя их на email{" "}
                <strong>clinic.k32@gmail.com</strong>, вы полностью соглашаетесь
                с условиями настоящей Политики.
              </p>
            </div>

            <div className={styles["personal__protect"]}>
              <h2 className={styles["personal__protect-title"]}>
                1. Что и для чего мы собираем
              </h2>
              <p className={styles["personal__text"]}>
                Мы обрабатываем только те данные, которые вы вводите в формы
                записи самостоятельно:
              </p>
              <ul className={styles["personal__protect-list"]}>
                <li className={styles["personal__protect-item"]}>
                  <strong>ФИО</strong> — для вашей идентификации и личного
                  обращения;
                </li>
                <li className={styles["personal__protect-item"]}>
                  <strong>Номер телефона и Email</strong> — для обратной связи,
                  подтверждения или переноса записи на прием;
                </li>
                <li className={styles["personal__protect-item"]}>
                  <strong>Технические данные</strong> (файлы cookie, данные об
                  устройстве и геопозиции) — автоматически собираются для
                  улучшения стабильности работы Сайта.
                </li>
              </ul>
            </div>

            <div className={styles["personal__protect"]}>
              <h2 className={styles["personal__protect-title"]}>
                2. Условия обработки и безопасность
              </h2>
              <ul className={styles["personal__protect-list"]}>
                <li className={styles["personal__protect-item"]}>
                  Обработка данных ведется строго на территории РФ в
                  соответствии с ФЗ-152 «О персональных данных».
                </li>
                <li className={styles["personal__protect-item"]}>
                  Клиника обязуется обеспечивать конфиденциальность данных и не
                  передавать их третьим лицам (за исключением систем
                  веб-аналитики).
                </li>
                <li className={styles["personal__protect-item"]}>
                  Мы принципиально <strong>не обрабатываем</strong>{" "}
                  биометрические и специальные категории данных (о расе,
                  политических взглядах и т.д.).
                </li>
              </ul>
            </div>

            <div className={styles["personal__protect"]}>
              <h2 className={styles["personal__protect-title"]}>
                3. Сроки и как отозвать согласие
              </h2>
              <p className={styles["personal__text"]}>
                Срок обработки данных неограничен, но вы можете в любой момент
                полностью отозвать свое согласие. Для этого отправьте письмо на
                почту <strong>clinic.k32@gmail.com</strong> с темой «Отзыв
                согласия на обработку персональных данных».
              </p>
              <p className={styles["personal__text"]}>
                Клиника обязуется полностью прекратить обработку и уничтожить
                ваши данные в течение
                <strong> 5 рабочих дней</strong> с момента получения заявления.
              </p>
            </div>

            {/* Контакты реквизитов */}
          <div className={styles["personal__contact"]}>
              <p className={styles["personal__contact-text"]}>
                <strong>Оператор:</strong> ООО «К+32»
              </p>
              <p className={styles["personal__contact-text"]}>
                <strong>Тел:</strong> +7 (861) 991-32-15
              </p>
              <p className={styles["personal__contact-text"]}>
                <strong>Email:</strong> clinic.k32@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
