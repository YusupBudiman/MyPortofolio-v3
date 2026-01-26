"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  { name: "Email", url: "mailto:yourmail@example.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" },
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
    <footer className="w-full h-full flex items-center justify-center md:justify-between  z-99">
      <div className="hidden md:flex items-center justify-center gap-8">
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

        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xs uppercase tracking-widest text-[#d6d6d6] font-semibold">
            Open Source
          </h2>
          <p className="text-sm font-medium text-[#d6d6d6]">View on GitHub</p>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-auto">
        <h2 className="text-xs uppercase tracking-widest text-[#d6d6d6] font-semibold">
          Socials
        </h2>

        <ul className="flex items-center justify-evenly gap-6 mt-2 text-sm font-medium text-[#d6d6d6]">
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
