import Image from "next/image";

export default function CardSkill({ iconSkill, idx }) {
  return (
    <div
      className={`relative
    bg-transparent  border-[hsla(251,7%,54%,0.3)] rounded-full group
    flex items-center justify-center hover:border-dotted hover:border-[hsla(55,92%,95%,0.3)]   transition-all duration-300 ease-in hover:scale-105 
    
     w-10 h-10 border-1

     lg:w-12 lg:h-12

     2xl:w-16 2xl:h-16 2xl:border-2
    `}
    >
      <div
        className={`
    bg-[hsl(251,7%,54%)] flex items-center justify-center rounded-full
    hover:bg-[hsl(55,92%,95%)] transition-all duration-200 ease-in

     w-8 h-8 

     lg:w-10 lg:h-10

     2xl:w-14 2xl:h-14
    `}
      >
        <div
          className={`z-12 
        bg-[hsl(55,92%,95%)] absolute  left-1/2 -translate-x-1/2 mask-[url(/images/icon-star1.png)] mask-center mask-no-repeat [mask-size:100%]
        flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in
        
        w-[10px] h-[10px] bottom-[-14%]
        
        lg:w-[14px] lg:h-[14px]

        2xl:w-5 2xl:h-5 2xl:bottom-[-18%]
        `}
        >
          <div
            className={`
        bg-[hsl(37,50%,57%)] mask-[url(/images/icon-star1.png)] mask-center mask-no-repeat [mask-size:100%]
        
        w-2 h-2
        
        lg:w-3 lg:h-3

        2xl:w-4 2xl:h-4
        `}
          ></div>
        </div>
        <div
          className={`
            bg-[hsl(235,5%,43%)] mask-[url(/images/frame-clover.png)] mask-center mask-no-repeat [mask-size:100%] 
            flex items-center justify-center overflow-hidden group-hover:bg-[hsl(37,50%,57%)]
            rounded-full
            
            w-[30px] h-[30px]

            lg:w-9 lg:h-9

            2xl:w-13 2xl:h-13
      `}
        >
          <Image
            className={`
              scale-100 rounded-full
              
              lg:scale-130 2xl:scale-160
              `}
            src={iconSkill}
            alt="icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
