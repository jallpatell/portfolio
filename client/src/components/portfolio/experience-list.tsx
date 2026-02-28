import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function ExperienceList() {
  return (
    <div className="flex flex-col">
      {[...EXPERIENCES].reverse().map((exp, i) => (
        <ExperienceRow key={exp.id} exp={exp} isLast={i === EXPERIENCES.length - 1} />
      ))}
    </div>
  );
}

function ExperienceRow({ exp, isLast }: { exp: typeof EXPERIENCES[0], isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`p-5 md:p-6 cursor-pointer transition-colors duration-200 hover:bg-white/[0.03] ${!isLast ? 'border-b border-white/5' : ''}`}
    >
      <div className="flex justify-between items-center group">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[15px] font-semibold text-[#f5f5f7] tracking-tight">
              {exp.org}
            </span>
            {exp.active && (
              <span className="text-[9px] font-medium tracking-widest text-[#30d158] bg-[#30d158]/10 border border-[#30d158]/20 rounded-full px-2 py-0.5">
                CURRENT
              </span>
            )}
          </div>
          <div className="text-xs text-white/40 mt-1 tracking-tight">
            {exp.role} · {exp.period}
          </div>
        </div>
        <ChevronRight 
          className={`w-4 h-4 text-white/20 transition-transform duration-300 ml-3 flex-shrink-0 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
        />
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {exp.stack.map(tech => (
          <span key={tech} className="text-[10.5px] text-white/40 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-[13px] leading-relaxed text-white/50 font-light tracking-tight">
              {exp.details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
