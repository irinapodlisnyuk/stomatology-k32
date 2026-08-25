"use client"; 
import dynamic from "next/dynamic";


const QuestionsDynamic = dynamic(
  () => import("./Questions"),
  { ssr: false }
);

export default function QuestionsWrapper() {
  return <QuestionsDynamic />;
}