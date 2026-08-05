import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import Hero from "@/components/Hero/Hero"; 
import Post from "./Post/Post";
import RelatedPosts from "./RelatedPosts/RelatedPosts";
import { title } from "process";


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
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Hero
        title={post.title}
        imageFolder="/image/heroBlog"
        imageName="blog"
        altText="Блог стоматологической клиники К+32"
        isStyle={true} 
      />

      <ScrollReveal>
        <Post post={post} />
      </ScrollReveal>

      {relatedPosts.length > 0 && (
        <ScrollReveal>
          <RelatedPosts posts={relatedPosts} />
        </ScrollReveal>
      )}
    </>
  );
}