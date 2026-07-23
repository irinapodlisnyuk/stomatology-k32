import styles from "./Teams.module.scss";
import { TEAMS_DATA } from "./Teams__data";

export default function Teams() {
  const teams = TEAMS_DATA;

  return (
    <section className={styles.teams}>
      <div className="container">
        <div className={styles.teams__wrapper}>
          <div className={styles["teams__header"]}>
            <h2 className={styles["teams__header-title"]}>
              Познакомьтесь с нашей командой
            </h2>

            <p className={styles["teams__header-text"]}></p>
          </div>

           <ul className={styles["teams__list"]}>
            {teams.map(({ id, title, imgName, altText }, index) => (
              <li
                key={id}
                className={styles["teams__item"]}
                style={{ "--index": index } as React.CSSProperties}
              >
                <picture className={styles["teams__picture"]}>
                  <source
                    srcSet={`/image/teams/${imgName}.webp 1x, /image/teams/${imgName}@2x.webp 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`/image/teams/${imgName}.jpg 1x, /image/teams/${imgName}@2x.jpg 2x`}
                    type="image/jpeg"
                  />
                  <img
                    src={`/image/teams/${imgName}.jpg`}
                    alt={altText}
                    className={styles["teams__picture-img"]}
                    loading="lazy" 
                  />
                </picture>
                <span className={styles["teams__item-text"]}>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
