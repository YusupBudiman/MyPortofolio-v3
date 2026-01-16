"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Pengadilan Militer II - 09 Bandung",
    role: "Full-Stack Developer (Internship)",
    period: "Sep 2022 - Dec 2022",
  },
];

export default function ContentExperience() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const containerRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    containerRefs.current.forEach((ref, idx) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="relative flex flex-col gap-32">
        {/* GARIS TENGAH */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#ababab]/40 animate-fadeLine" />

        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          const isVisible = visibleIndexes.includes(idx);

          return (
            <div
              key={idx}
              className="relative w-full min-h-[260px] flex items-center"
            >
              {/* NODE */}
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-3 h-3 sm:w-4 sm:h-4 rounded-full z-20 shadow-lg transition-all duration-700
                ${
                  isVisible
                    ? "bg-[#f9fc9f] scale-100"
                    : "bg-[#f9fc9f]/40 scale-50"
                }`}
              />

              {/* GARIS CABANG (ANIMASI) */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d={isEven ? "M50 50 H44" : "M50 50 H56"}
                    stroke="#ababab"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: isVisible ? 0 : 100,
                      transition: "stroke-dashoffset 900ms ease-out",
                    }}
                  />
                </svg>
              </div>

              {/* CARD */}
              <div
                ref={(el) => (containerRefs.current[idx] = el)}
                className={`relative z-10 bg-[#1f1f1f] rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-[45%] transition-all duration-700 transform
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }
                  ${isEven ? "mr-auto" : "ml-auto"}
                `}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-white">
                  {exp.role}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-[#f9fc9f] font-medium mb-1">
                  {exp.company}
                </p>

                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {exp.period}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANIMASI TAMBAHAN */}
      <style jsx global>{`
        @keyframes fadeLine {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeLine {
          animation: fadeLine 1.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
