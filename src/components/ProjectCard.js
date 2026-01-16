"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  tools,
  images,
  github,
  demo,
  isActive = false,
}) {
  const [imgIndex, setImgIndex] = useState(0);

  const brightnessClass = isActive ? "brightness-100" : "brightness-50";

  // Auto-slide images
  useEffect(() => {
    let interval;
    if (isActive && images.length > 1) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 2500);
    } else {
      setImgIndex(0);
    }
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  return (
    <div className="relative max-w-[clamp(260px,80vw,420px)] lg:max-w-[clamp(260px,80vw,840px)] h-[14rem] lg:h-[30rem] aspect-[16/9] mx-auto cursor-pointer ">
      <div className="relative  h-[10rem] lg:h-[22rem] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${imgIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0 relative rounded-md"
            >
              <Image
                src={img}
                alt={`${title}-${idx}`}
                fill
                className={`object-fill  rounded-md ${brightnessClass}`}
              />
            </div>
          ))}
        </div>

        {/* Icon */}
        <div
          className={`absolute right-2 bottom-2 lg:right-6 lg:bottom-4 flex flex-wrap gap-1 lg:gap-2 z-20 ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="relative w-4 h-4 lg:w-6 lg:h-6 bg-white bg-opacity-90 rounded-full overflow-hidden border border-gray-200"
            >
              <Image src={tool} alt={title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={` flex flex-col justify-center items-center transition-opacity duration-700 w-full relative ${
          isActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <h3 className="font-semibold text-lg lg:text-4xl  text-white text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
