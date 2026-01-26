"use client";

export default function ThemedButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-[260px] h-[56px] cursor-pointer group"
    >
      {/* Icon kanan bawah */}
      <div
        className="absolute right-[-15%] bottom-[-12%] rotate-340 w-34 h-20 z-10
          mask-[url('/images/iconbtn1.png')] mask-center mask-no-repeat
          [mask-size:100%]
          transition-colors duration-150 bg-[#d7c88d] group-hover:bg-[#fbf7e8]"
      />

      <div
        className="absolute left-[9%] bottom-[-20%] rotate-90 w-10 h-20 z-10
          mask-[url('/images/border2.png')] mask-center mask-no-repeat
          [mask-size:100%] transition-colors duration-100 bg-[#e8dcb0] group-hover:bg-[#fbf7e8]"
      />

      {/* SVG Button */}
      <svg viewBox="0 0 260 56" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="theme-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e6ddb0" />
            <stop offset="50%" stopColor="#daca90" />
            <stop offset="100%" stopColor="#cbbf7f" />
          </linearGradient>
          <linearGradient
            id="theme-main-hover"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(176, 38%, 39%)" />
            <stop offset="50%" stopColor="hsl(176, 38%, 39%)" />
            <stop offset="100%" stopColor="hsl(176, 38%, 39%)" />
          </linearGradient>

          <linearGradient id="theme-inner" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbf7e8" />
            <stop offset="50%" stopColor="#fefbef" />
            <stop offset="100%" stopColor="#fbf7e8" />
          </linearGradient>
          <linearGradient
            id="theme-inner-hover"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(176, 38%, 39%)" />
            <stop offset="50%" stopColor="hsl(176, 38%, 39%)" />
            <stop offset="100%" stopColor="hsl(176, 38%, 39%)" />
          </linearGradient>

          <linearGradient
            id="theme-inner-stroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#daca90" />
            <stop offset="50%" stopColor="#e6ddb0" />
            <stop offset="100%" stopColor="#daca90" />
          </linearGradient>
          <linearGradient
            id="theme-inner-stroke-hover"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#fbf7e8" />
            <stop offset="50%" stopColor="#fefbef" />
            <stop offset="100%" stopColor="#fbf7e8" />
          </linearGradient>
        </defs>

        <path
          d="M36 8 H222 V12 Q220 23 195 44 V48 H36 V44 Q22 33 12 28 Q22 23 36 12 V8 Z"
          fill="url(#theme-main)"
          className="transition-all duration-300 group-hover:fill-[url(#theme-main-hover)]"
        />
        <path
          d="M48 14 H212 Q206 28 212 42 H48 Q24 28 48 14 Z"
          fill="url(#theme-inner)"
          className="transition-all duration-300 group-hover:fill-[url(#theme-inner-hover)]"
          opacity="0.95"
        />
        <path
          d="M48 14 H212 Q206 28 212 42 H48 Q24 28 48 14 Z"
          fill="none"
          stroke="url(#theme-inner-stroke)"
          strokeWidth="1.2"
          className="transition-all duration-300 group-hover:stroke-[url(#theme-inner-stroke-hover)]"
        />
      </svg>

      <span
        className="relative z-10 flex h-full items-center justify-center font-semibold tracking-widest text-sm
          text-[#614949] opacity-95 transition-all duration-300 group-hover:text-[#f6f8f9] group-hover:scale-105"
      >
        {label}
      </span>
    </button>
  );
}
