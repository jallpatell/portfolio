import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="section-headline mb-12">Things I've built.</h2>

        {/* Featured project */}
        {featured && (
          <div className="mb-12">
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="uppercase tracking-widest mb-3">
              ◆ Featured project
            </p>
            <div
              className="relative rounded-2xl border p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Peeking card shadow */}
              <div
                className="absolute -bottom-2 -right-2 -z-10 w-full h-full rounded-2xl border"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  {/* Window bar */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border"
                    style={{ background: "var(--bg-window-bar)", borderColor: "var(--border)" }}
                  >
                    <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
                    <span className="window-title ml-1 truncate flex-1">
                      {(featured.link || "").replace("https://", "")}
                    </span>
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink-5)" }} className="hover:text-[var(--ink)] transition-colors ml-auto">
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="uppercase tracking-widest">
                      {featured.category}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--ink)", fontSize: "1.5rem" }} className="font-bold tracking-[-0.02em] mt-1 mb-3">
                      {featured.name}
                    </h3>
                    <p className="body-serif text-[0.9375rem] leading-[1.7]">{featured.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {featured.status.map((s) => <span key={s} className="status-pill">{s}</span>)}
                    {featured.stack.map((t) => <span key={t} className="status-pill">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-2">
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View project
                    </a>
                    {featured.github && (
                      <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Key outcomes */}
                <div className="flex flex-col gap-4">
                  <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="uppercase tracking-widest">
                    Key outcomes
                  </p>
                  {[
                    "Custom DAG execution engine for complex workflow graphs",
                    "Drag & drop node editor with real-time preview",
                    "Full API + auth backend on TypeScript + PostgreSQL",
                    "Production deployed — zero cold-start latency on render",
                  ].map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b last:border-0" style={{ borderColor: "var(--border-3)" }}>
                      <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontFamily: "var(--font-serif)", color: "var(--ink-3)", fontSize: "0.875rem" }} className="leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="mini-window flex flex-col hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="mini-window-bar justify-between">
        <div className="flex items-center gap-1.5">
          <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
          <span className="window-title ml-1 truncate max-w-[160px]">
            {(project.link || "github.com").replace("https://", "")}
          </span>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink-5)" }} className="hover:text-[var(--ink)] transition-colors">
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <div>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest">
            {project.category}
          </span>
          <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--ink)", fontSize: "1.0625rem" }} className="font-semibold tracking-[-0.02em] mt-0.5">
            {project.name}
          </h3>
          <p className="body-serif text-[0.875rem] leading-[1.65] mt-2" style={{ color: "var(--ink-3)" }}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.status.map((s) => <span key={s} className="status-pill">{s}</span>)}
          {project.stack.slice(0, 3).map((t) => <span key={t} className="status-pill">{t}</span>)}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-[0.625rem] px-3 py-1.5">
            <ArrowUpRight className="w-3 h-3" />
            View
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-[0.625rem] px-3 py-1.5">
              <Github className="w-3 h-3" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
