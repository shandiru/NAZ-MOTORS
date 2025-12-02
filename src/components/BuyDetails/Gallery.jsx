"use client";
import React, { useState, useEffect } from "react";

export default function GallerySection() {
  // Put all online car image URLs here
  const images = [
    "https://picsum.photos/id/1011/1600/900",
    "https://picsum.photos/id/1015/1600/900",
    "https://picsum.photos/id/1016/1600/900",
    "https://picsum.photos/id/1020/1600/900",
    "https://picsum.photos/id/1032/1600/900",
    "https://picsum.photos/id/1033/1600/900",
    "https://picsum.photos/id/1035/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900","https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    "https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900","https://picsum.photos/id/1040/1600/900",
    "https://picsum.photos/id/1041/1600/900",
    
    "https://picsum.photos/id/1050/1600/900"
  ];

  if (images.length < 2) return null;

  const big = images.slice(0, 2);
  const thumbs = images.slice(2);

  // Popup states
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isOpen, images.length]);

  const openPopup = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="V-Gallery"
      className="py-6 md:py-10 bg-[#020000] rounded-b-3xl overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#FCFCFC] mb-6">
          Photo Gallery
        </h2>

        {/* TWO BIG IMAGES */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {big.map((url, index) => (
            <div key={index} className="w-full">
              <img
                src={url}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => openPopup(index)}
              />
            </div>
          ))}
        </div>

        {/* SMALL IMAGES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2">
          {thumbs.map((url, index) => (
            <div key={index} className="w-full">
              <img
                src={url}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => openPopup(index + 2)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[90px] md:text-[140px] font-extrabold text-[#A7A1A2]/10 pointer-events-none select-none">
        Gallery
      </div>

      {/* POPUP / LIGHTBOX */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-[#FCFCFC] text-3xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={images[activeIndex]}
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-xl border-4 border-[#B40B1F] transition-all duration-300"
          />

          {/* LEFT ARROW */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[#FCFCFC] text-5xl font-bold hover:text-[#B40B1F]"
            onClick={prevImage}
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FCFCFC] text-5xl font-bold hover:text-[#B40B1F]"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
