import HeroSection from "@/modules/HomeModules/HeroSection";
import "./globals.css";
import AboutMe from "@/modules/HomeModules/AboutMe";
import ProjectSection from "@/modules/HomeModules/ProjectSection";
import ExperienceSection from "@/modules/HomeModules/ExperienceSection";
export default function Home() {
  return (
    <main className="w-screen h-fit px-[8vw] overflow-hidden max-custom:px-[8vw]">
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <ExperienceSection />
    </main>
  );
}
