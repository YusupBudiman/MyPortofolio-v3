"use client";

export default function ProjectActionButton({ link, onEmpty, children }) {
  const handleClick = (e) => {
    if (!link) {
      e.preventDefault();
      onEmpty?.();
    }
  };

  return (
    <div
      className={`
        z-20  mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%] bg-[hsl(25,65%,47%)] rounded-full flex items-center justify-center group
      
        lg:w-[40px] lg:h-[40px]

        xl:w-[60px] xl:h-[60px]

        2xl:w-[80px] 2xl:h-[80px]
      `}
    >
      <div
        className={`
          mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%] bg-[hsl(36,84%,62%)] rounded-full flex items-center justify-center
        
          lg:w-[45px] lg:h-[45px]

          xl:w-[55px] xl:h-[55px]

          2xl:w-[75px] 2xl:h-[75px]
        `}
      >
        <a
          href={link || "#"}
          onClick={handleClick}
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`
            mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%] bg-[hsl(46,100%,91%)] rounded-full flex items-center justify-center transition-all hover:scale-110
          
            lg:w-[35px] lg:h-[35px]

            xl:w-[45px] xl:h-[45px]

            2xl:w-[60px] 2xl:h-[60px]
          `}
        >
          {children}
        </a>
      </div>
    </div>
  );
}
