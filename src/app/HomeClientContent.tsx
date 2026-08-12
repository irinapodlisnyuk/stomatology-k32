"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "@/components/HomePage/Scroll-reveal/ScrollReveal";


const Questions = dynamic(
  () => import("@/components/HomePage/Questions/Questions"),
  { ssr: false }
);

const Contact = dynamic(
  () => import("@/components/HomePage/Contact/Contact"),
  { ssr: false }
);

const Blog = dynamic(
  () => import("@/components/HomePage/Blog/Blog").then((mod) => mod.Blog),
  { ssr: false }
);

export default function HomeClientContent() {
  return (
    <>
      <ScrollReveal>
        <Questions />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal>
        <Blog />
      </ScrollReveal>
    </>
  );
}