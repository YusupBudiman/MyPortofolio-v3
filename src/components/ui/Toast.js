"use client";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed z-[999] bottom-6 right-6 animate-slideLeft">
      <button className="relative w-[260px] h-[56px] cursor-pointer">
        {/* Icon  */}
        <div
          className="z-10 absolute right-[-15%] bottom-[-12%] rotate-340 w-34 h-20
            mask-[url('/images/iconbtn1.png')] mask-center mask-no-repeat
            [mask-size:100%] bg-white"
        />
        <div
          className="z-10 absolute left-[9%] bottom-[-20%] rotate-90 w-10 h-20
            mask-[url('/images/border2.png')] mask-center mask-no-repeat
            [mask-size:100%] bg-white"
        />

        {/* SVG Button */}
        <svg viewBox="0 0 260 56" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(176, 38%, 39%)" />
              <stop offset="50%" stopColor="hsl(176, 38%, 39%)" />
              <stop offset="100%" stopColor="hsl(176, 38%, 39%)" />
            </linearGradient>
            <linearGradient id="inner" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(176, 38%, 39%)" />
              <stop offset="50%" stopColor="hsl(176, 38%, 39%)" />
              <stop offset="100%" stopColor="hsl(176, 38%, 39%)" />
            </linearGradient>
            <linearGradient id="stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbf7e8" />
              <stop offset="50%" stopColor="#fefbef" />
              <stop offset="100%" stopColor="#fbf7e8" />
            </linearGradient>
          </defs>

          <path
            d="M36 8 H222 V12 Q220 23 195 44 V48 H36 V44 Q22 33 12 28 Q22 23 36 12 V8 Z"
            fill="url(#main)"
          />
          <path
            d="M48 14 H212 Q206 28 212 42 H48 Q24 28 48 14 Z"
            fill="url(#inner)"
            opacity="0.95"
          />
          <path
            d="M48 14 H212 Q206 28 212 42 H48 Q24 28 48 14 Z"
            fill="none"
            stroke="url(#stroke)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Message */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <span className="text-xs font-semibold text-white mr-4">
            {message}
          </span>
        </div>
      </button>
    </div>
  );
}
