"use client";

import Hero from "@/components/hero/Hero";
import ProjectsSection from "./projects/page";
import ExperienceSection from "./experience/page";
import ContactSection from "./contact/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section id="home" data-fullpage className="h-screen w-screen">
        <Hero />
      </section>

      <section id="projects" data-fullpage className="h-screen w-screen">
        <ProjectsSection />
      </section>

      <section id="experience" data-fullpage className="h-screen w-screen">
        <ExperienceSection />
      </section>

      <section
        id="contact"
        data-fullpage
        className="h-screen w-screen flex items-center justify-center"
      >
        <ContactSection />
      </section>

      <section
        id="footer"
        data-fullpage
        className={`
          flex items-center justify-center

          w-screen h-[30vh]
           
          lg:h-[80px]

          2xl:h-[100px]
          `}
      >
        <Footer />
      </section>
    </>
  );
}
