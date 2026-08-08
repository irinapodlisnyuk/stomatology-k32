import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import styles from "./Teams.module.scss";
import { TEAMS_DATA } from "@/data/Teams__data";

export default function Teams() {
  const teams = TEAMS_DATA;

  return (
    <section className={styles.teams}>
      <div className="container">
        <div className={styles.teams__wrapper}>
          <div className={styles["teams__header"]}>
            <h2 className={styles["teams__header-title"]}>
              Познакомьтесь с Нашей Командой
            </h2>

            <p className={styles["teams__header-subtitle"]}>
              Квалифицированные специалисты, заботящиеся о&nbsp;здоровье вашей
              полости рта.
            </p>
          </div>

          <ul className={styles["teams__list"]}>
            {teams.map(
              ({ id, name, surname, title, imgName, altText }, index) => (
                <li
                  key={id}
                  className={styles["teams__item"]}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  <ResponsivePicture
                    folder="/image/teams"
                    baseName={imgName}
                    alt={altText}
                    className={styles["teams__picture-img"]}
                     sizes="(max-width: 767px) 442px, (max-width: 1199px) 350px, 300px"
                  />
                  <div className={styles["teams__item-info"]}>
                    <span className={styles["teams__item-name"]}>{name}</span>
                    <span className={styles["teams__item-surname"]}>
                      {surname}
                    </span>
                    <span className={styles["teams__item-text"]}>{title}</span>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
