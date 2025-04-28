"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Highlight } from "./Highlights"; // Adjust path if needed

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
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{highlight.name}</DialogTitle>
        <DialogContent>
          <div className="text-gray-700 text-center py-10">
            <i>highlights coming soon...</i>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
