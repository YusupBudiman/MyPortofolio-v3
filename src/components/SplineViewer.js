"use client";
import { useEffect } from "react";

export default function SplineViewer() {
  useEffect(() => {
    // Load script hanya sekali
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <spline-viewer
      url="https://prod.spline.design/6LIPSPVISrVMUkDn/scene.splinecode"
      background="transparent"
      style={{ width: "100%", height: "500px" }}
    />
  );
}
