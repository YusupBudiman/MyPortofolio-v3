"use client";

import HeroBackground from "@/components/sections/HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="z-[999] relative min-h-screen overflow-hidden w-full flex bg-gradient-to-b from-[#07312c] via-[#418170] to-[#fbf7cb]">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
