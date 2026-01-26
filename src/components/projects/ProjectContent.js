"use client";

import { useState } from "react";
import { FaCode, FaPlay } from "react-icons/fa6";

import { useToast } from "@/utils/toast";
import Toast from "@/components/ui/Toast";
import ProjectActionButton from "@/components/ui/ProjectActionButton";
import ProjectSlider from "./ProjectSlider";

export default function ProjectContent({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { toast, showToast } = useToast();

  return (
    <>
      <Toast message={toast} />

      <div className="z-20 absolute top-[13%] left-[20%] flex items-center justify-center gap-4">
        <div className="mask-[url(/images/icon-star1.png)] bg-[hsl(11,35%,28%)] w-[30px] h-[30px] mask-contain mask-center mask-no-repeat"></div>
        <h2 className="text-4xl font-bold text-[hsl(11,35%,28%)]">Projects</h2>
      </div>
      {/* frame */}
      <div
        className="relative z-10 max-w-6xl max-h-5xl 
        p-[16px] pt-[64px] rounded-tr-[100px]
        bg-gradient-to-b from-[hsl(34,81%,72%)] via-[hsl(20,58%,46%)] to-[hsl(42,61%,59%)]
        shadow-[10px_18px_18px_rgba(0,0,0,0.3)]"
      >
        <div className="z-1 absolute w-[400px] h-[200px] top-[-9%] right-[-5%] bg-gradient-to-r from-[hsla(25,59%,51%,0.4)] via-[hsla(25,59%,51%,0.8)] to-[hsl(25,59%,51%)] mask-[url(/images/roof1.png)] mask-contain mask-center mask-no-repeat"></div>

        {projects[activeIndex]?.title && (
          <h2
            className="absolute top-4 left-1/2 transform -translate-x-1/2
            text-[hsl(24,59%,27%)] text-2xl font-bold"
          >
            {projects[activeIndex].title}
          </h2>
        )}

        <ProjectSlider
          projects={projects}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      {/* button demo / code */}
      <div
        className="absolute z-20 top-[31%] right-[12%] transform 
        -translate-x-1/2 flex flex-col gap-2"
      >
        <ProjectActionButton
          link={projects[activeIndex]?.github}
          onEmpty={() => showToast("Code tidak tersedia")}
        >
          <FaCode className="text-[hsl(23,61%,27%)] text-2xl group-hover:animate-spin" />
        </ProjectActionButton>

        <ProjectActionButton
          link={projects[activeIndex]?.demo}
          onEmpty={() => showToast("Demo tidak tersedia")}
        >
          <FaPlay className="text-[hsl(23,61%,27%)] text-2xl group-hover:animate-spin" />
        </ProjectActionButton>

        <div className="z-10 absolute w-[20px] h-[20px] rotate-45 left-[36%] top-[-10%] border-l-4 border-b-4 border-r-2 border-t-2  border-[hsl(49,35%,64%)]"></div>

        <div className="z-10 absolute w-[14px] h-[14px] rotate-45 left-[40%] top-[46%] border-l-4 border-b-4 border-r-2 border-t-2  border-[hsl(49,35%,64%)]">
          <div className="absolute w-[4px] h-[4px] bottom-0 right-0 bg-[hsl(49,35%,64%)]"></div>
        </div>

        <div className="z-10 absolute w-[120px] h-[120px] left-[-24%] bottom-[-70%] bg-[url('/images/charm1.png')] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </>
  );
}
