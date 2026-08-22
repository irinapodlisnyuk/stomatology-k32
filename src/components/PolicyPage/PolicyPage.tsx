import { HeroPersonal } from "../PersonalPage/HeroPersonal";
import styles from "./PolicyPage.module.scss";

export default function PolicyPage() {
  return (
    <>
      <HeroPersonal title={"Политика конфиденциальности"} />
      <section className={styles["policy-page"]}>
        <div className="container">
          <div className={styles["policy-page__wrapper"]}>
            <div className={styles["policy-page__paragraphs"]}>
              <p className={styles["policy-page__text"]}>
                Настоящая Политика конфиденциальности действует в&nbsp;отношении
                всей информации, которую сайт
                <strong> https://k32clinic.ru</strong> (далее — Сайт)может
                получить о&nbsp;пользователе во&nbsp;время использования
                им&nbsp;интерактивных сервисов и&nbsp;форм обратной связи.
              </p>
              <p className={styles["policy-page__text"]}>
                Использование Сайта означает безоговорочное согласие
                пользователя с&nbsp;настоящей Политикой и&nbsp;указанными
                в&nbsp;ней условиями обработки его персональной информации.
              </p>
            </div>

            <div className={styles["policy-page__protect"]}>
              <h2 className={styles["policy-page__protect-title"]}>
                1. Какую информацию мы&nbsp;защищаем
              </h2>
              <p className={styles["policy-page__text"]}>
                Администрация Сайта обеспечивает полную конфиденциальность двух
                типов данных:
              </p>
              <ul className={styles["policy-page__protect-list"]}>
                <li className={styles["policy-page__protect-item"]}>
                  <strong>Данные, предоставляемые вами:</strong> Имя, адрес
                  электронной почты и&nbsp;номер мобильного телефона, вводимые в
                  формы записи на&nbsp;прием или обратной связи.
                </li>
                <li className={styles["policy-page__protect-item"]}>
                  <strong>Автоматические технические данные:</strong> IP-адрес,
                  файлы cookie, информация о&nbsp;браузере, время доступа
                  и&nbsp;адреса запрашиваемых страниц (необходимы для защиты
                  сайта от&nbsp;спама и улучшения&nbsp;UX).
                </li>
              </ul>
            </div>

            <div className={styles["policy-page__protect"]}>
              <h2 className={styles["policy-page__protect-title"]}>
                2. Цели использования конфиденциальных данных
              </h2>
              <p className={styles["policy-page__text"]}>
                Мы&nbsp;используем вашу личную информацию исключительно
                в&nbsp;следующих целях:
              </p>
              <ul className={styles["policy-page__protect-list"]}>
                <li className={styles["policy-page__protect-item"]}>
                  Установление двусторонней обратной связи (звонки
                  администратора, подтверждение времени приема специалистов)
                  [1.1].
                </li>
                <li className={styles["policy-page__protect-item"]}>
                  Предоставление пациенту эффективной клиентской
                  и&nbsp;технической поддержки при возникновении проблем,
                  связанных с использованием Сайта.
                </li>
                <li className={styles["policy-page__protect-item"]}>
                  Сбор обезличенной аналитической статистики через Яндекс
                  Метрику для оптимизации скорости и&nbsp;удобства страниц.
                </li>
              </ul>
            </div>

            <div className={styles["policy-page__protect"]}>
              <h2 className={styles["policy-page__protect-title"]}>
                3. Защита и&nbsp;безопасность данных
              </h2>
              <p className={styles["policy-page__text"]}>
                Администрация Сайта принимает все необходимые организационные и
                технические меры (включая SSL-шифрование трафика) для защиты
                персональной информации пользователя от&nbsp;неправомерного или
                случайного доступа, уничтожения, изменения или копирования
                третьими лицами.
              </p>
              <p className={styles["policy-page__text"]}>
                Передача данных третьим лицам возможна только по&nbsp;законным
                запросам государственных органов&nbsp;РФ в&nbsp;порядке,
                установленном законодательством Российской Федерации.
              </p>
            </div>

            <div className={styles["policy-page__change"]}>
              <p className={styles["policy-page__change-text"]}>
                <strong>Изменение политики:</strong>Администрация имеет право
                вносить изменения в&nbsp;настоящую Политику конфиденциальности
                без согласия пользователя. Новая редакция вступает в&nbsp;силу
                с&nbsp;момента ее&nbsp;размещения на&nbsp;Сайте. Все вопросы
                можно направлять на&nbsp;email:
                <strong>clinic.k32@gmail.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
