export default function NavSkillButton({
  iconNav,
  className,
  id,
  onClick,
  active,
}) {
  return (
    <div
      className={`
    relative bg-transparent  border-dotted  rounded-full flex items-center justify-center
    transition-all duration-300 w-12 h-12
    
    ${
      active
        ? "border-none bg-gradient-to-b pb-0.75 from-[hsl(48,50%,72%)] via-[hsl(72,11%,82%)] to-[hsl(163,47%,85%)]"
        : " border-dotted border-2 border-[hsl(171,29%,50%)]"
    }`}
      onClick={onClick}
    >
      <div
        className={`z-10
        absolute  mask-[url(/images/icon-star1.png)]  mask-center mask-no-repeat [mask-size:100%] 
        -top-1.5 left-1/2 -translate-x-1/2

        w-3 h-3
        ${active ? "bg-[hsl(48,50%,72%)]" : "bg-[hsl(175,38%,63%)]"}
        `}
      ></div>
      <div
        className={`
        relative flex items-center justify-center rounded-full overflow-hidden
        
         
        ${active ? "bg-[hsl(47,88%,97%)] border-2 border-[hsl(175,37%,38%)] w-11 h-11" : "bg-[hsl(175,37%,38%)] w-10 h-10"}
        `}
      >
        <div
          className={`
        absolute mask-[url(/images/border-btn1.png)] mask-center mask-no-repeat [mask-size:120%] 
        w-full h-full 
        ${active ? "bg-[hsl(163,47%,85%)]" : "bg-[hsl(171,29%,50%)]"}
        `}
        ></div>

        <span
          id={id}
          className={`
            w-4 h-4 text-base 
            ${active ? "text-[hsl(170,9%,27%)]" : "text-[hsl(133,69%,97%)]"}
            ${className}`}
        >
          {iconNav}
        </span>
      </div>
    </div>
  );
}
