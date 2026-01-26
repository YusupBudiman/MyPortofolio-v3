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
      className="z-20 w-[80px] h-[80px] mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%]
      bg-[hsl(25,65%,47%)] rounded-full flex items-center justify-center group"
    >
      <div
        className="w-[75px] h-[75px] mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%]
        bg-[hsl(36,84%,62%)] rounded-full flex items-center justify-center"
      >
        <a
          href={link || "#"}
          onClick={handleClick}
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="w-[60px] h-[60px] mask-[url('/images/border3.png')] mask-center mask-no-repeat [mask-size:100%]
          bg-[hsl(46,100%,91%)] rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          {children}
        </a>
      </div>
    </div>
  );
}
