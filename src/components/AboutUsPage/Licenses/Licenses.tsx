import styles from "./Licenses.module.scss";

const licenseList = [
  {
    id: 1,
    title: "Лицензия на осуществление медицинской деятельности (стр. 1)",
    // Оставляем базовое имя для генерации путей в цикле
    baseName: "Licenses1", 
  },
  {
    id: 2,
    title: "Лицензия на осуществление медицинской деятельности (стр. 2)",
    baseName: "Licenses2",
  },
  {
    id: 3,
    title: "Приложение к медицинской лицензии",
    baseName: "Licenses3",
  },
];

export default function Licenses() {
  return (
    <section className={styles.licenses}>
      <div className="container">
        <h2 className={styles.licenses__title}>
          Гарантия безопасности и стандарты качества
        </h2>
        <p className={styles.licenses__subtitle}>
          Деятельность клиники К+32 полностью лицензирована. Мы работаем строго по 
          медицинским протоколам Министерства здравоохранения РФ.
        </p>

        <div className={styles.licenses__grid}>
          {licenseList.map((item) => {
            const path = "/image/license";

            return (
               <div
                key={item.id}
                className={styles.licenses__card}
              >
                <div className={styles.licenses__imgWrapper}>
                  <picture>
                    {/* 1. Экраны до 767px включительно (Мобильные) */}
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${path}/${item.baseName}-mob.webp 1x, ${path}/${item.baseName}-mob@2x.webp 2x`}
                      type="image/webp"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${path}/${item.baseName}-mob.jpg 1x, ${path}/${item.baseName}-mob@2x.jpg 2x`}
                      type="image/jpeg"
                    />

                    {/* 2. Экраны от 768px (Десктопы и ноутбуки) */}
                    <source
                      srcSet={`${path}/${item.baseName}.webp 1x, ${path}/${item.baseName}-@2x.webp 2x`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${path}/${item.baseName}.jpg 1x, ${path}/${item.baseName}-@2x.jpg 2x`}
                      type="image/jpeg"
                    />

                    {/* 3. Базовый фоллбек для старых браузеров */}
                    <img
                      src={`${path}/${item.baseName}.jpg`}
                      alt={item.title}
                      className={styles.licenses__img}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <span className={styles.licenses__cardTitle}>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}