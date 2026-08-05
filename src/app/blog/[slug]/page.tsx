// import { BLOG_DATA } from "@/components/HomePage/Blog/Blog_data";
// import { notFound } from "next/navigation";
// import styles from "./SinglePost.module.scss"; // Создайте стили для страницы статьи

// export default function PostPage({ params }: { params: { slug: string } }) {
//   // Ищем статью в базе данных по слюгу из URL адреса
//   const post = BLOG_DATA.find((p) => p.slug === params.slug || p.id === params.slug);

//   // Если статья не найдена — отдаем стандартную 404 страницу Next.js
//   if (!post) {
//     notFound();
//   }

//   return (
//     <article className={styles.post}>
//       <div className="container">
//         <header className={styles.post__header}>
//           <span className={styles.post__category}>{post.name}</span>
//           <h1 className={styles.post__title}>{post.title}</h1>
//           <time className={styles.post__date}>{post.date}</time>
//         </header>

//         <div className={styles.post__imageWrapper}>
//           <img src={`/image/blog/${post.imgName}.jpg`} alt={post.altText} />
//         </div>

//         {/* Вывод полноценного текста статьи */}
//         <div className={styles.post__content}>
//           <p>{post.fullText}</p>
//         </div>
//       </div>
//     </article>
//   );
// }