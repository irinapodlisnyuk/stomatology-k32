"use client";

import React from "react";
import Hero from "@/components/Hero/Hero";
import { ServiceContent } from "./ServiceContent";

interface PriceItem {
  name: string;
  price: string;
}

interface ServicePageProps {
  service: {
    title: string;
    imgName: string;
    altText: string;
    fullText?: string;
    slug?: string;
  };
  prices: PriceItem[];
}

export function ServicePage({ service, prices }: ServicePageProps) {
  return (
    <>
      <Hero
        title={service.title}
        subtitle=""
        imageFolder="/image/servicePage"
        imageName="service"
        altText={service.altText}
        pageType="services"
      />

      <ServiceContent service={service} prices={prices} />
    </>
  );
}
