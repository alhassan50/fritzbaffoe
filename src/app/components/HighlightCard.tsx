"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@mui/material";
import { Highlight } from "./Highlights";

export function HighlightCard({ highlight }: { highlight: Highlight }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="relative w-full h-92 rounded-3xl overflow-hidden group flex min-w-[360px] sm:min-w-[420px] md:min-w-[480px] lg:min-w-[500px]">
        {/* Background Image */}
        <Image
          src={highlight.coverImage}
          alt={highlight.name}
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Tags */}
        <div className="absolute top-5 right-5 gap-2 mb-4 z-20">
          <div>
            <div className="flex justify-end">
              <span
                key={highlight.tags[0]}
                className="px-4 inline-block mb-1 py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
              >
                {highlight.tags[0]}
              </span>
            </div>
            <div className="space-x-1">
              <span
                key={highlight.tags[1]}
                className="px-4 inline-block py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
              >
                {highlight.tags[1]}
              </span>
              <span
                key={highlight.tags[2]}
                className="px-4 inline-block py-2 border border-white text-[10px] text-white backdrop-blur-md bg-white/5 rounded-full"
              >
                {highlight.tags[2]}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 p-6 flex flex-col justify-end h-full">
          {/* Title */}
          <h5 className="text-white text-lg font-medium mb-2">
            {highlight.name}
          </h5>

          {/* Description */}
          <p className="text-white text-sm font-normal mb-4">
            {highlight.description}
          </p>

          {/* View More Button */}
          <button
            onClick={handleOpen}
            className="self-start bg-white text-black text-sm font-medium py-3 px-6 rounded-full hover:bg-gray-200 transition"
          >
            View More
          </button>
        </div>
      </div>

      {/* MUI Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              borderRadius: "1.5rem",
            },
          },
        }}
      >
        <div className="p-4 border-b border-[#d9d9d9] flex justify-between gap-4 items-center w-full">
          <h5 className="font-medium">{highlight.name} In Perspective</h5>
          <button title="close" onClick={handleClose} color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </div>
        <DialogContent sx={{ paddingBottom: "40px" }}>
          <div className="text-gray-700 text-center h-screen">
            {highlight.allImages.length === 0 ? (
              <i>highlights coming soon...</i>
            ) : (
              <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 pb-4">
                {highlight.allImages.map((image, index) => (
                  <Image
                    key={index + image}
                    src={image}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-3xl bg-gray-100 break-inside-avoid"
                    alt={image}
                    title={image}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
