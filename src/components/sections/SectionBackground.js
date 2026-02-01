"use client";

export default function SectionBackground({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`relative w-full h-full flex justify-center overflow-hidden ${className}`}
    >
      {/* wrapper */}
      <div className="relative flex w-full items-stretch">
        {/* side background */}
        <div className="w-[6vw] bg-[hsl(101,12%,47%)] mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:250%]" />

        {/* decoration */}
        <div
          className={`
        z-10 absolute bg-[url('/images/dec-lantern1.png')] bg-contain bg-no-repeat bg-center bottom-[50%] left-[-2%]

        lg:w-[50px] lg:h-[50px]

        2xl:w-[80px] 2xl:h-[80px]
          `}
        ></div>
        <div
          className={`
          z-22 absolute  bg-[url('/images/dec-lantern1.png')] bg-contain bg-no-repeat bg-center bottom-[20%] rotate-350

          lg:w-[40px] lg:h-[40px] lg:left-[4.5%]
          
          2xl:w-[80px] 2xl:h-[80px] 2xl:left-[4%]`}
        ></div>
        <div
          className={`
          z-10 absolute left-[20%] top-[0%] rotate-355 bg-[url('/images/dec-lantern2.png')] bg-contain bg-no-repeat bg-center

          lg:w-[20px] lg:h-[20px]
            
          2xl:w-[25px] 2xl:h-[25px]
          `}
        ></div>
        <div
          className={`
          z-10 absolute left-[47%] top-[4%] rotate-355 opacity-80 bg-[url('/images/dec-lantern6.png')] bg-contain bg-no-repeat bg-center

          lg:w-[40px] lg:h-[40px]

          2xl:w-[60px] 2xl:h-[60px]
          `}
        ></div>
        <div
          className={`
          z-10 absolute right-[0%] top-[30%] rotate-355 opacity-80 bg-[url('/images/dec-lantern5.png')] bg-contain bg-no-repeat bg-center

          lg:w-[80px] lg:h-[80px]
          
          2xl:w-[100px] 2xl:h-[100px]
          `}
        ></div>
        <div
          className={`
          z-10 absolute right-[3%] top-[32%] opacity-80 bg-[url('/images/dec-lantern7.png')] bg-contain bg-no-repeat bg-center
          
          lg:w-[100px] lg:h-[100px]

          2xl:w-[120px] 2xl:h-[120px]
          `}
        ></div>
        <div
          className={`
          z-10 absolute top-[15%] opacity-80 bg-[url('/images/dec-text.png')] bg-contain bg-no-repeat bg-center
          
          lg:w-[140px] lg:h-[140px] lg:right-[6%] 

          2xl:w-[200px] 2xl:h-[200px] 2xl:right-[5%] 
          `}
        ></div>
        <div
          className={`
          z-10 absolute opacity-80 bg-[url('/images/dec-text2.png')] bg-contain bg-no-repeat bg-center

          lg:w-[120px] lg:h-[120px] lg:left-[17%] lg:bottom-[8%]

          2xl:w-[200px] 2xl:h-[200px] 2xl:left-[13%] 2xl:bottom-[10%]
          `}
        ></div>
        <div
          className={`
          z-21 absolute left-[0%] bottom-[-15%] bg-[url('/images/dec-mountain.png')] bg-contain bg-no-repeat bg-center
          
          lg:w-[250px] lg:h-[250px]
          
          2xl:w-[400px] 2xl:h-[400px]
          `}
        ></div>
        {/* main background */}
        <div className="relative bg-gradient-to-b from-[hsl(55,29%,85%)] via-[hsl(45,100%,97%)] to-[hsl(45,100%,97%)] w-[94vw] h-full flex flex-col items-center justify-center overflow-hidden">
          {/* gradient line */}
          <div
            className={`
              absolute z-20 h-full left-0 bg-gradient-to-b from-[hsl(69,25%,55%)] via-[hsl(44,63%,58%)] to-[hsl(34,85%,62%)]
              
              lg:w-1

              2xl:w-2 
              `}
          />

          {/* texture */}
          <div className="absolute inset-0 bg-[url('/images/art5.png')] bg-cover bg-center bg-no-repeat z-0" />

          {children}
        </div>
      </div>
    </section>
  );
}
