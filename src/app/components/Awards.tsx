import React from "react";
import Section from "./Section";

interface Award {
  year: number;
  title: string;
  description: string;
}

const awards: Award[] = [
  {
    year: 2023,
    title: "Featured Photographer - Accra African Games 2023 Media Team",
    description:
      "Recognized for outstanding visual coverage and storytelling during the 13th African Games in Accra.",
  },
  {
    year: 2024,
    title: "Special Mention - Ghana Environmental Photo Showcase",
    description:
      "Honored for a compelling photo series documenting the environmental and social effects of illegal mining in rural Ghana.",
  },
];

export default function Awards() {
  return (
    <Section id="awards">
      <div className="max-w-[1054px] mx-auto">
        {/* Header */}
        <div className="text-left mb-20">
          <h2 className="font-semibold text-gray-600 text-3xl leading-tight">
            <span className="text-[var(--primary)]">Honors </span>&
            <span className="text-[var(--primary)]"> Awards </span>
            in Focus — A Visual Journey Recognized
          </h2>
        </div>

        {/* Awards List */}
        <div className="space-y-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-6 md:justify-between border-[#d9d9d9] border-b pb-10"
            >
              <div className="text-lg font-medium text-gray-400 w-24">
                <h3>{award.year}</h3>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-medium mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-500 text-sm">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
