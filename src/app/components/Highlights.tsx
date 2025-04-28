"use client";

import React from "react";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "./customSwiper.css";
import { HighlightCard } from "./HighlightCard";

export interface Highlight {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  tags: string[];
  allImages: string[];
}

export const highlights: Highlight[] = [
  {
    id: "african-games-2023",
    name: "Accra African Games",
    description:
      "A visual dive into the spirit and spectacle of the Accra African Games.",
    coverImage: "/images/highlights/african-games/african-games-cover.jpg", // replace with your actual path
    tags: ["Energy", "Passion", "Victory"],
    allImages: [] as string[],
  },
  {
    id: "galamsey-impact",
    name: "Galamsey Impact",
    description:
      "Unfiltered shots revealing the harsh impact of illegal mining on Ghana's land and people.",
    coverImage: "/images/highlights/galamsey/galamsey-impact-cover.jpg", // replace with your actual path
    tags: ["Environment", "Awareness", "Change"],
    allImages: [] as string[],
  },
  {
    id: "oriflame-campaign",
    name: "Oriflame Campaign",
    description:
      "Clean, bold, and radiant—behind-the-scenes and spotlight shots from a dynamic Oriflame shoot.",
    coverImage: "/images/highlights/oriflame/oriflame-campaign-cover.jpg", // replace with your actual path
    tags: ["Beauty", "Focus", "Style"],
    allImages: [] as string[],
  },
];

export default function Highlights() {
  const breakpoints = {
    320: { slidesPerView: 1 },
  };
  return (
    <Section id="highlights">
      <div className="max-w-[1054px] mx-auto w-full">
        {/* Header */}
        <div className="text-left mb-20">
          <h2 className="font-semibold text-gray-600 !text-left text-3xl leading-tight">
            Stories Told in Still Frames—
            <span className="text-[var(--primary)]">Highlights </span>
          </h2>
        </div>
        <div>
          <Swiper
            breakpoints={breakpoints}
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            className=""
          >
            {highlights.map((highlight) => (
              <SwiperSlide key={highlight.id} className="">
                <HighlightCard highlight={highlight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
