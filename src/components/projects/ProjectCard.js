"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div
      className={`
        relative cursor-pointer overflow-hidden rounded-md mx-auto

        w-[18rem] h-[14rem]

        lg:w-[20rem] lg:h-[10rem]

        xl:w-[30rem] xl:h-[14rem] 

        2xl:w-[50rem] 2xl:h-[22rem] 
  `}
    >
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out "
        style={{ transform: `translateX(-${imgIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={img}
              alt={`${title}-${idx}`}
              fill
              className={`object-fill ${brightnessClass}`}
            />
          </div>
        ))}
      </div>

      {/* Icon */}
      <div
        className={`absolute flex flex-wrap z-20

          lg:right-2 lg:bottom-1.5 lg:gap-1

          xl:right-3 xl:bottom-2

          2xl:right-6 2xl:bottom-4 2xl:gap-2
          
          ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className={`
              relative bg-white bg-opacity-90 rounded-full overflow-hidden border border-gray-200
              
              lg:w-3 lg:h-3 

              xl:w-4 xl:h-4 
              
              2xl:w-6 2xl:h-6
              `}
          >
            <Image src={tool} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
