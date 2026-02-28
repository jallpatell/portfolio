import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function ProjectList() {
  return (
    <div className="flex flex-col">
      {PROJECTS.map((proj, i) => (
        <ProjectTile key={proj.id} project={proj} isLast={i === PROJECTS.length - 1} />
      ))}
    </div>
  );
}

function ProjectTile({ project, isLast }: { project: typeof PROJECTS[0], isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.03] ${!isLast ? 'border-b border-white/5' : ''}`}
    >
      <div className="flex justify-between items-start mb-2.5">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-[#f5f5f7] tracking-tight mb-0.5">
            {project.name}
          </div>
          <div className="text-[10.5px] text-white/30 tracking-widest uppercase">
            {project.tagline}
          </div>
        </div>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`
            w-8 h-8 rounded-[10px] flex-shrink-0 ml-3 flex items-center justify-center transition-all duration-200
            border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
            ${isHovered ? 'bg-white/10 text-white' : 'bg-white/5 text-white/50'}
          `}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <p className="text-[13px] leading-relaxed text-white/50 font-light tracking-tight mb-3.5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(tech => (
          <span key={tech} className="text-[10.5px] text-white/40 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
