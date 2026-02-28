import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, Check } from "lucide-react";
import { EMAIL } from "@/lib/data";

interface TopNavProps {
  mounted: boolean;
}

export function TopNav({ mounted }: TopNavProps) {
  const [copied, setCopied] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const links = [
    { key: "github", label: "GitHub", href: "https://github.com/jallpatell", icon: Github },
    { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/jallpatell", icon: Linkedin },
    { key: "email", label: "Email", href: null, icon: copied ? Check : Mail },
    { key: "calendly", label: "Calendly", href: "https://calendly.com/jallpatellco", icon: Calendar },
  ];

  const handleAction = async (key: string, href: string | null) => {
    if (key === "email") {
      try {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch (err) {
        console.error("Failed to copy", err);
      }
      return;
    }
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
    >
      <div className="pointer-events-auto inline-flex items-center gap-1 bg-gradient-to-b from-[#1c1c22]/95 to-[#121218]/95 border border-white/10 rounded-2xl p-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.4),0_4px_24px_rgba(0,0,0,0.7)]">
        {links.map((link) => {
          const isHovered = hoveredKey === link.key;
          const isCopied = link.key === "email" && copied;

          return (
            <div key={link.key} className="relative">
              <button
                onClick={() => handleAction(link.key, link.href)}
                onMouseEnter={() => setHoveredKey(link.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`
                  flex items-center gap-2 px-3.5 py-2 rounded-[11px] text-[13px] font-medium tracking-tight transition-all duration-200
                  ${isHovered ? 'bg-white/10 text-[#f5f5f7]' : 'bg-transparent text-[#f5f5f7]/60'}
                  ${isCopied ? '!text-[#30d158]' : ''}
                `}
              >
                <link.icon className="w-3.5 h-3.5 opacity-70" />
                <span className="hidden sm:inline-block">{link.label}</span>
              </button>

              {isHovered && (
                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-[#121218]/98 border border-white/10 rounded-xl px-3 py-1.5 text-[11px] text-[#f5f5f7]/70 whitespace-nowrap shadow-2xl z-50 animate-tipIn pointer-events-none">
                  {isCopied ? "Copied!" : link.key === "email" ? EMAIL : (link.href || "").replace("https://", "")}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#121218]/98 border-t border-l border-white/10 rotate-45" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
