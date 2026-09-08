import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/data";

const NAV_COLS = [
  {
    heading: "Explore",
    links: [
      { label: "About",      href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects",   href: "#projects" },
      { label: "Skills",     href: "#skills" },
      { label: "Contact",    href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub",   href: GITHUB },
      { label: "LinkedIn", href: LINKEDIN },
      { label: "Email",    href: `mailto:${EMAIL}` },
    ],

  },
];

const SOCIAL_ICONS = [
  { icon: Github,   href: GITHUB,           label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN,          label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${EMAIL}`, label: "Email" },
];

function scrollTo(href: string) {
  if (href.startsWith("#") && href.length > 1) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  } else if (!href.startsWith("#")) {
    window.open(href, "_blank", "noopener,noreferrer");
  }
}

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--ink)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--bg-page)", fontSize: "0.6rem" }} className="font-medium tracking-wider">
                  JP
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink)", fontSize: "0.8125rem" }} className="tracking-tight font-medium">
                jal.patel
              </span>
            </div>

            <p style={{ fontFamily: "var(--font-serif)", color: "var(--ink-4)", fontSize: "0.875rem" }} className="italic leading-relaxed">
              Building systems that scale, one commit at a time.
            </p>

            <div className="flex items-start gap-2.5">
              <div className="w-px min-h-[2.5rem] flex-shrink-0" style={{ background: "var(--border)" }} />
              <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="leading-relaxed">
                India · GMT +5:30
              </p>
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.5625rem" }} className="uppercase tracking-widest">
                {col.heading}
              </p>
              {col.links.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.75rem" }}
                  className="hover:text-[var(--ink)] transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t py-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border-3)" }}>
          <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="tracking-wide">
            © 2026 Jal Patel. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-150"
                style={{ borderColor: "var(--border)", color: "var(--ink-5)", background: "transparent" }}
              >
                <Icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
