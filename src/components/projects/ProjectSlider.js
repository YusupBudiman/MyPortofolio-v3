"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import ProjectCard from "./ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function ProjectSlider({
  projects,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <div
      className="relative z-10 bg-[hsl(55,29%,85%)] w-full h-full 
      flex items-center justify-center overflow-hidden border-4 border-[hsl(39,22%,58%)]"
    >
      <div className="w-full h-full py-10 relative flex justify-center items-center">
        <Swiper
          modules={[EffectCreative]}
          effect="creative"
          initialSlide={1}
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop={false}
          pagination={{ clickable: true }}
          navigation
          creativeEffect={{
            prev: {
              shadow: false,
              translate: ["-95%", 0, -200],
              scale: 0.95,
            },
            next: {
              shadow: false,
              translate: ["95%", 0, -200],
              scale: 0.95,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={project.id}
              className={`
                flex justify-center

                lg:!w-[25rem] 

                xl:!w-[35rem] 
                
                2xl:!w-[60rem] 
                `}
            >
              <ProjectCard {...project} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
