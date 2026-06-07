"use client";

import { ChevronDown } from "lucide-react";
import { ISSUE_IDS } from "@/lib/issues";
import type { IssueId } from "@/lib/types";
import type { UiStrings } from "@/lib/i18n";

interface HeaderBrandProps {
  ui: UiStrings;
  issueId: IssueId;
  onIssueChange: (issue: IssueId) => void;
}

export default function HeaderBrand({ ui, issueId, onIssueChange }: HeaderBrandProps) {
  return (
    <div className="flex flex-col items-end text-right">
      <p className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
        YCM Studio
      </p>
      <p className="mt-0.5 text-xs tracking-[0.35em] text-slate-400 sm:text-sm">
        Youth · Cognition · Machine
      </p>

      <div className="relative mt-3 inline-flex items-center rounded border border-cyan-400/15 bg-cyan-400/[0.04] pl-2.5 pr-7 py-1 backdrop-blur-sm transition hover:border-cyan-400/25">
        <select
          value={issueId}
          onChange={(e) => onIssueChange(e.target.value as IssueId)}
          className="max-w-[min(100vw-2rem,20rem)] cursor-pointer appearance-none bg-transparent font-mono text-[10px] tracking-wide text-cyan-400/90 outline-none"
          aria-label="Issue archive"
        >
          {ISSUE_IDS.map((id) => (
            <option key={id} value={id} className="bg-[#0a0c14] text-cyan-200">
              {ui.issueBadges[id]}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 h-3 w-3 text-cyan-500/70" />
      </div>
    </div>
  );
}
