import { useState, useMemo } from "react";
import { AdvantageData } from "../Data/Advantage.js";

export default function Advantage() {
  const [activeId, setActiveId] = useState(AdvantageData?.[0]?.id ?? null);

  // Active item for the right-side preview
  const activeItem = useMemo(
    () => AdvantageData.find((x) => x.id === activeId) ?? AdvantageData[0],
    [activeId]
  );

  return (
    <section className="bg-gray-100 w-full mt-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-left">ALLEN App Advantage</h1>

        {/* Two-column layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Accordion */}
          <div>
            {AdvantageData.map((item) => {
              const open = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className="py-6 border-b border-slate-200"
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">{item.title}</h2>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveId(open ? null : item.id)
                      }
                      aria-expanded={open}
                      aria-controls={`panel-${item.id}`}
                      className="p-2 rounded-lg hover:bg-slate-100 transition"
                      title={open ? "Collapse" : "Expand"}
                    >
                      <span
                        className={`inline-block text-2xl leading-none transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {item.icon ?? "⌃"}
                      </span>
                    </button>
                  </div>

                  {/* Collapsible panel (text only on left) */}
                  <div
                    id={`panel-${item.id}`}
                    role="region"
                    className={`mt-3 overflow-hidden transition-[max-height,opacity,transform] duration-300 ${
                      open
                        ? "max-h-[1000px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-1"
                    }`}
                  >
                    <p className="text-slate-600 leading-6">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky preview of the active item */}
          <div className="lg:sticky lg:top-24 self-start">
            {activeItem && (
              <div className="flex justify-center">
                <img
                  src={activeItem.src}
                  alt={activeItem.title || "Preview"}
                  className="w-full max-w-[560px] rounded-3xl shadow"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            {/* Optional CTA like Allen */}
            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
