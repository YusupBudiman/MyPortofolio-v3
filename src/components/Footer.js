"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  { name: "Email", url: "mailto:yusupbudiman3@gmail.com" },
  { name: "GitHub", url: "https://github.com/YusupBudiman" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yusupbudiman" },
];

export default function Footer() {
  const [time, setTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <footer className="relative bg-[hsl(101,12%,49%)] w-full h-full">
      <div
        className={`
              absolute z-2 bg-gradient-to-r from-[hsl(69,25%,55%)] via-[hsl(44,63%,58%)] to-[hsl(34,85%,62%)]
              top-0 left-0
              w-full h-1

              lg:h-1.5
              
              `}
      />
      <div
        className={`absolute z-1
          w-full h-full bg-[hsl(101,12%,47%)] mask-[url('/images/pattern1.png')] mask-center mask-repeat [mask-size:60%]
          lg:[mask-size:20%]
          `}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-between lg:px-8">
        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <h2
            className={`
             uppercase tracking-widest text-[hsl(43,43%,84%)] font-bold 

             text-[10px] 
             2xl:text-xs
             `}
          >
            Local Time
          </h2>

          {mounted && time && (
            <p
              className={`
            font-medium text-[hsl(43,43%,84%)] 
            
            text-xs 
            2xl:text-sm
            `}
            >
              {formatDate(time)} | {formatTime(time)}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center w-full lg:w-auto">
          <h2
            className={`
            uppercase tracking-widest text-[hsl(43,43%,84%)] font-bold 
            
            text-xs
            lg:text-[10px] 
            2xl:text-xs
            `}
          >
            Socials
          </h2>

          <ul
            className={`
              flex flex-col items-center justify-center gap-4 mt-4 font-medium text-[hsl(43,43%,84%)]

              text-sm
              lg:text-[10px] lg:flex-row lg:mt-2
              2xl:text-sm
        `}
          >
            {socials.map((item) => (
              <li key={item.name} className=" hover:text-[hsl(40,41%,31%)]">
                <Link href={item.url} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
