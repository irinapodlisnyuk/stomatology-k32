import { HeroPersonal } from "./HeroPersonal";

export default function PersonalPage() {
  return (
    <>
      <HeroPersonal
        title={"Политика в отношении обработки персональных данных"}
      />
      <section className="personal">
        <div className="container">
          <div style={{ marginBottom: "25px" }}>
            <p style={{ marginBottom: "12px" }}>
              Настоящая Политика определяет порядок обработки персональных
              данных на сайте
              <strong> https://k32clinic.ru</strong> Оператором — ООО «К+32»
              (ОГРН 1192375034697, ИНН 2304075001, адрес: 353480, г. Геленджик,
              с. Кабардинка, ул. Мира, д. 15, офис 22-23).
            </p>
            <p>
              Оставляя данные на Сайте или отправляя их на email{" "}
              <strong>clinic.k32@gmail.com</strong>, вы полностью соглашаетесь с
              условиями настоящей Политики.
            </p>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#00a8cc",
                marginBottom: "12px",
              }}
            >
              1. Что и для чего мы собираем
            </h2>
            <p style={{ marginBottom: "8px" }}>
              Мы обрабатываем только те данные, которые вы вводите в формы
              записи самостоятельно:
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                listStyleType: "disc",
                marginBottom: "12px",
              }}
            >
              <li style={{ marginBottom: "4px" }}>
                <strong>ФИО</strong> — для вашей идентификации и личного
                обращения;
              </li>
              <li style={{ marginBottom: "4px" }}>
                <strong>Номер телефона и Email</strong> — для обратной связи,
                подтверждения или переноса записи на прием;
              </li>
              <li style={{ marginBottom: "4px" }}>
                <strong>Технические данные</strong> (файлы cookie, данные об
                устройстве и геопозиции) — автоматически собираются для
                улучшения стабильности работы Сайта.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#00a8cc",
                marginBottom: "12px",
              }}
            >
              2. Условия обработки и безопасность
            </h2>
            <ul style={{ paddingLeft: "20px", listStyleType: "square" }}>
              <li style={{ marginBottom: "6px" }}>
                Обработка данных ведется строго на территории РФ в соответствии
                с ФЗ-152 «О персональных данных».
              </li>
              <li style={{ marginBottom: "6px" }}>
                Клиника обязуется обеспечивать конфиденциальность данных и не
                передавать их третьим лицам (за исключением систем
                веб-аналитики).
              </li>
              <li style={{ marginBottom: "6px" }}>
                Мы принципиально <strong>не обрабатываем</strong> биометрические
                и специальные категории данных (о расе, политических взглядах и
                т.д.).
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#00a8cc",
                marginBottom: "12px",
              }}
            >
              3. Сроки и как отозвать согласие
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Срок обработки данных неограничен, но вы можете в любой момент
              полностью отозвать свое согласие. Для этого отправьте письмо на
              почту <strong>clinic.k32@gmail.com</strong> с темой «Отзыв
              согласия на обработку персональных данных».
            </p>
            <p>
              Клиника обязуется полностью прекратить обработку и уничтожить ваши
              данные в течение
              <strong> 5 рабочих дней</strong> с момента получения заявления.
            </p>
          </div>

          {/* Контакты реквизитов */}
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fdfdfd",
              border: "1px solid #eef2f4",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <p style={{ margin: "2px 0" }}>
              <strong>Оператор:</strong> ООО «К+32»
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Тел:</strong> +7 (861) 991-32-15
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Email:</strong> clinic.k32@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
