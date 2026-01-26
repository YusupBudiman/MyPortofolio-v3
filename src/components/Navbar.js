"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/navItems";
import { FiMenu, FiX } from "react-icons/fi";
import { useFullpage } from "./FullpageProvider";

export default function Navbar() {
  const { index, scrollToIndex } = useFullpage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-[8%] top-0 h-full z-[998] flex items-center pointer-events-auto">
      <div className="flex flex-col items-center justify-between lg:justify-center px-6 py-4 gap-6">
        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col items-start gap-4 overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 md:max-h-full opacity-0 md:opacity-100"}`}
        >
          {navItems.map((item, i) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li
                key={i}
                className="flex items-center gap-3 px-1 group cursor-pointer"
              >
                {/* DOT */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    group-hover:bg-[hsl(43,43%,84%)]
                    group-hover:scale-150
                    group-hover:border
                    group-hover:border-[rgb(111,90,47)]
                    ${
                      isActive
                        ? "bg-[hsl(43,43%,84%)] scale-150 border border-[rgb(111,90,47)]"
                        : "bg-[hsl(40,40%,31%)]"
                    }
                  `}
                />

                <button
                  onClick={() => handleClick(i, id)}
                  className={`w-36 md:w-auto text-left md:text-center px-4 py-2 md:px-2 md:py-1
                  text-[hsl(41,39%,31%)] md:text-xl md:font-bold rounded-sm
                  transition-all duration-300
                  group-hover:translate-x-1
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
  );
}
