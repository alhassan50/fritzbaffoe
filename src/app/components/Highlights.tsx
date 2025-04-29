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
    allImages: [
      "/images/highlights/galamsey/DJI_0054.jpg",
      "/images/highlights/galamsey/REQ00242.jpg",
      "/images/highlights/galamsey/REQ00250.jpg",
      "/images/highlights/galamsey/REQ00284.jpg",
      "/images/highlights/galamsey/REQ00350.jpg",
      "/images/highlights/galamsey/REQ00289.jpg",
      "/images/highlights/galamsey/REQ00299.jpg",
      "/images/highlights/galamsey/REQ00304.jpg",
      "/images/highlights/galamsey/REQ00318.jpg",
      "/images/highlights/galamsey/REQ00332.jpg",
      "/images/highlights/galamsey/REQ00334.jpg",
      "/images/highlights/galamsey/REQ00347.jpg",
      "/images/highlights/galamsey/REQ00372.jpg",
    ],
  },
  {
    id: "oriflame-campaign",
    name: "Oriflame Campaign",
    description:
      "Clean, bold, and radiant—behind-the-scenes and spotlight shots from a dynamic Oriflame shoot.",
    coverImage: "/images/highlights/oriflame/oriflame-campaign-cover.JPG",
    tags: ["Beauty", "Focus", "Style"],
    allImages: [
      "/images/highlights/oriflame/FR5A9009.JPG",
      "/images/highlights/oriflame/3b72a0.JPG",
      "/images/highlights/oriflame/FR5A8929.JPG",
      "/images/highlights/oriflame/FR5A8943.JPG",
      "/images/highlights/oriflame/FR5A8944.JPG",
      "/images/highlights/oriflame/FR5A8969.JPG",
      "/images/highlights/oriflame/FR5A8976.JPG",
      "/images/highlights/oriflame/FR5A8978.JPG",
      "/images/highlights/oriflame/FR5A8990.JPG",
      "/images/highlights/oriflame/FR5A8996.JPG",
      "/images/highlights/oriflame/FR5A9010.JPG",
      "/images/highlights/oriflame/FR5A9049.JPG",
      "/images/highlights/oriflame/FR5A9052.JPG",
      "/images/highlights/oriflame/FR5A9065.JPG",
    ],
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
