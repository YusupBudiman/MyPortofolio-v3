"use client";

import HeroBackground from "@/components/sections/HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="z-[20] lg:z-[999] relative  overflow-hidden w-full h-full flex bg-gradient-to-b from-[#07312c] via-[#418170] to-[#fbf7cb]">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
