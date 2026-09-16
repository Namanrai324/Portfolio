import Navigation from "@/components/Navigation";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SecondaryProjects from "@/components/SecondaryProjects";
import AchievementsSection from "@/components/AchievementsSection";
import Skiper31 from "@/components/ui/Skiper31";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full h-full overflow-x-clip bg-[#0C0C0C] font-kanit">
      <Navigation />
      <div id="home">
        <ScrollyCanvas />
      </div>
      <MarqueeSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
        <SecondaryProjects />
        <AchievementsSection />
      </div>
      <div id="skills">
        <Skiper31 />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
