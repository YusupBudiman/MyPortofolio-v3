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
    <footer className="w-full h-full flex items-center justify-center lg:justify-between lg:px-4 z-99">
      <div className="hidden lg:flex items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className=" text-xs uppercase tracking-widest text-[#d6d6d6] font-semibold">
            Local Time
          </h2>

          {mounted && time && (
            <p className="text-sm font-medium text-[#d6d6d6]">
              {formatDate(time)} | {formatTime(time)}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center w-full lg:w-auto">
        <h2 className="text-xs uppercase tracking-widest text-[#d6d6d6] font-semibold">
          Socials
        </h2>

        <ul
          className="flex flex-col items-center justify-center gap-4 mt-2 text-sm font-medium text-[#d6d6d6]
        lg:flex-row"
        >
          {socials.map((item) => (
            <li key={item.name}>
              <Link href={item.url} target="_blank">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
