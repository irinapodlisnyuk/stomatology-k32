import styles from "./home.module.scss";


export default function HomePage() {
  return (
    <section className={styles.hero}>
       <picture className={styles.hero__picture}>
        <source 
          srcSet="/image/hero-bg.webp 1x, /image/hero-bg@2x.webp 2x" 
          type="image/webp" 
        />
        <source 
          srcSet="/image/hero-bg.jpg 1x, /image/hero-bg@2x.jpg 2x" 
          type="image/jpg" 
        />
        <img
          src="/image/hero-bg.jpg"
          alt="Современная стоматология Клиника +32"
          className={styles.hero__bg}
        />
      </picture>


    </section>
  );
}
