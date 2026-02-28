import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TopNav } from "@/components/portfolio/top-nav";
import { Identity } from "@/components/portfolio/identity";
import { Skills } from "@/components/portfolio/skills";
import { ExperienceList } from "@/components/portfolio/experience-list";
import { ProjectList } from "@/components/portfolio/project-list";
import { ContactForm } from "@/components/portfolio/contact-form";
import { Widget } from "@/components/ui/widget";
import { CosmosBackground } from "@/components/ui/cosmos-background";
import { EXPERIENCES, PROJECTS } from "@/lib/data";

type Tab = "experience" | "projects" | "contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<Tab>("experience");

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col relative selection:bg-primary/30">
      <CosmosBackground />
      <TopNav mounted={mounted} />

      {/* Depth Layers */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_55%_35%_at_18%_12%,rgba(255,255,255,0.01)_0%,transparent_60%),radial-gradient(ellipse_35%_55%_at_82%_88%,rgba(255,255,255,0.008)_0%,transparent_60%)]" />

      {/* Main Layout Container */}
      <main className="flex-1 pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-4 md:gap-6 relative z-10 md:h-screen md:overflow-hidden">
        
        {/* LEFT COLUMN: Fixed height on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="w-full md:w-[380px] lg:w-1/3 flex flex-col gap-4 md:gap-6 flex-shrink-0 md:h-full md:overflow-hidden"
        >
          <Identity />
          <div className="flex-1 min-h-0 hidden md:block">
            <Skills />
          </div>
          {/* Mobile Skills representation (not bounded by height) */}
          <div className="md:hidden">
            <Skills />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Tab Navigation & Scrollable Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="flex-1 flex flex-col gap-4 md:gap-6 min-w-0 md:h-full overflow-hidden"
        >
          {/* Segmented Tab Switcher */}
          <Widget padding="p-1.5" className="flex-shrink-0 !rounded-2xl">
            <div className="flex gap-1 w-full">
              {(["experience", "projects", "contact"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`
                    flex-1 py-2.5 rounded-xl border-none cursor-pointer text-[13px] md:text-sm tracking-tight transition-all duration-300
                    ${tab === t 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.35)]' 
                      : 'bg-transparent text-white/40 font-medium hover:text-white/70 hover:bg-white/[0.02]'}
                  `}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </Widget>

          {/* Scrollable Card Container */}
          <Widget padding="p-0" className="flex-1 min-h-[400px] flex flex-col md:overflow-hidden">
            {/* List Header */}
            <div className="px-5 md:px-6 py-4 border-b border-white/5 flex-shrink-0 bg-white/[0.01]">
              <span className="text-[10px] font-medium tracking-widest text-white/30 uppercase">
                {tab === "experience" && `Work History · ${EXPERIENCES.length} positions`}
                {tab === "projects" && `Featured Projects · ${PROJECTS.length} built`}
                {tab === "contact" && `Get in Touch`}
              </span>
            </div>

            {/* Inner Scroll Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {tab === "experience" && <ExperienceList />}
                  {tab === "projects" && <ProjectList />}
                  {tab === "contact" && <ContactForm />}
                </motion.div>
              </AnimatePresence>
            </div>
          </Widget>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex-shrink-0 flex justify-between px-2 pb-2 md:pb-0"
          >
            <span className="text-[10.5px] text-white/20 tracking-wide">Jal Patel · 2026</span>
            <span className="text-[10.5px] text-white/20 tracking-wide">Flexible across all time-zones</span>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
