"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { getBlurDataUrl } from "../data/blur-data";

const LightboxModal = dynamic(() => import("./lightbox-modal"), {
  ssr: false,
});

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[selectedIndex];
  const nextIndex = (selectedIndex + 1) % images.length;
  const nextImage = images[nextIndex];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      {/* Main Image Viewport */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg"
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={getBlurDataUrl(currentImage.src)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 840px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hidden next slide image to warm up cache seamlessly */}
        {images.length > 1 && (
          <div className="hidden" aria-hidden="true">
            <Image
              src={nextImage.src}
              alt=""
              width={10}
              height={10}
              loading="lazy"
            />
          </div>
        )}

        {/* Gradient Overlay for Caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

        {/* Caption & Counter */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white text-xs pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg max-w-[80%]">
            <p className="font-medium text-gray-100 truncate">{currentImage.caption || currentImage.alt}</p>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg font-mono text-[11px]">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Enlarge Hint Icon */}
        <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {images.map((img, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={img.src + index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`relative shrink-0 w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-[1.02]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`View photo ${index + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl(img.src)}
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Dynamic Lightbox Modal */}
      {isLightboxOpen && (
        <LightboxModal
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={() => handlePrev()}
          onNext={() => handleNext()}
        />
      )}
    </div>
  );
}
