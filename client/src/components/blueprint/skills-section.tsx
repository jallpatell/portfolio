import { Check } from "lucide-react";
import { SKILLS } from "@/lib/data";

const CAT_ICON: Record<string, string> = {
  Languages: "{ }",
  Backend:   "⚙",
  Frontend:  "◻",
  Databases: "◈",
  DevOps:    "⬡",
  Web3:      "◇",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="section-headline mb-12">What I work with.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group) => (
            <SkillWindow key={group.cat} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillWindow({ group }: { group: (typeof SKILLS)[0] }) {
  const icon = CAT_ICON[group.cat] ?? "·";
  const half = Math.ceil(group.items.length / 2);
  const col1 = group.items.slice(0, half);
  const col2 = group.items.slice(half);

  return (
    <div className="mini-window">
      <div className="mini-window-bar">
        <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
        <span
          style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.5625rem" }}
          className="ml-1.5 tracking-wide flex items-center gap-1.5"
        >
          <span className="text-[0.625rem]">{icon}</span>
          {group.cat}
        </span>
      </div>

      <div className="p-3.5 grid grid-cols-2 gap-x-3 gap-y-0.5">
        {col1.map((item, i) => (
          <SkillRow key={item} item={item} paired={col2[i]} />
        ))}
      </div>
    </div>
  );
}

function SkillRow({ item, paired }: { item: string; paired?: string }) {
  return (
    <>
      <div className="flex items-center justify-between py-1.5 border-b" style={{ borderColor: "var(--border-3)" }}>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-2)", fontSize: "0.6875rem" }}>{item}</span>
        <Check className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "var(--ink-5)" }} />
      </div>
      {paired !== undefined ? (
        <div className="flex items-center justify-between py-1.5 border-b" style={{ borderColor: "var(--border-3)" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-2)", fontSize: "0.6875rem" }}>{paired}</span>
          <Check className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "var(--ink-5)" }} />
        </div>
      ) : (
        <div className="py-1.5 border-b" style={{ borderColor: "var(--border-3)" }} />
      )}
    </>
  );
}
