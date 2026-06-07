"use client";

import type { ReactNode } from "react";

export type ArticleLayout = "masonry" | "grid";

interface MasonryGridProps {
  children: ReactNode;
  layout?: ArticleLayout;
}

export default function MasonryGrid({ children, layout = "masonry" }: MasonryGridProps) {
  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    );
  }

  return <div className="masonry-grid">{children}</div>;
}
