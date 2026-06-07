"use client";

import type { Persona } from "@/lib/types";
import { PERSONA_ORDER, type UiStrings } from "@/lib/i18n";

interface PersonaTabsProps {
  active: Persona;
  onChange: (persona: Persona) => void;
  ui: UiStrings;
}

export default function PersonaTabs({ active, onChange, ui }: PersonaTabsProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {PERSONA_ORDER.map((key) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm",
              isActive
                ? "bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200",
            ].join(" ")}
          >
            {ui.personas[key]}
          </button>
        );
      })}
    </div>
  );
}
