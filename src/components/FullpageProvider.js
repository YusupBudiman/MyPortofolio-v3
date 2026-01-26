"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";

const FullpageContext = createContext();

export function useFullpage() {
  return useContext(FullpageContext);
}

export default function FullpageProvider({ children }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  const scrollToIndex = (i) => {
    if (!sectionsRef.current[i]) return;

    isScrolling.current = true;
    setIndex(i);

    sectionsRef.current[i].scrollIntoView({ behavior: "smooth" });

    // Update hash URL
    const id = sectionsRef.current[i].id;
    if (id) window.history.replaceState(null, "", `#${id}`);

    setTimeout(() => (isScrolling.current = false), 900);
  };

  // Ambil semua section dan scroll jika ada hash awal
  useEffect(() => {
    sectionsRef.current = Array.from(
      document.querySelectorAll("[data-fullpage]"),
    );

    const hash = window.location.hash.replace("#", "");
    const initialIndex = sectionsRef.current.findIndex(
      (sec) => sec.id === hash,
    );
    if (initialIndex >= 0) scrollToIndex(initialIndex);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      if (e.deltaY > 30 && index < sectionsRef.current.length - 1) {
        scrollToIndex(index + 1);
      } else if (e.deltaY < -30 && index > 0) {
        scrollToIndex(index - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  return (
    <FullpageContext.Provider value={{ index, scrollToIndex }}>
      <div className="w-full h-full overflow-hidden">{children}</div>
    </FullpageContext.Provider>
  );
}
