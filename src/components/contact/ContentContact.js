"use client";
import { useState, useRef, useEffect } from "react";
import skills from "@/data/skills";
import ContactForm from "./ContactForm";
import ContactOrbit from "./ContactOrbit";
import ContactButton from "./ContactButton";
import Toast from "@/components/ui/Toast";
import { shuffleArray } from "./contact.helpers";
import { useToast } from "@/utils/toast";

export default function ContactContent() {
  const [showForm, setShowForm] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [activeLogos, setActiveLogos] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const randomRotationsRef = useRef([]);

  const { toast, showToast } = useToast(); // global toast

  const handleMouseLeave = () => {
    if (!showForm) {
      setButtonHover(false);
      setButtonOffset({ x: 0, y: 0 });
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowForm(false);
    setButtonOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveLogos([]);
          setTimeout(() => {
            const shuffled = shuffleArray(skills);
            setActiveLogos(shuffled);
            randomRotationsRef.current = shuffled.map(
              () => (Math.random() - 0.5) * 40,
            );
            setAnimationKey((prev) => prev + 1);
          }, 100);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ContactOrbit
        activeLogos={activeLogos}
        buttonHover={buttonHover}
        showForm={showForm}
        animationKey={animationKey}
        randomRotationsRef={randomRotationsRef}
      />

      <div
        ref={sectionRef}
        className="relative  w-full flex h-full items-center justify-center overflow-hidden transition-colors duration-700"
      >
        <div
          className={`group relative z-20 p-2 border-4 border-dotted 
          border-[hsl(171,29%,50%)] flex items-center justify-center contact-wrapper hover:border-[hsl(148,36%,90%)] hover:border-solid
          transition-all duration-700
          ${
            !showForm
              ? "rounded-full hover:border-t-1 2xl:hover:border-x-12 2xl:hover:border-b-16 xl:hover:border-x-8 xl:hover:border-b-12"
              : "rounded-3xl"
          }`}
        >
          <div
            className={`z-20 bg-[hsl(173,39%,62%)] lg:w-8 lg:h-8 2xl:w-12 2xl:h-12 absolute left-[50%] -translate-x-1/2 
            group-hover:bg-[hsl(44,55%,73%)] mask-[url(/images/icon-star1.png)] mask-contain mask-center mask-no-repeat
            transition-colors duration-700 ${showForm ? "top-[-5%]" : "top-[-12%]"}`}
          ></div>

          <ContactButton
            showForm={showForm}
            buttonRef={buttonRef}
            buttonOffset={buttonOffset}
            setButtonHover={setButtonHover}
            handleMouseLeave={handleMouseLeave}
            setButtonOffset={setButtonOffset}
            setShowForm={setShowForm}
          >
            {!showForm ? (
              <span
                className="text-md lg:text-5xl font-bold select-none text-white flex items-baseline"
                style={{
                  transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)`,
                }}
              >
                <div
                  className="bg-white/70 mask-[url(/images/icon-message2.png)]
                  mask-contain mask-center mask-no-repeat 
                  lg:w-12 lg:h-12 2xl:w-20 2xl:h-20
                  group-hover:bg-[hsl(170,9%,27%)]
                  transition-colors duration-700"
                ></div>
              </span>
            ) : (
              <div className="w-full relative z-30">
                <ContactForm onClose={handleClose} showToast={showToast} />
              </div>
            )}
          </ContactButton>
        </div>
      </div>

      {/* Toast di root, tidak di dalam form */}
      <Toast message={toast} />
    </>
  );
}
