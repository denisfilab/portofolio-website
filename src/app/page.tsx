'use client'
import React, { useRef } from 'react';
import HeroSection from "@/modules/HomeModules/HeroSection";
import AboutMe from "@/modules/HomeModules/AboutMe";
import ProjectSection from "@/modules/HomeModules/ProjectSection";
import ExperienceSection from "@/modules/HomeModules/ExperienceSection";

export default function Home() {
  const projectSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-screen h-fit px-[8vw] overflow-hidden max-custom:px-[8vw]">
      <HeroSection scrollToRef={projectSectionRef} />
      <AboutMe />
      <div ref={projectSectionRef}>
        <ProjectSection />
      </div>
      <ExperienceSection />
    </main>
  );
}