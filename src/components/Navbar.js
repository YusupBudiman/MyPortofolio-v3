"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/navItems";
import { FiMenu, FiX } from "react-icons/fi";
import { useFullpage } from "./FullpageProvider";

export default function Navbar() {
  const { index, scrollToIndex } = useFullpage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHero = index === 0;

  // Sinkronisasi activeSection dari scroll index
  useEffect(() => {
    if (navItems[index]) {
      const id = navItems[index].href.replace("#", "");
      setActiveSection(id);
    }
  }, [index]);

  const handleClick = (i, id) => {
    scrollToIndex(i);
    setActiveSection(id);
    setIsOpen(false); // auto close di mobile
  };

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-[999] lg:hidden">
        {/* Nav bar */}
        <div
          className={`flex items-center justify-between px-4 py-3 ${
            isHero ? "text-white" : "text-black"
          }`}
        >
          <span className="font-bold tracking-wide">MyPortofolio</span>

          <button
            aria-label="Open Menu"
            onClick={() => setIsOpen(true)}
            className="relative z-[1000] focus:outline-none"
          >
            <FiMenu size={26} />
          </button>
        </div>

        {/* Full-screen overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-[998] transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <ul
          className={` inset-0 w-full h-screen  z-[999] flex flex-col items-center justify-center gap-4 px-6 pt-8 transition-all duration-300
          ${isOpen ? "fixed" : "hidden"}`}
        >
          {/* Close button inside menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end p-4 text-white"
          >
            <FiX className="text-4xl" />
          </button>

          {navItems.map((item, i) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li
                key={i}
                className="flex w-full items-center justify-center gap-3 px-1 group cursor-pointer border-b-1 border-white/10 "
              >
                <button
                  onClick={() => handleClick(i, id)}
                  className={` px-4 py-2  text-xl font-light  
                    
                    
                    ${isActive ? " text-[hsl(213,74%,67%)]" : "text-white "}`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <nav className="hidden lg:flex fixed left-[8%] top-0 h-full z-[998] items-center pointer-events-auto">
        <div
          className={`
          flex flex-col items-center justify-center

          lg:px-4 lg:py-2 

          2xl:px-6 2xl:py-4 
          `}
        >
          <ul
            className={`
            flex flex-col items-start 

            lg:gap-2
            
            2xl:gap-4
            `}
          >
            {navItems.map((item, i) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li
                  key={i}
                  className={`flex items-center  group cursor-pointer

                    lg:gap-1.5 lg:px-0.5

                    2xl:gap-3 2xl:px-1`}
                >
                  {/* DOT */}
                  <span
                    className={`
                      rounded-full transition-all duration-300 group-hover:bg-[hsl(43,43%,84%)]
                      group-hover:scale-150 group-hover:border group-hover:border-[rgb(111,90,47)]
                      
                      lg:w-1.5 lg:h-1.5

                      2xl:w-2 2xl:h-2
                      ${
                        isActive
                          ? "bg-[hsl(43,43%,84%)] scale-150 border border-[rgb(111,90,47)]"
                          : "bg-[hsl(40,40%,31%)]"
                      }`}
                  />

                  <button
                    onClick={() => handleClick(i, id)}
                    className={`lg:font-bold text-[hsl(41,39%,31%)] rounded-sm
                      transition-all duration-300
                      group-hover:translate-x-1

                      lg:text-sm lg:px-1 lg:py-0.5

                      xl:text-lg

                      2xl:text-xl 2xl:px-2 2xl:py-1
                      ${isActive ? "font-extrabold scale-105" : ""}`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
