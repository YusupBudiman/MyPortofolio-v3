"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="z-20 absolute top-[20%] left-[5%] flex flex-col items-start justify-start gap-6">
      <div className="flex flex-col items-start justify-start">
        <h1 className="title-fantasy text-5xl text-white font-extrabold mb-6">
          Full Stack Developer
        </h1>

        <p className="max-w-md text-start text-sm text-gray-300 mb-6">
          I build modern web applications from frontend to backend with a focus
          on performance, clarity, and a seamless user experience.
        </p>

        <div className="flex items-center justify-between gap-2">
          <Link
            href={"#contact"}
            className="text-[#18181a] bg-[#f9fc9f] border-2 border-[#e3e8b8] px-4 py-1 rounded-xs text-xs font-semibold"
          >
            WORK WITH ME
          </Link>

          <Link
            href={"#projects"}
            className="text-white bg-gradient-to-b from-[#252525] to-[#171717] border-2 border-[#242224] px-4 py-1 rounded-xs text-xs font-semibold"
          >
            PROJECTS
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <p className="text-sm text-white mb-2">
          Fast learner. Highly adaptable. Experienced though academy projects,
          internship work, and personal full-stack builds.
        </p>

        <span className="text-sm text-[#e3e8b8]">
          developer@yusupbudiman3@gmail.com
        </span>
      </div>
    </div>
  );
}
