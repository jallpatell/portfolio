import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/data";

const AT_A_GLANCE = [
  { group: "CURRENTLY", items: ["Software Engineer Intern @ NaapBooks", "Building Hyperchain"] },
  { group: "FOCUS",     items: ["Scalable APIs", "Real-time systems", "Full-stack TypeScript"] },
  { group: "STACK",     items: ["TypeScript · Node.js · React", "PostgreSQL · Redis · Docker"] },
  { group: "INTERESTS", items: ["Chess", "Stargazing", "DeFi & dApps", "Open source"] },
];

const SOCIAL_LINKS = [
  { icon: Github,   href: GITHUB,           label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN,          label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${EMAIL}`, label: "Email" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 border-y"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="index-tag">02</div>
          <div className="w-8 border-t" style={{ borderColor: "var(--border-2)" }} />
          <span className="kicker">About</span>
        </div>
        <h2 className="section-headline mb-12">Who I am.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <p className="body-serif">
              I'm Jal — a full-stack engineer based in India, with a deep focus on building
              systems that are fast, reliable, and well-architected. I started with TypeScript and
              React, then grew into distributed backend services, real-time WebSocket pipelines, and
              eventually Rust-based trading engines.
            </p>
            <p className="body-serif">
              I'm drawn to problems that sit at the intersection of performance and product: how do
              you keep a data pipeline under 5ms while the UI stays responsive? How do you design an
              API that feels obvious to consume but hides real complexity? That tension is where my
              best work happens.
            </p>
            <p className="body-serif">
              Outside of code I'm usually playing chess, reading about astrophysics, or poking around
              L2 DeFi protocols. I believe good engineering is ultimately a communication discipline —
              with your future self, your teammates, and your users.
            </p>
            <div className="ruler-line mt-4" />
          </div>

          {/* At a glance panel */}
          <div className="lg:col-span-2">
            <div className="bp-card p-5 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-4 border-b" style={{ borderColor: "var(--border-3)" }}>
                <span className="diamond-filled" />
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.6875rem" }} className="uppercase tracking-widest ml-1">
                  At a Glance
                </span>
              </div>

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

              <div className="border-t pt-4" style={{ borderColor: "var(--border-3)" }}>
                <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest mb-3">
                  Profiles
                </p>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 rounded-md border flex items-center justify-center transition-colors duration-150"
                      style={{ background: "var(--bg-surface)", borderColor: "var(--border)", color: "var(--ink-4)" }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
