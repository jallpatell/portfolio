import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export function TopNav() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme }        = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const isDark = theme === "dark";

  const navStyle: React.CSSProperties = scrolled
    ? {
        background: "color-mix(in srgb, var(--bg-card) 85%, transparent)",
        borderColor: "var(--border)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
      }
    : {
        background: "transparent",
        borderColor: "transparent",
      };

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-[14px] flex items-center justify-between px-4 sm:px-5 h-14 backdrop-blur-md border"
          style={navStyle}
        >

          {/* Left — initials mark + wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-250"
              style={{ background: "var(--ink)" }}
            >
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--bg-page)", fontSize: "0.6rem" }}
                className="font-medium tracking-wider"
              >
                JP
              </span>
            </div>
            <span
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink)", fontSize: "0.8125rem" }}
              className="tracking-tight font-medium hidden sm:block"
            >
              jal.patel
            </span>
          </a>

          {/* Center — nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                style={{
                  fontFamily: "var(--font-mono)",
                  color: activeSection === href.slice(1) ? "var(--ink)" : "var(--ink-4)",
                  fontSize: "0.75rem",
                }}
                className="px-3 py-1.5 rounded-md tracking-wide transition-colors duration-150 hover:text-[var(--ink)]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right — theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme toggle pill */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-2)",
                color: "var(--ink-3)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
              }}
            >
              {isDark
                ? <><Sun className="w-3 h-3" /><span className="hidden sm:inline">Light</span></>
                : <><Moon className="w-3 h-3" /><span className="hidden sm:inline">Dark</span></>
              }
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1.5 rounded-md transition-colors"
              style={{ color: "var(--ink-3)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-24 left-4 right-4 z-40 backdrop-blur-md border rounded-[12px] md:hidden shadow-lg overflow-hidden"
          style={{ background: "color-mix(in srgb, var(--bg-card) 95%, transparent)", borderColor: "var(--border)" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.8125rem" }}
                className="px-3 py-2.5 rounded-md tracking-wide transition-colors hover:text-[var(--ink)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
