"use client";

import ThemedButton from "@/components/ui/ThemedButton";

export default function FloatingButtons() {
  return (
    <div className="absolute right-[3%] top-[50%] z-99">
      <div className="flex flex-col items-end gap-4">
        <ThemedButton id="button1" />

        <div className="mr-16">
          <ThemedButton id="button2" />
        </div>

        <div className="mr-32">
          <ThemedButton id="button3" />
        </div>
      </div>
    </div>
  );
}
