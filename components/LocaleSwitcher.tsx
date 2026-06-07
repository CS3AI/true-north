"use client";

import { ChevronDown, Globe } from "lucide-react";
import type { Locale } from "@/lib/types";
import { LOCALE_OPTIONS } from "@/lib/i18n";

interface LocaleSwitcherProps {
  active: Locale;
  onChange: (locale: Locale) => void;
}

export default function LocaleSwitcher({ active, onChange }: LocaleSwitcherProps) {
  const current = LOCALE_OPTIONS.find((o) => o.value === active);

  return (
    <div className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 pl-3 pr-2 py-1.5 transition hover:border-white/15 hover:bg-white/[0.07]">
      <Globe className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
      <select
        value={active}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="cursor-pointer appearance-none bg-transparent pr-6 text-xs font-medium text-zinc-200 outline-none"
        aria-label="Language"
      >
        {LOCALE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#0a0c14] text-zinc-100">
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 h-3 w-3 text-zinc-500" />
      <span className="sr-only">{current?.label}</span>
    </div>
  );
}
