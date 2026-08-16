"use client";

import React from "react";
import Hero from "@/components/Hero/Hero";
import { ServiceContent } from "./ServiceContent";
import { HeroService } from "./HeroService";

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
      <HeroService title={service.title} />
      <ServiceContent service={service} prices={prices} />
    </>
  );
}
