"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[100vw] py-10 relative  flex justify-center items-center">
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
          prev: { shadow: false, translate: ["-50%", 0, -200], scale: 0.95 },
          next: { shadow: false, translate: ["50%", 0, -200], scale: 0.95 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="mx-4 lg:mx-8">
            <ProjectCard {...project} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button demo/code*/}
      <div className="absolute bg-[#cacaca] bottom-1  lg:bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 rounded-full">
        {projects[activeIndex].github && (
          <a
            href={projects[activeIndex].github}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-black px-2 py-1 lg:px-4 lg:py-2 rounded-l-full hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Code
          </a>
        )}
        {projects[activeIndex].demo && (
          <a
            href={projects[activeIndex].demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-black px-2 py-1 lg:px-4 lg:py-2 rounded-r-full hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
