"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="relative flex flex-col items-start justify-center">
      {/* Title */}
      <div
        className={`
          flex items-center justify-center pointer-events-none 

          lg:mb-1 lg:ml-2 lg:gap-1 

          xl:mb-2 xl:ml-4 xl:gap-2 

          2xl:mb-4 2xl:ml-8 2xl:gap-4 
        `}
      >
        <div
          className={`
            mask-[url(/images/icon-star1.png)] bg-[hsl(11,35%,28%)]  mask-contain mask-center mask-no-repeat 
        
            lg:w-[14px] lg:h-[14px]

            xl:w-[18px] xl:h-[18px]
        
            2xl:w-[30px] 2xl:h-[30px]
            `}
        ></div>
        <h2
          className={`
            font-bold text-[hsl(11,35%,28%)]

            lg:text-xl

            xl:text-2xl
            
            2xl:text-4xl  
          `}
        >
          Experience
        </h2>
      </div>

      {/* Frame */}
      <div
        className={`
        z-20 h-auto bg-gradient-to-bl from-[hsl(11,44%,46%)] to-[hsl(14,45%,49%)] select-none rounded-lg
        
        lg:w-[30rem] lg:px-5 lg:pt-2 lg:pb-5

        xl:w-[40rem]  xl:px-6 xl:pt-2 xl:pb-6

        2xl:w-[62rem] 2xl:px-8 2xl:pt-4 2xl:pb-8
        `}
      >
        {/* Header */}

        <h2
          className={`
          font-bold ml-2
            
          lg:text-sm lg:mb-3

          xl:text-lg xl:mb-3 

          2xl:text-2xl 2xl:mb-6
          `}
        >
          Professional journey
        </h2>

        {/* Board */}
        <div
          className={`
          relative  border-[hsl(47,54%,80%)] bg-[hsl(44,55%,92%)] shadow-[0_0_0_8px_rgb(246,240,223)]
          
          lg:border-2 lg:rounded-sm

          xl:rounded-lg

          2xl:border-4
          `}
        >
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
                  <div
                    className={`
                    w-full flex flex-col

                    lg:p-3 lg:gap-2

                    xl:p-4 xl:gap-3

                    2xl:p-6 2xl:gap-4
                    `}
                  >
                    {slide.map((exp, j) => (
                      <div
                        key={j}
                        className={`
                          relative flex rounded-xl bg-gradient-to-b from-[hsl(51,54%,81%)] via-[hsl(47,47%,85%)] to-[hsl(44,56%,84%)] overflow-hidden
                          
                          lg:h-22 lg:p-2

                          xl:h-30 xl:p-3
                          
                          2xl:h-40 2xl:p-5
                          `}
                      >
                        <div
                          className={`
                          z-10 absolute inset-0 w-full h-full bg-gradient-to-b from-[hsla(52,41%,77%,0.6)] to-[hsl(44,52%,81%)]   mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:25%] pointer-events-none
                          `}
                        />
                        <div className="z-20 w-full h-full px-4 relative bg-gradient-to-bl from-[hsl(51,58%,87%)] to-[hsl(45,59%,88%)] rounded-xl flex flex-col justify-center">
                          <h3
                            className={`
                              font-extrabold text-[hsl(24,25%,41%)]

                              lg:text-sm lg:mb-1.5

                              xl:text-lg xl:mb-3
                              
                              2xl:text-xl 2xl:mb-4
                              `}
                          >
                            {exp.role}
                          </h3>
                          <p
                            className={`
                          font-semibold text-[hsl(35,44%,48%)]
                          
                          lg:text-[10px] 
                          
                          xl:text-xs xl:mb-1
                          
                          2xl:text-sm 2xl:mb-1.5
                          `}
                          >
                            {exp.company}
                          </p>
                          <p
                            className={`
                        text-gray-500 font-semibold 
                          
                          lg:text-[8px] 

                          xl:text-[10px] 
                          
                          2xl:text-xs
                          `}
                          >
                            {exp.period}
                          </p>

                          <div
                            className={`
                              absolute right-[-4%] overflow-hidden flex items-baseline justify-center bg-gradient-to-b from-[hsl(56,48%,72%)] to-[hsl(44,56%,84%)] rounded-full border-[hsl(44,56%,84%)]
                              
                              lg:w-30 lg:h-30 lg:border-y-3 lg:border-x-1
                              
                              xl:w-40 xl:h-40 xl:border-y-4 xl:border-x-2 

                              2xl:w-50 2xl:h-50
                          `}
                          >
                            <div
                              className={`
                          z-10 absolute inset-0 w-full h-full bg-white/10   mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:80%] pointer-events-none
                          `}
                            />
                            <div
                              className={`
                                flex z-20 items-center justify-center bg-gradient-to-b from-[hsl(45,83%,74%)] to-[hsla(41,74%,70%,0.3)] rounded-full border-[hsl(44,56%,84%)]

                                lg:w-21 lg:h-21 lg:mt-2 lg:border-y-1 lg:border-x-2 

                                xl:w-30 xl:h-30 
                                
                                2xl:w-40 2xl:h-40
                            `}
                            >
                              <span
                                className={`
                            text-white/90 font-semibold 
                              
                              lg:text-[10px] lg:px-1 lg:py-0.5 lg:ml-2

                              xl:text-sm

                              2xl:text-xl 2xl:px-2 2xl:py-1 2xl:ml-4
                              `}
                              >
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {slide.length === 1 && (
                      <div
                        className={`
                          relative rounded-xl bg-gradient-to-b from-[hsl(51,54%,81%)] via-[hsl(47,47%,85%)] to-[hsl(44,56%,84%)] flex items-center justify-center text-gray-500 overflow-hidden
                          
                          lg:h-22 lg:p-2

                          xl:h-30 xl:p-3
                          
                          2xl:h-40 2xl:p-5`}
                      >
                        <div className="absolute inset-0 w-full h-full bg-black/10 pointer-events-none"></div>
                        <span
                          className={`
                          z-10 font-light

                          lg:text-[10px]

                          xl:text-xs
                          
                          2xl:text-md
                          `}
                        >
                          No more experiences
                        </span>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      {/* NAV + Pagination */}
      <div className=" w-full flex items-center justify-center px-6 py-4 gap-4">
        <button
          ref={prevRef}
          className={`
              hover:scale-105 duration-700 cursor-pointer
              
              lg:px-2 lg:py-1
              
              2xl:px-4 2xl:py-2
            `}
        >
          <div
            className={`
              bg-[url(/images/icon-arrow.png)] bg-center bg-contain rotate-180
            
            lg:w-8 lg:h-8

            xl:w-10 xl:h-10

            2xl:w-12 2xl:h-12
            `}
          ></div>
        </button>

        {/* Custom pagination di tengah */}
        <div className="flex justify-center">
          <div className="custom-pagination flex gap-2"></div>
        </div>

        <button
          ref={nextRef}
          className={`
            hover:scale-105 duration-700 cursor-pointer
            
            lg:px-2 lg:py-1
              
            2xl:px-4 2xl:py-2
            `}
        >
          <div
            className={`
            bg-[url(/images/icon-arrow.png)] bg-center bg-contain
            
            lg:w-8 lg:h-8

            xl:w-10 xl:h-10

            2xl:w-12 2xl:h-12`}
          ></div>
        </button>
      </div>
    </div>
  );
}
