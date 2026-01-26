"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { div } from "motion/react-client";
import ThemedButton from "@/components/ui/ThemedButton";

const experiences = [
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer",
    type: "Internship",
    period: "Sep 2022 - Dec 2022",
  },
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer",
    type: "Internship",
    period: "Sep 2022 - Dec 2022",
  },
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer",
    type: "Internship",
    period: "Sep 2022 - Dec 2022",
  },
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer",
    type: "Internship",
    period: "Sep 2022 - Dec 2022",
  },
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer",
    type: "Internship",
    period: "Sep 2022 - Dec 2022",
  },
];

// Helper: split experiences into chunks of 2 per slide
const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function ContentExperience() {
  const slides = chunk(experiences, 2);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => setSwiperReady(true), []);

  return (
    <div className="z-20 w-full max-w-6xl h-auto px-[24px] pt-[12px] pb-[24px] rounded-lg bg-gradient-to-bl from-[hsl(11,44%,46%)] to-[hsl(14,45%,49%)] select-none">
      {/* Title */}
      <div className="absolute top-[15%] flex items-center justify-center gap-4">
        <div className="mask-[url(/images/icon-star1.png)] bg-[hsl(11,35%,28%)] w-[30px] h-[30px] mask-contain mask-center mask-no-repeat"></div>
        <h2 className="text-4xl font-bold text-[hsl(11,35%,28%)]">
          Experience Board
        </h2>
      </div>

      {/* Header */}
      <div className="px-6 mb-5">
        <h2 className="text-2xl font-bold">Professional journey</h2>
      </div>

      {/* Board */}
      <div className="relative rounded-lg border-4 border-[hsl(47,54%,80%)] bg-[hsl(44,55%,92%)] shadow-[0_0_0_8px_rgb(246,240,223)]">
        {swiperReady && (
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = ".custom-pagination";
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="w-full flex flex-col p-6 gap-4">
                  {slide.map((exp, j) => (
                    <div
                      key={j}
                      className="relative h-40 rounded-xl p-5 bg-gradient-to-b from-[hsl(51,54%,81%)] via-[hsl(47,47%,85%)] to-[hsl(44,56%,84%)] overflow-hidden"
                    >
                      <div className="z-10 absolute inset-0 w-full h-full bg-gradient-to-b from-[hsla(52,41%,77%,0.6)] to-[hsl(44,52%,81%)]   mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:25%]" />
                      <div className="z-20 w-full h-full px-4 relative bg-gradient-to-bl from-[hsl(51,58%,87%)] to-[hsl(45,59%,88%)] rounded-xl flex flex-col justify-center">
                        <h3 className="text-xl font-extrabold text-[hsl(24,25%,41%)]">
                          {exp.role}{" "}
                          <span className="text-xs text-white font-medium bg-[hsl(17,50%,59%)] px-2 py-1 rounded-full ml-2">
                            {exp.type}
                          </span>
                        </h3>
                        <p className="text-sm font-semibold text-[hsl(35,44%,48%)] mt-1">
                          {exp.company}
                        </p>
                        <p className="text-xs text-gray-500 font-semibold mt-2">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  ))}
                  {slide.length === 1 && (
                    <div className="relative h-40 rounded-xl p-5 bg-gradient-to-b from-[hsl(51,54%,81%)] via-[hsl(47,47%,85%)] to-[hsl(44,56%,84%)] flex items-center justify-center text-gray-500 overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-black/10"></div>
                      <span className="z-10 text-md font-light">
                        No more experiences
                      </span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* NAV + Pagination */}
        <div className="z-40 absolute w-full bottom-[-40%]  flex items-center justify-center px-6 py-4 gap-4">
          <button
            ref={prevRef}
            className="px-4 py-2 hover:scale-105 duration-700 cursor-pointer"
          >
            <div className="w-12 h-12 bg-[url(/images/icon-arrow.png)] bg-center bg-contain rotate-180"></div>
          </button>

          {/* Custom pagination di tengah */}
          <div className="flex justify-center">
            <div className="custom-pagination flex gap-2"></div>
          </div>

          <button
            ref={nextRef}
            className="px-4 py-2 hover:scale-105 duration-700 cursor-pointer"
          >
            <div className="w-12 h-12 bg-[url(/images/icon-arrow.png)] bg-center bg-contain"></div>
          </button>
        </div>
      </div>

      {/* Custom CSS untuk bullet aktif/non-aktif pakai mask */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 24px;
          display: inline-block;
          background-color: hsl(20, 25%, 41%); /* warna nonaktif */
          -webkit-mask: url("/images/icon-star1.png") center/contain no-repeat;
          mask: url("/images/icon-star1.png") center/contain no-repeat;
          margin: 0 4px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: hsl(26, 33%, 23%); /* warna aktif */
          -webkit-mask: url("/images/icon-star1.png") center/contain no-repeat;
          mask: url("/images/icon-star1.png") center/contain no-repeat;
        }
      `}</style>
    </div>
  );
}
