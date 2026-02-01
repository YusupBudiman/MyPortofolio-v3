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
    <div className="relative flex flex-col items-start justify-center">
      <Toast message={toast} />

      {/* Tittle */}
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
            mask-[url(/images/icon-star1.png)] bg-[hsl(11,35%,28%)] mask-contain mask-center mask-no-repeat
        
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
          Projects
        </h2>
      </div>

      {/* frame */}
      <div
        className={`
          relative flex flex-col items-center justify-center bg-gradient-to-b from-[hsl(34,81%,72%)] via-[hsl(20,58%,46%)] to-[hsl(42,61%,59%)]

          lg:w-[30rem] lg:h-[18rem] lg:p-[8px] lg:rounded-tr-[40px]

          xl:w-[40rem] xl:h-[24rem] xl:p-[12px] xl:rounded-tr-[60px]

          2xl:w-[72rem] 2xl:h-[34rem] 2xl:p-[16px] 2xl:rounded-tr-[100px]
        `}
      >
        <div
          className={`
            z-1 absolute bg-gradient-to-r from-[hsla(25,59%,51%,0.4)] via-[hsla(25,59%,51%,0.8)] to-[hsl(25,59%,51%)] mask-[url(/images/roof1.png)] mask-contain mask-center mask-no-repeat
            
            lg:w-[180px] lg:h-[100px] lg:top-[-10%] lg:right-[-6%]

            xl:w-[240px] xl:h-[100px] xl:top-[-5%] 

            2xl:w-[400px] 2xl:h-[200px] 2xl:top-[-9%] 2xl:right-[-5%]
        `}
        ></div>

        {projects[activeIndex]?.title && (
          <h2
            className={`
              text-[hsl(24,59%,27%)] font-bold

              lg:text-sm lg:mb-1

              xl:text-lg xl:mb-2

              2xl:text-2xl 2xl:mb-4 
            `}
          >
            {projects[activeIndex].title}
          </h2>
        )}

        <ProjectSlider
          projects={projects}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* button demo / code */}
        <div
          className={`
            absolute z-20 transform -translate-x-1/2 flex flex-col 
        
            lg:top-[13%] lg:right-[-11%] lg:gap-1

            xl:top-[14%] xl:right-[-12%] xl:gap-2 
        
            2xl:top-[16%] 2xl:right-[-9%]
        `}
        >
          <ProjectActionButton
            link={projects[activeIndex]?.github}
            onEmpty={() => showToast("Code tidak tersedia")}
          >
            <FaCode
              className={`
              text-[hsl(23,61%,27%)] group-hover:animate-spin

               lg:text-md

               xl:text-lg

               2xl:text-2xl
              `}
            />
          </ProjectActionButton>

          <ProjectActionButton
            link={projects[activeIndex]?.demo}
            onEmpty={() => showToast("Demo tidak tersedia")}
          >
            <FaPlay
              className={`
              text-[hsl(23,61%,27%)] group-hover:animate-spin

              lg:text-sm

              xl:text-lg
              
              2xl:text-2xl
              `}
            />
          </ProjectActionButton>

          <div
            className={`
              z-10 absolute  rotate-45 left-[36%] top-[-10%]  border-[hsl(49,35%,64%)]
        
              lg:w-[10px] lg:h-[10px] lg:border-b-2 lg:border-r-1 lg:border-t-1 lg:border-l-3

              xl:w-[16px] xl:h-[16px] xl:border-r-2 xl:border-l-4
        
              2xl:w-[20px] 2xl:h-[20px] 2xl:border-b-4 2xl:border-r-2 2xl:border-t-2
        `}
          ></div>

          <div
            className={`
              z-10 absolute  border-[hsl(49,35%,64%)] rotate-45 
        
              lg:w-[6px] lg:h-[6px] lg:border-l-1 lg:border-b-1 lg:border-r-0.5 lg:border-t-1 lg:top-[47%] lg:left-[42%]
              
              xl:w-[8px] xl:h-[8px] xl:border-l-2 xl:border-b-2 xl:border-r-1

              2xl:w-[14px] 2xl:h-[14px] 2xl:border-l-4 2xl:border-b-4 2xl:border-r-2 2xl:border-t-2  2xl:top-[46%] 2xl:left-[40%]
        `}
          >
            <div
              className={`
                absolute  bottom-0 right-0 bg-[hsl(49,35%,64%)]
                
                lg:w-[2px] lg:h-[2px]

                xl:w-[3px] xl:h-[3px]
                
                2xl:w-[4px] 2xl:h-[4px]
          `}
            ></div>
          </div>

          <div
            className={`
              z-10 absolute  bg-[url('/images/charm1.png')] bg-contain bg-center bg-no-repeat
              
              lg:w-[50px] lg:h-[50px] lg:left-[-10%] lg:bottom-[-60%]

              xl:w-[80px] xl:h-[80px] xl:left-[-17%] xl:bottom-[-62%]

              2xl:w-[120px] 2xl:h-[120px] 2xl:left-[-24%] 2xl:bottom-[-70%]
        `}
          ></div>
        </div>
      </div>
    </div>
  );
}
