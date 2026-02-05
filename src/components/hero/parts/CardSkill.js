import Image from "next/image";

export default function CardSkill({ iconSkill, idx }) {
  return (
    <div
      className={`relative
    w-10 h-10 bg-transparent border-1 border-[hsla(251,7%,54%,0.3)] rounded-full group
    flex items-center justify-center hover:border-dotted hover:border-[hsla(55,92%,95%,0.3)]   transition-all duration-300 ease-in hover:scale-105 
    `}
    >
      <div
        className={`
    bg-[hsl(251,7%,54%)] flex items-center justify-center rounded-full
    hover:bg-[hsl(55,92%,95%)] 
     w-8 h-8 transition-all duration-200 ease-in


    `}
      >
        <div
          className={`z-12 
        bg-[hsl(55,92%,95%)] absolute bottom-[-14%] left-1/2 -translate-x-1/2 mask-[url(/images/icon-star1.png)] mask-center mask-no-repeat [mask-size:100%]
        flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in
        w-[10px] h-[10px]`}
        >
          <div
            className={`
        bg-[hsl(37,50%,57%)] mask-[url(/images/icon-star1.png)] mask-center mask-no-repeat [mask-size:100%]
        w-2 h-2`}
          ></div>
        </div>
        <div
          className={`
            bg-[hsl(235,5%,43%)] mask-[url(/images/frame-clover.png)] mask-center mask-no-repeat [mask-size:100%] 
            flex items-center justify-center overflow-hidden group-hover:bg-[hsl(37,50%,57%)]
            rounded-full
            w-[30px] h-[30px]
      `}
        >
          <Image
            className="scale-100 rounded-full"
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
