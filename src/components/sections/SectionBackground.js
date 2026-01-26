"use client";

export default function SectionBackground({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`relative w-full flex justify-center overflow-hidden ${className}`}
    >
      {/* wrapper */}
      <div className="relative flex w-full items-stretch">
        {/* side background */}
        <div className="w-[6vw] bg-[hsl(101,12%,47%)] mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:250%]" />

        {/* decoration */}
        <div className="z-10 absolute left-[-2%] bottom-[50%] w-[80px] h-[80px] bg-[url('/images/dec-lantern1.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute left-[4%] bottom-[20%] rotate-350 w-[80px] h-[80px] bg-[url('/images/dec-lantern1.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute left-[20%] top-[0%] rotate-355 w-[25px] h-[25px] bg-[url('/images/dec-lantern2.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute left-[47%] top-[4%] rotate-355 w-[60px] h-[60px] opacity-80 bg-[url('/images/dec-lantern6.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute right-[0%] top-[30%] rotate-355 w-[100px] h-[100px] opacity-80 bg-[url('/images/dec-lantern5.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute right-[3%] top-[32%] w-[120px] h-[120px] opacity-80 bg-[url('/images/dec-lantern7.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute right-[5%] top-[15%] w-[200px] h-[200px] opacity-80 bg-[url('/images/dec-text.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute left-[13%] bottom-[10%] w-[200px] h-[200px] opacity-80 bg-[url('/images/dec-text2.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="z-10 absolute left-[0%] bottom-[-15%] w-[400px] h-[400px] opacity-80 bg-[url('/images/dec-mountain.png')] bg-contain bg-no-repeat bg-center"></div>
        {/* main background */}
        <div className="relative bg-[hsl(55,29%,85%)] w-[94vw] min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* gradient line */}
          <div
            className="absolute z-1 w-[8px] h-full left-0 bg-gradient-to-b 
            from-[hsl(69,25%,55%)] via-[hsl(44,63%,58%)] 
            via-[hsl(34,85%,62%)] via-[hsl(44,63%,58%)] to-[hsl(69,25%,55%)]"
          />

          {/* texture */}
          <div className="absolute inset-0 bg-[url('/images/art5.png')] bg-cover z-0" />

          {children}
        </div>
      </div>
    </section>
  );
}
