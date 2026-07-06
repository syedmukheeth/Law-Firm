import type { ReactNode } from "react";
import { ChapterProgress } from "@/components/animation/ChapterProgress";
import type { Chapter } from "@/lib/data/chapters";

export function StoryLayout({
  actNumber,
  totalActs = 5,
  actLabel,
  chapters,
  children,
}: {
  actNumber?: number;
  totalActs?: number;
  actLabel: string;
  chapters?: Chapter[];
  children: ReactNode;
}) {
  return (
    <>
      <ChapterProgress
        actNumber={actNumber}
        totalActs={totalActs}
        actLabel={actLabel}
        chapters={chapters}
      />
      {children}
    </>
  );
}
