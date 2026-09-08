import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/data";

const STACK_CHIPS = [
  { label: "TypeScript", sub: "primary lang" },
  { label: "React / Next.js", sub: "frontend" },
  { label: "Node.js", sub: "backend" },
  { label: "PostgreSQL", sub: "primary db" },
  { label: "Docker", sub: "infra" },
];

const AT_A_GLANCE = [
  { group: "CURRENTLY",         items: ["SDE 1 @ NaapBooks", "Building Hyperchain"] },
  { group: "FOCUS",             items: ["Scalable APIs", "Real-time systems", "Full-stack TypeScript"] },
  { group: "STACK",             items: ["TypeScript · Node.js · React", "PostgreSQL · Redis · Docker"] },
  { group: "INTERESTS",         items: ["Chess", "Stargazing", "DeFi & dApps", "Open source"] },
];

const SOCIAL_LINKS = [
  { icon: Github,   href: GITHUB,            label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN,           label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${EMAIL}`,  label: "Email" },
];

export function HeroSection() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen dot-grid corner-brackets flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Crosshair marks */}
      <span className="absolute top-24 left-[48%] crosshair hidden lg:block" />
      <span className="absolute bottom-16 right-[30%] crosshair hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* ── Left column ── */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Headline + subhead */}
            <div>
              <h1
                style={{ fontFamily: "var(--font-sans)", color: "var(--ink)" }}
                className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1.02] mb-5"
              >
                I build systems<br />that scale.
              </h1>
              <p
                style={{ fontFamily: "var(--font-serif)", color: "var(--ink-3)" }}
                className="text-[1.0625rem] leading-[1.8] max-w-[520px]"
              >
                Full-stack engineer focused on high-performance backend services,
                real-time data infrastructure, and polished React frontends.
                Previously shipped production systems in Rust, TypeScript &amp; C++.
              </p>
            </div>

            {/* Terminal card */}
            <div className="mini-window shadow-sm">
              <div className="mini-window-bar justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
                  <span className="window-title ml-1">terminal — jal@portfolio:~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="available-dot" />
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.5625rem" }}>online</span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div
                  className="self-end max-w-[75%] rounded-xl rounded-tr-sm px-3.5 py-2.5"
                  style={{ background: "var(--bubble-bg)", color: "var(--bubble-text)" }}
                >
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem" }} className="leading-relaxed">
                    What do you actually ship?
                  </p>
                </div>
                <div className="flex items-start gap-2.5 max-w-[88%]">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border"
                    style={{ background: "var(--bg-surface-alt)", borderColor: "var(--border)" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.5rem" }}>JP</span>
                  </div>
                  <div
                    className="rounded-xl rounded-tl-sm px-3.5 py-2.5 border"
                    style={{ background: "var(--response-bg)", borderColor: "var(--response-border)" }}
                  >
                    <p style={{ fontFamily: "var(--font-serif)", color: "var(--ink-2)", fontSize: "0.875rem" }} className="leading-relaxed">
                      Scalable APIs, real-time WebSocket systems, DeFi trading engines,
                      and full-stack React apps — production-grade, always measured.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t px-4 py-3" style={{ borderColor: "var(--border-3)" }}>
                <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest mb-2">
                  current stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STACK_CHIPS.map((chip) => (
                    <div
                      key={chip.label}
                      className="flex items-center gap-1.5 rounded-md px-2 py-1 border"
                      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-2)", fontSize: "0.625rem" }} className="font-medium">
                        {chip.label}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }}>
                        {chip.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" onClick={scrollTo("#contact")} className="btn-primary">
                <ArrowRight className="w-3.5 h-3.5" />
                Get in touch
              </a>
              <a href="#projects" onClick={scrollTo("#projects")} className="btn-outline">
                View my work
              </a>
            </div>
          </div>

          {/* ── Right: At a Glance panel ── */}
          <div className="lg:col-span-2">
            <div className="bp-card p-5 flex flex-col gap-5">

              {/* Panel header */}
              <div className="flex items-center gap-2 pb-4 border-b" style={{ borderColor: "var(--border-3)" }}>
                <span className="diamond-filled" />
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.6875rem" }} className="uppercase tracking-widest ml-1">
                  At a Glance
                </span>
              </div>

              {/* Fact groups */}
              {AT_A_GLANCE.map((group) => (
                <div key={group.group}>
                  <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest mb-1.5">
                    {group.group}
                  </p>
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 py-0.5">
                      <span className="diamond-hollow mt-[3px]" />
                      <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-2)", fontSize: "0.75rem" }} className="leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Connect */}
              <div className="border-t pt-4" style={{ borderColor: "var(--border-3)" }}>
                <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest mb-3">
                  Connect
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 rounded-md border flex items-center justify-center transition-colors duration-150"
                      style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--ink-4)" }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-serif)", color: "var(--ink-5)", fontSize: "0.75rem" }} className="italic mt-4">
                  Usually replies within 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
