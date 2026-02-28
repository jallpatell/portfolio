import { Widget } from "@/components/ui/widget";
import { SKILLS } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Widget padding="p-5 md:p-6" className="flex flex-col h-full overflow-hidden">
      <div className="text-[10px] font-medium tracking-widest text-white/20 uppercase mb-5 flex-shrink-0">
        Tech Stack
      </div>
      
      <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2 flex-1">
        {SKILLS.map((skillGroup, i) => (
          <motion.div 
            key={skillGroup.cat}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (i * 0.05) }}
          >
            <div className="text-[9.5px] font-medium tracking-widest text-white/20 uppercase mb-2">
              {skillGroup.cat}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.items.map(item => (
                <span 
                  key={item}
                  className="text-[11px] md:text-xs text-white/50 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 transition-colors duration-200 hover:text-white/90 hover:bg-white/10 hover:border-white/20 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Widget>
  );
}
