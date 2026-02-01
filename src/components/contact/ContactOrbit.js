"use client";

import Image from "next/image";
import { getOrbitTransform } from "./contact.helpers";

export default function ContactOrbit({
  activeLogos,
  buttonHover,
  showForm,
  animationKey,
  randomRotationsRef,
}) {
  return (
    <>
      {activeLogos.map((item, index) => {
        const { transform, rotation } = getOrbitTransform(
          index,
          buttonHover,
          showForm,
          activeLogos.length,
        );

        const randomRotation = randomRotationsRef.current[index] || 0;

        return (
          <div
            key={`${animationKey}-${index}`}
            className="absolute flex items-center justify-center z-50 logo-wrapper"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div
              className="logo-inner rounded-xl lg:w-40 lg:h-40 2xl:w-50 2xl:h-50 overflow-hidden"
              style={{
                transform: `${transform} ${rotation} rotate(${randomRotation}deg)`,
                transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Image
                src={item.img}
                alt="Skills Icon"
                width={100}
                height={100}
                className="logo w-full h-full object-center object-cover"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
