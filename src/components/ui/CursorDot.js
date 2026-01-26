"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const speed = 0.08;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 6}px, ${
          pos.current.y - 6
        }px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="hidden lg:block fixed top-0 left-0 w-6 h-6 rounded-full bg-[hsl(62,94%,81%)] pointer-events-none z-[9999] "
    >
      <div
        className="w-8 h-8 rounded-full border border-[hsl(62,94%,81%)]

] animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
}
