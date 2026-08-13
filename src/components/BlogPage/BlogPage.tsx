import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";
import { Blog } from "@/components/HomePage/Blog/Blog";
import Hero from "@/components/Hero/Hero"; 

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Блог"
        subtitle="Будьте в курсе последних новостей K+32."
        imageFolder="/image/heroBlog"
        imageName="blog"
        altText="Блог стоматологической клиники К+32"
         pageType="blog" 
      />

      <ScrollReveal>
        <Blog isFullPage={true} />
      </ScrollReveal>
    </>
  );
}