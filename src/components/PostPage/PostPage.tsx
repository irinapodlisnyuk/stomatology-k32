import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import Hero from "@/components/Hero/Hero";
import Post from "./Post/Post";


export interface BlogPost {
  id: string | number;
  slug: string;
  name: string;
  title: string;
  imgName: string;
  altText: string;
  textPreview: string;
  fullText: string;
}

interface PostContentWrapperProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

export default function PostPage({ post, allPosts }: PostContentWrapperProps) {
  // Фильтруем статьи, исключая текущую по id
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Hero
        title={post.title}
        subtitle=""
        imageFolder="/image/post"
        imageName="post"
        altText="Блог стоматологической клиники К+32"
        pageType="post"
      />
  
      <ScrollReveal>
        <Post post={post} relatedPosts={relatedPosts} />
      </ScrollReveal>
    </>
  );
}
