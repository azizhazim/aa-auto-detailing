"use client";

import Image from "next/image";
import { useState } from "react";

const TOTAL_PHOTOS = 58;
const INITIAL_VISIBLE = 12;

const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/gallery/${n}.jpg`, alt: `A&A Auto Detailing portfolio photo ${i + 1}` };
});

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const visible = expanded ? photos : photos.slice(0, INITIAL_VISIBLE);

  return (
    <section id="gallery" className="section-padding bg-shell-100">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Recent Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
              Built On Results
            </h2>
            <p className="text-slate-600">
              A look at recent transformations across Austin, Buda, Kyle, and
              San Marcos. Tap any photo to view full size.
            </p>
          </div>
          <a
            href="https://www.instagram.com/austinautodetailer/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start lg:self-auto"
          >
            Follow Us On Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-mist-200 shadow-soft hover:shadow-card transition-all bg-mist-100 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-shell-100"
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={i < 4}
                loading={i < 4 ? undefined : "lazy"}
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors" />
            </button>
          ))}
        </div>

        {!expanded && photos.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="btn-secondary"
            >
              Show All {photos.length} Photos
            </button>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 bg-navy-900/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-navy-900/50 hover:bg-navy-900/80 transition-colors"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
            }}
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-navy-900/50 hover:bg-navy-900/80 transition-colors"
            aria-label="Previous photo"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev === null ? null : (prev + 1) % photos.length));
            }}
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-navy-900/50 hover:bg-navy-900/80 transition-colors"
            aria-label="Next photo"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl aspect-square sm:aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
