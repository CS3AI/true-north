import type { UiStrings } from "@/lib/i18n";

interface BrandMarkProps {
  ui: UiStrings;
}

export default function BrandMark({ ui }: BrandMarkProps) {
  return (
    <footer className="mt-16 border-t border-white/5 py-8 text-center">
      <p className="text-[11px] font-light tracking-[0.25em] uppercase text-zinc-600">
        {ui.poweredBy}{" "}
        <span className="font-medium tracking-[0.15em] text-zinc-500">YCM Studio</span>
        <span className="mx-2 text-zinc-700">·</span>
        <span className="normal-case tracking-widest text-zinc-500">
          Youth · Cognition · Machine
        </span>
      </p>
    </footer>
  );
}
