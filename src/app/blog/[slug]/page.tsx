import { BLOG_DATA } from "@/data/Blog_data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PostContentWrapper from "@/components/PostPage/PostPage"; 

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug || p.id === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Блог`,
    description: post.textPreview || `Читать статью ${post.title}`,
  };
}

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({ slug: post.slug || post.id }));
}

//  Это главный серверный компонент страницы Next.js, он принимает только params
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  return <PostContentWrapper post={post} allPosts={BLOG_DATA} />;
}