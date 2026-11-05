"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getBlurDataUrl } from "../data/blur-data";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxModalProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const currentImage = images[selectedIndex];

  // Keyboard navigation & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Large image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-[75vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={getBlurDataUrl(currentImage.src)}
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <p className="text-sm font-medium">{currentImage.caption || currentImage.alt}</p>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Image {selectedIndex + 1} of {images.length}
          </p>
        </div>

        {/* Prev/Next buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

