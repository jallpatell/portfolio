import { EXPERIENCES } from "@/lib/data";

type Exp = (typeof EXPERIENCES)[0];

type SingleItem  = { type: "single";  exp: Exp; index: number };
type GroupedItem = { type: "grouped"; org: string; entries: Exp[]; index: number };
type TimelineItem = SingleItem | GroupedItem;

function buildTimeline(exps: Exp[]): TimelineItem[] {
  const items: TimelineItem[] = [];
  let i = 0;
  let counter = 1;
  while (i < exps.length) {
    const current = exps[i];
    const group: Exp[] = [current];
    while (
      i + group.length < exps.length &&
      exps[i + group.length].org === current.org
    ) {
      group.push(exps[i + group.length]);
    }
    if (group.length > 1) {
      items.push({ type: "grouped", org: current.org, entries: group, index: counter });
    } else {
      items.push({ type: "single", exp: current, index: counter });
    }
    i += group.length;
    counter++;
  }
  return items;
}

export function ExperienceSection() {
  const sorted  = [...EXPERIENCES].reverse();
  const timeline = buildTimeline(sorted);

  return (
    <section
      id="experience"
      className="py-24 relative"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="section-headline mb-6">Work history.</h2>

        {/* Ruler */}
        <div className="relative border-t mb-12 overflow-visible" style={{ borderColor: "var(--border)" }}>
          <div className="flex justify-between mt-px">
            {Array.from({ length: 24 }).map((_, j) => (
              <div key={j} className="w-px h-1.5" style={{ background: "var(--border-2)" }} />
            ))}
          </div>
          <div
            className="absolute -top-[5px] left-[12%] w-2 h-2 border rotate-45"
            style={{ borderColor: "var(--ink-4)", background: "var(--bg-page)" }}
          />
        </div>

        <div className="flex flex-col gap-0">
          {timeline.map((item, i) =>
            item.type === "grouped" ? (
              <GroupedExperience
                key={`${item.org}-${item.index}`}
                org={item.org}
                entries={item.entries}
                index={item.index}
                isLast={i === timeline.length - 1}
              />
            ) : (
              <ExperienceEntry
                key={item.exp.id}
                exp={item.exp}
                index={item.index}
                isLast={i === timeline.length - 1}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ─── LinkedIn-style grouped company block ────────────────────────────────────
function GroupedExperience({
  org,
  entries,
  index,
  isLast,
}: {
  org: string;
  entries: Exp[];
  index: number;
  isLast: boolean;
}) {
  const num       = String(index).padStart(2, "0");
  const hasActive = entries.some((e) => e.active);

  const startPeriod = entries[entries.length - 1].period.split(" – ")[0];
  const endPeriod   = entries[0].period.split(" – ")[1];
  const totalSpan   = `${startPeriod} – ${endPeriod}`;

  // Deduplicated stack across all roles
  const allStack = Array.from(new Set(entries.flatMap((e) => e.stack)));

  return (
    <div
      className={`py-10 ${!isLast ? "border-b" : ""}`}
      style={{ borderColor: "var(--border-3)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10">

        {/* Left: index + status */}
        <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
          <div className="flex items-center gap-3 md:gap-2">
            <div className="index-tag">{num}</div>
            <div className="w-6 border-t md:hidden" style={{ borderColor: "var(--border-2)" }} />
          </div>
          <div className="flex flex-col gap-1 md:mt-2">
            <div className="flex items-center gap-1.5">
              <span className={hasActive ? "diamond-filled" : "diamond-hollow"} />
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.625rem" }}
                className="uppercase tracking-wider"
              >
                {hasActive ? "current" : "past"}
              </span>
            </div>
            <span
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }}
              className="leading-relaxed"
            >
              {totalSpan}
            </span>
          </div>
        </div>

        {/* Right: company header + role list */}
        <div className="flex flex-col">

          {/* Company header */}
          <div
            className="flex items-center gap-3 mb-5 pb-4 border-b"
            style={{ borderColor: "var(--border-3)" }}
          >


            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3
                  style={{ fontFamily: "var(--font-sans)", color: "var(--ink)", fontSize: "1.125rem" }}
                  className="font-bold tracking-[-0.02em]"
                >
                  {org}
                </h3>
                {hasActive && (
                  <span className="status-pill" style={{ borderColor: "#16a34a", color: "#16a34a" }}>
                    <span className="available-dot" />
                    Current
                  </span>
                )}
              </div>
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }}
              >
                {totalSpan} · {entries.length} roles
              </span>
            </div>

            {/* Stack pills — desktop only */}
            <div className="ml-auto hidden lg:flex flex-wrap gap-1.5 justify-end max-w-[220px]">
              {allStack.map((t) => (
                <span key={t} className="status-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Role items with vertical connector */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-3 bottom-3 w-px"
              style={{ background: "var(--border-2)" }}
            />

            {entries.map((exp) => (
              <div key={exp.id} className="relative flex gap-5 pb-7 last:pb-0">
                {/* Timeline dot */}
                <div
                  className="w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background:  exp.active ? "var(--bg-card)" : "var(--ink)",
                    borderColor: exp.active ? "var(--ink)" : "var(--ink)",
                    marginTop: "2px",
                  }}
                >
                  {exp.active && (
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--ink)" }} />
                  )}
                </div>

                {/* Role details */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div>
                    <span
                      style={{ fontFamily: "var(--font-sans)", color: "var(--ink)", fontSize: "0.9375rem" }}
                      className="font-semibold tracking-[-0.01em] block mb-1"
                    >
                      {exp.role}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--ink-3)",
                      fontSize: "0.9rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {exp.details}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    {exp.achievements.map((ach) => (
                      <span key={ach} className="flex items-center gap-1.5">
                        <span style={{ color: "var(--ink-5)", fontSize: "0.625rem" }}>✓</span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--ink-4)",
                            fontSize: "0.6875rem",
                          }}
                        >
                          {ach}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Stack pills — mobile */}
            <div className="flex flex-wrap gap-1.5 mt-4 lg:hidden">
              {allStack.map((t) => (
                <span key={t} className="status-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Standard single experience entry ────────────────────────────────────────
function ExperienceEntry({
  exp,
  index,
  isLast,
}: {
  exp: Exp;
  index: number;
  isLast: boolean;
}) {
  const num = String(index).padStart(2, "0");

  return (
    <div
      className={`py-10 ${!isLast ? "border-b" : ""}`}
      style={{ borderColor: "var(--border-3)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_300px] gap-6 md:gap-10">

        <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
          <div className="flex items-center gap-3 md:gap-2">
            <div className="index-tag">{num}</div>
            <div className="w-6 border-t md:hidden" style={{ borderColor: "var(--border-2)" }} />
          </div>
          <div className="flex flex-col gap-1 md:mt-2">
            <div className="flex items-center gap-1.5">
              <span className={exp.active ? "diamond-filled" : "diamond-hollow"} />
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.625rem" }} className="uppercase tracking-wider">
                {exp.active ? "current" : "past"}
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }} className="leading-relaxed">
              {exp.period}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--ink)", fontSize: "1.1875rem" }} className="font-bold tracking-[-0.02em]">
                {exp.org}
              </h3>
              {exp.active && (
                <span className="status-pill" style={{ borderColor: "#16a34a", color: "#16a34a" }}>
                  <span className="available-dot" />
                  Current
                </span>
              )}
            </div>
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.75rem" }} className="mt-0.5">
              {exp.role}
            </p>
          </div>
          <p className="body-serif text-[0.9375rem]">{exp.details}</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {exp.stack.map((tech) => (
              <span key={tech} className="status-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="mini-window hidden md:block">
          <div className="mini-window-bar">
            <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
            <span className="window-title ml-1">key metrics</span>
          </div>
          <div className="p-3.5 flex flex-col gap-2">
            <p
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-2)", fontSize: "0.6875rem", borderLeftColor: "var(--border-2)" }}
              className="leading-relaxed border-l-2 pl-2.5"
            >
              "{exp.metric}"
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {exp.achievements.map((ach) => (
                <div key={ach} className="flex items-center gap-2">
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-5)", fontSize: "0.625rem" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.6875rem" }}>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
