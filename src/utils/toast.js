"use client";
import { useState } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (message, duration = 2500) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  return { toast, showToast };
}
