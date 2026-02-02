export default function MobileButtonBackgroun({
  children,
  id,
  className = "",
}) {
  return (
    <div
      id={id}
      className={`w-full h-[24vh]  bg-[hsl(101,12%,49%)]
            absolute z-10 flex transform 
        
            bottom-0 gap-2 

            lg:bg-transparent
            ${className}
        `}
    >
      <div
        className={`
              absolute z-20 bg-gradient-to-r from-[hsl(69,25%,55%)] via-[hsl(44,63%,58%)] to-[hsl(34,85%,62%)]
              
              w-full h-1
              lg:hidden
              `}
      />
      <div
        className={`
          w-full h-full bg-[hsl(101,12%,47%)] mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:50%]
          lg:hidden`}
      />
      <div className=" w-full absolute flex top-[-10%] lg:top-[50%]">
        {children}
      </div>
    </div>
  );
}
