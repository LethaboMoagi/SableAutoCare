import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "dark", className }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", tone === "light" && "text-ivory-muted")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 text-4xl md:text-6xl",
          tone === "light" ? "text-ivory-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-ivory-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
