"use client";

import HeroBackground from "@/components/sections/HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="z-[50] lg:z-[999] relative  overflow-hidden w-full h-full flex items-center justify-center ">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
