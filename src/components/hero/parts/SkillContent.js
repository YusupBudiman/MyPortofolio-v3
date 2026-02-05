import ContactOrbButton from "@/components/ui/ContactOrbButton";
import Mask from "@/components/hero/parts/HeroMask";
import CardSkill from "./CardSkill";
import skills from "@/data/skills";

// icon
import { IoMdDownload } from "react-icons/io";

export default function SkillContent() {
  return (
    <div
      id="profile"
      className={` 
              z-20 absolute flex flex-col items-start justify-between
        
              w-full h-full px-2 py-4
    
              lg:top-[10%] lg:left-[12%] lg:w-[420px] lg:h-auto
    
              2xl:top-[20%] 2xl:left-[14%] 2xl:w-[540px]
        `}
    >
      {/* TITLE */}
      <div
        className={`
              flex items-center justify-center  
    
              mt-24 gap-2 
    
              lg:mb-6 lg:mt-0
    
              2xl:gap-4 2xl:mb-8
              `}
      >
        <Mask
          className={`
                  bg-[hsl(55,47%,90%)] mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
             
                  w-4 h-4
    
                  2xl:w-8 2xl:h-8
            `}
        />
        <h1
          className={`
                  title-fantasy font-extrabold text-[hsl(55,47%,90%)]
                  
                  text-base
    
                  lg:text-2xl
    
                  2xl:text-4xl
             `}
        >
          Full Stack
        </h1>

        <div
          className={`
                rounded-full bg-[hsl(55,47%,90%)] 
    
                w-1 h-1
    
                lg:w-1.5 lg:h-1.5
    
                2xl:w-2 2xl:h-2
                `}
        />
        <h1
          className={`
                  title-fantasy font-extrabold text-[hsl(55,47%,90%)]
    
                  text-base
    
                  lg:text-2xl
             
                  2xl:text-4xl 
             `}
        >
          Developer
        </h1>
      </div>

      <div
        className={`
                flex flex-col
            
                w-full h-[28vh] px-4
            
                lg:w-[320px] lg:h-auto lg:items-start
            `}
      >
        {/* name */}
        <div className="relative flex flex-col items-start">
          <div
            className={`relative
                  w-full h-full flex items-center justify-between py-2 mb-2
    
                  lg:flex-col lg:py-0 lg:mb-0 lg:items-start
                  `}
          >
            <h2
              className={`
                  title-fantasy font-bold text-[hsl(76,35%,92%)] 
    
                  text-lg 
                  
                  lg:text-xl lg:mb-2
    
                  2xl:mb-6 2xl:text-3xl
                  `}
            >
              Skills
            </h2>

            {/* underline */}
            <div
              className={`
                     w-full h-[1px] flex items-center justify-around 
                bg-gradient-to-r from-[hsl(180,16%,54%)] via-[hsla(180,16%,54%,0.3)] to-[hsl(180,16%,54%)]
                absolute bottom-0
                lg:mb-4 lg:relative
    
                2xl:mb-6
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                      rounded-full bg-[hsl(224,61%,93%)]
    
                      w-1 h-1
    
                       2xl:w-2 2xl:h-2
                      `}
                />
                <div
                  className={`
                        rounded-full bg-[hsl(224,61%,93%)]
    
                        w-0.5 h-0.5
    
                        2xl:w-1 2xl:h-1
                      `}
                />
              </div>
              <div
                className={`
                    rounded-full bg-[hsl(224,61%,93%)]
    
                    w-0.5 h-0.5
    
                    2xl:w-1 2xl:h-1
                    `}
              />
              <div
                className={`
                    rounded-full bg-[hsl(224,61%,93%)]
    
                    w-0.5 h-0.5 
    
                    2xl:w-1 2xl:h-1 
                    `}
              />
              <div className="flex items-center gap-2">
                <div
                  className={`
                      rounded-full bg-[hsl(224,61%,93%)]
    
                      w-0.5 h-0.5
                      
                      2xl:w-1 2xl:h-1  
                      `}
                />
                <div
                  className={`
                      rounded-full bg-[hsl(224,61%,93%)]
    
                      w-1 h-1
    
                      2xl:w-2 2xl:h-2  
                      `}
                />
              </div>
              <div
                className={`
                    rounded-full bg-[hsl(224,61%,93%)]
    
                    w-0.5 h-0.5
    
                    2xl:w-1 2xl:h-1  
                    `}
              />
            </div>

            {/* buttons */}
            <div
              className={`
                  flex items-center gap-1 
    
                  lg:hidden`}
            >
              <ContactOrbButton
                className={
                  "mask-[url(/images/icon-message2.png)] mask-contain mask-center mask-no-repeat bg-[hsl(357,14%,33%)]"
                }
                onClick={() => scrollToIndex(3)}
              />

              <div className="lg:hidden">
                <ContactOrbButton
                  label={<IoMdDownload />}
                  className={"text-[hsl(357,14%,33%)]"}
                />
              </div>
            </div>
          </div>
          {/* skill */}
          <div
            className="w-full h-full flex items-center justify-start flex-wrap
          gap-4"
          >
            {skills.map((item, i) => (
              <CardSkill key={i} idx={i} iconSkill={item.img} />
            ))}
          </div>
        </div>

        {/* preview */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
