"use client";

import React from "react";
import Section from "./Section";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "./customSwiper.css";

export const highlights = [
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

interface HighlightCardProps {
  name: string;
  description: string;
  coverImage: string;
  tags: string[];
}

export function HighlightCard({
  name,
  description,
  coverImage,
  tags,
}: HighlightCardProps) {
  return (
    <div className="relative w-full h-92 rounded-3xl overflow-hidden group flex min-w-[420px] md:min-w-[480px] lg:min-w-[500px]">
      {/* Background Image */}
      <Image src={coverImage} alt={name} fill className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Tags */}
      <div className="absolute top-5 right-5  gap-2 mb-4 z-20">
        <div>
          <div className="flex justify-end">
            <span
              key={tags[0]}
              className="px-4 inline-block mb-1 py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
            >
              {tags[0]}
            </span>
          </div>
          <div className="space-x-1">
            <span
              key={tags[1]}
              className="px-4 inline-block py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
            >
              {tags[1]}
            </span>
            <span
              key={tags[2]}
              className="px-4 inline-block py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
            >
              {tags[2]}
            </span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-20 p-6 flex flex-col justify-end h-full">
        {/* Title */}
        <h5 className="text-white text-lg font-medium mb-2">{name}</h5>

        {/* Description */}
        <p className="text-white text-sm font-normal mb-4">{description}</p>

        {/* View More Button */}
        <button className="self-start bg-white text-black text-sm font-medium py-3 px-6  rounded-full hover:bg-gray-200 transition">
          View More
        </button>
      </div>
    </div>
  );
}

export default function Highlights() {
  const breakpoints = {
    320: { slidesPerView: 1 },
  };
  return (
    <Section id="awards">
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
                <HighlightCard
                  name={highlight.name}
                  description={highlight.description}
                  coverImage={highlight.coverImage}
                  tags={highlight.tags}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
