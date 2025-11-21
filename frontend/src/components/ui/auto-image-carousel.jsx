// components/auto-image-carousel.jsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ✅ Swiper React + modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// ✅ Swiper CSS (from node_modules, not your files)
import "swiper/css";
import "swiper/css/pagination";

export const AutoImageCarousel = ({ images = [], className }) => {
  if (!images.length) return null;

  return (
    <div
      className={cn(
        "relative w-full h-56 overflow-hidden rounded-lg",
        className
      )}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={12}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-48 w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
