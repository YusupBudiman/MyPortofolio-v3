"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function ProjectPreviewCard({ previewImages = [], onClick }) {
  return (
    <div
      role="button"
      aria-label="Preview Projects"
      onClick={onClick}
      className="group cursor-pointer "
    >
      <div
        className="relative  flex items-center justify-center left-[-2%]
      2xl:w-[240px] 2xl:h-[140px]
      w-[180px] h-[100px]"
      >
        {/* corner stars */}
        {[
          "top-[3%] left-[3%] 2xl:left-[2%] ",
          "bottom-[6%] left-[3%] 2xl:left-[2%] ",
          "top-[3%] right-[2%] 2xl:right-[1%] ",
          "bottom-[6%] right-[2%] 2xl:right-[1%] ",
        ].map((pos, i) => (
          <div
            key={i}
            className={`z-20 absolute ${pos} bg-[hsl(65,42%,94%)] mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
              2xl:w-2.5 2xl:h-2.5 
              w-1.75 h-1.75`}
          />
        ))}

        {/* top ornament */}
        <div
          className="z-20 absolute  left-1/2 -translate-x-1/2 flex items-center gap-[2px]
        2xl:top-[1%] top-[0%]"
        >
          <div
            className=" rounded-full bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)]
         2xl:w-1.25 2xl:h-1.25
         w-1 h-1"
          />
          <div
            className=" bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)] mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
            2xl:w-4 2xl:h-4
            w-2.5 h-2.5"
          />
          <div
            className=" rounded-full bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)]
           2xl:w-1.25 2xl:h-1.25
         w-1 h-1"
          />
        </div>

        {/* bottom ornament */}
        <div
          className="z-20 absolute left-1/2 -translate-x-1/2 flex items-center gap-[2px]
         2xl:bottom-[3%]
          bottom-[2.5%]"
        >
          <div
            className="rounded-full bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)]
           2xl:w-1.25 2xl:h-1.25
         w-1 h-1"
          />
          <div
            className=" bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)] mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
             2xl:w-4 2xl:h-4
            w-2.5 h-2.5"
          />
          <div
            className="rounded-full bg-[hsl(40,9%,66%)] group-hover:bg-[hsl(44,55%,73%)]
           2xl:w-1.25 2xl:h-1.25
         w-1 h-1"
          />
        </div>

        {/* outer frame */}
        <div
          className="flex items-center justify-center bg-[hsl(64,46%,87%)] mask-[url(/images/frame3.png)] mask-contain mask-center mask-no-repeat
          2xl:w-[270px] 2xl:h-[140px]
         w-[200px] h-[102px]"
        >
          {/* inner frame */}
          <div
            className="relative flex items-center justify-center bg-gray-600 overflow-hidden mask-[url(/images/frame3.png)] mask-contain mask-center mask-no-repeat
             2xl:w-[270px] 2xl:h-[138px]
              w-[200px] h-[100px]"
          >
            {/* overlay */}
            <div className="absolute inset-0 z-20 bg-black/30" />

            {/* border */}
            <div
              className="absolute z-10 pointer-events-none
            2xl:left-[24px] 2xl:top-[7.5px]
            left-[19px] top-[5px]"
            >
              <div
                className="border border-[hsla(44,55%,73%,0.8)] group-hover:border-[hsl(44,55%,73%)]
              2xl:w-[226px] 2xl:h-[120px]
              w-[164px] h-[88px]"
              />
            </div>

            {/* swiper images */}
            {previewImages.length > 0 && (
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 2200, disableOnInteraction: false }}
                loop
                effect="fade"
                className="w-full h-full"
              >
                {previewImages.map((img, index) => (
                  <SwiperSlide key={index} className="relative w-full h-full">
                    <Image
                      src={img}
                      alt={`Project Preview ${index + 1}`}
                      fill
                      className="object-contain object-center"
                      priority={index === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
