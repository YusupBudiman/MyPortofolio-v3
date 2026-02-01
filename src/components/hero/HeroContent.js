"use client";

import { useEffect, useState, useMemo } from "react";

import { useFullpage } from "../FullpageProvider";
import { projects } from "@/data/Projects";
import { downloadCV } from "@/utils/downloadCV";

import ThemedButton from "../ui/ThemedButton";
import ProjectPreviewCard from "../ui/ProjectPreviewCard";
import ContactOrbButton from "../ui/ContactOrbButton";
import Mask from "../hero/parts/HeroMask";

export default function HeroContent() {
  const { scrollToIndex } = useFullpage();

  // === gather all project images ===
  const allImages = useMemo(() => {
    return projects.flatMap((project) => project.images);
  }, []);

  // === random preview ===
  const [previewImages, setPreviewImages] = useState([]);
  useEffect(() => {
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPreviewImages(shuffled);
  }, [allImages]);

  return (
    <>
      <div
        className={`
          z-20 absolute flex flex-col items-start 
    
          lg:top-[10%] lg:left-[12%] lg:w-[420px]

          2xl:top-[20%] 2xl:left-[14%] 2xl:w-[540px]
    `}
      >
        {/* TITLE */}
        <div
          className={`
          flex items-center justify-center  
          
          lg:gap-2 lg:mb-6

          2xl:gap-4 2xl:mb-8
          `}
        >
          <Mask
            className={`
              bg-white mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
         
              lg:w-4 lg:h-4

              2xl:w-8 2xl:h-8
        `}
          />
          <h1
            className={`
              title-fantasy font-extrabold text-white
              
              lg:text-2xl

              2xl:text-4xl
         `}
          >
            Full Stack
          </h1>
          <div
            className={`
            rounded-full bg-white  
            
            lg:w-1.5 lg:h-1.5

            2xl:w-2 2xl:h-2
            `}
          />
          <h1
            className={`
              title-fantasy font-extrabold text-white

              lg:text-2xl
         
              2xl:text-4xl 
         `}
          >
            Developer
          </h1>
        </div>

        <div className="w-[320px] flex flex-col items-start">
          {/* PROFILE */}
          <div className="flex flex-col items-start">
            <h2
              className={`
              title-fantasy font-bold text-white mb-4 
              
              lg:text-xl

              2xl:mb-6 2xl:text-3xl
              `}
            >
              Yusup Budiman
            </h2>

            {/* underline */}
            <div
              className={`
                relative w-full h-[1px] flex items-center justify-around 
            bg-gradient-to-r from-[hsl(180,16%,54%)] via-[hsla(180,16%,54%,0.3)] to-[hsl(180,16%,54%)]
            
            lg:mb-4

            2xl:mb-6
            `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  rounded-full bg-[hsl(224,61%,93%)]

                  lg:w-1 lg:h-1

                   2xl:w-2 2xl:h-2
                  `}
                />
                <div
                  className={`
                    rounded-full bg-[hsl(224,61%,93%)]

                    lg:w-0.5 lg:h-0.5

                    2xl:w-1 2xl:h-1
                  `}
                />
              </div>
              <div
                className={`
                rounded-full bg-[hsl(224,61%,93%)]

                lg:w-0.5 lg:h-0.5

                2xl:w-1 2xl:h-1
                `}
              />
              <div
                className={`
                rounded-full bg-[hsl(224,61%,93%)]

                lg:w-0.5 lg:h-0.5 

                2xl:w-1 2xl:h-1 
                `}
              />
              <div className="flex items-center gap-2">
                <div
                  className={`
                  rounded-full bg-[hsl(224,61%,93%)]

                  lg:w-0.5 lg:h-0.5
                  
                  2xl:w-1 2xl:h-1  
                  `}
                />
                <div
                  className={`
                  rounded-full bg-[hsl(224,61%,93%)]

                  lg:w-1 lg:h-1

                  2xl:w-2 2xl:h-2  
                  `}
                />
              </div>
              <div
                className={`
                rounded-full bg-[hsl(224,61%,93%)]

                lg:w-0.5 lg:h-0.5

                2xl:w-1 2xl:h-1  
                `}
              />
            </div>

            {/* buttons */}
            <div
              className={`
              flex items-center gap-1 

              lg:mb-4
               
              2xl:gap-2 2xl:mb-6`}
            >
              <ContactOrbButton onClick={() => scrollToIndex(3)} />

              <ThemedButton
                id="hero-button"
                label="Download CV"
                onClick={downloadCV}
              />
            </div>

            {/* description */}
            <p
              className={`
            text-[hsl(0,0%,97%)] text-start  

              text-xs
              
              lg:max-w-[240px] lg:mb-6 
              
              2xl:max-w-md 2xl:text-sm 2xl:mb-8
              `}
            >
              I build modern web applications from frontend to backend with a
              focus on performance, clarity, and a seamless user experience.
            </p>
          </div>

          {/* preview */}
          <ProjectPreviewCard
            previewImages={previewImages}
            onClick={() => scrollToIndex(1)}
          />
        </div>
      </div>

      <div className="flex flex-col absolute top-[18%] right-[18%] gap-4 z-30">
        <ContactOrbButton onClick={() => scrollToIndex(2)} />
        <ContactOrbButton />
      </div>
    </>
  );
}
