import { useEffect } from "react";
import { ThemeProvider } from "@/lib/theme";
import { TopNav } from "@/components/portfolio/top-nav";
import { HeroSection } from "@/components/blueprint/hero-section";
import { ExperienceSection } from "@/components/blueprint/experience-section";
import { ProjectsSection } from "@/components/blueprint/projects-section";
import { SkillsSection } from "@/components/blueprint/skills-section";

import { Footer } from "@/components/blueprint/footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-[var(--ink)]/10" style={{ backgroundColor: "var(--bg-page)", color: "var(--ink)" }}>
        <TopNav />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />

        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
