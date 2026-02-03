"use client";

export default function ContactOrbButton({ className, label, onClick }) {
  return (
    <div
      role="button"
      aria-label="Contact Me"
      onClick={onClick}
      className={`
        rounded-full flex items-center justify-center group relative cursor-pointer
      
        w-[30px] h-[30px]

        lg:w-[50px] lg:h-[50px]

        2xl:w-[54px] 2xl:h-[54px]
      `}
    >
      <div className="mask-[url(/images/border3.png)] mask-contain mask-center mask-no-repeat bg-[hsl(54,54%,78%)] w-full h-full flex items-center justify-center hover:bg-[hsl(150,17%,98%)] transition-colors duration-700">
        <div
          className={`
            mask-[url(/images/border3.png)] mask-contain mask-center mask-no-repeat bg-[hsl(54,54%,78%)] flex items-center justify-center group-hover:bg-[hsl(181,40%,35%)]
          
            w-[28px] h-[28px]

            lg:w-[48px] lg:h-[48px]

            2xl:w-[52px] 2xl:h-[52px] 
          `}
        >
          <div
            className={`
              mask-[url(/images/border3.png)] mask-contain mask-center mask-no-repeat bg-[hsl(48,71%,81%)] flex items-center justify-center group-hover:bg-[hsl(176,32%,47%)]
             
              w-[24px] h-[24px]

              lg:w-[44px] lg:h-[44px]
              
              2xl:w-[48px] 2xl:h-[48px] 
             `}
          >
            <div
              className={`
                bg-[hsl(49,84%,95%)] rounded-full flex items-center justify-center group-hover:bg-[hsl(177,36%,40%)]
            
                w-[22px] h-[22px]

                lg:w-[36px] lg:h-[36px]

                2xl:w-[40px] 2xl:h-[40px]
            `}
            >
              <div
                className={`flex items-center justify-center
                    group-hover:bg-[hsl(150,17%,98%)]
                
                  w-3 h-3

                  lg:w-5 lg:h-5
                  
                  2xl:w-6 2xl:h-6
                ${className}`}
              >
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
