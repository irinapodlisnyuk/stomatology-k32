import ScrollReveal from "../HomePage/Scroll-reveal/ScrollReveal";
import {Blog }from "@/components/HomePage/Blog/Blog";
import HeroBlog from "./Hero/HeroBlog";

export default function BlogPage() {
  return (
    <>
      <HeroBlog />

      <ScrollReveal>
         <Blog isFullPage={true} />
      </ScrollReveal>
    </>
  );
}
