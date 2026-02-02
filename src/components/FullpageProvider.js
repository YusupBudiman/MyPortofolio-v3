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

  const touchStartY = useRef(0);

  const scrollToIndex = (i) => {
    if (!sectionsRef.current[i]) return;

    isScrolling.current = true;
    setIndex(i);

    sectionsRef.current[i].scrollIntoView({ behavior: "smooth" });

    const id = sectionsRef.current[i].id;
    if (id) window.history.replaceState(null, "", `#${id}`);

    setTimeout(() => {
      isScrolling.current = false;
    }, 450);
  };

  // Ambil semua section & hash awal
  useEffect(() => {
    sectionsRef.current = Array.from(
      document.querySelectorAll("[data-fullpage]"),
    );

    const hash = window.location.hash.replace("#", "");
    const initialIndex = sectionsRef.current.findIndex(
      (sec) => sec.id === hash,
    );

    if (initialIndex >= 0) {
      scrollToIndex(initialIndex);
    }
  }, []);

  // 🖱 DESKTOP SCROLL
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      if (e.deltaY > 30 && index < sectionsRef.current.length - 1) {
        scrollToIndex(index + 1);
      } else if (e.deltaY < -30 && index > 0) {
        scrollToIndex(index - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  // 📱 MOBILE SWIPE (INI KUNCI NYA)
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;

      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;

      if (Math.abs(diff) < 50) return; // threshold swipe

      if (diff > 0 && index < sectionsRef.current.length - 1) {
        scrollToIndex(index + 1); // swipe up
      } else if (diff < 0 && index > 0) {
        scrollToIndex(index - 1); // swipe down
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index]);

  return (
    <FullpageContext.Provider value={{ index, scrollToIndex }}>
      <div className="w-full h-full overflow-hidden">{children}</div>
    </FullpageContext.Provider>
  );
}
