export default function NavExperienceMobile() {
  return (
    <div
      className={`
       flex w-full  items-center justify-center px-6 py-4 gap-4
       lg:hidden
       `}
    >
      <button
        ref={prevRef}
        className={`
              hover:scale-105 duration-700 cursor-pointer
              
              lg:px-2 lg:py-1
              
              2xl:px-4 2xl:py-2
            `}
      >
        <div
          className={`
              bg-[url(/images/icon-arrow.png)] bg-center bg-contain rotate-180
            
            lg:w-8 lg:h-8

            xl:w-10 xl:h-10

            2xl:w-12 2xl:h-12
            `}
        ></div>
      </button>

      {/* Custom pagination di tengah */}
      <div className="flex justify-center">
        <div className="custom-pagination flex gap-2"></div>
      </div>

      <button
        ref={nextRef}
        className={`
            hover:scale-105 duration-700 cursor-pointer
            
            lg:px-2 lg:py-1
              
            2xl:px-4 2xl:py-2
            `}
      >
        <div
          className={`
            bg-[url(/images/icon-arrow.png)] bg-center bg-contain
            
            lg:w-8 lg:h-8

            xl:w-10 xl:h-10

            2xl:w-12 2xl:h-12`}
        ></div>
      </button>
    </div>
  );
}
