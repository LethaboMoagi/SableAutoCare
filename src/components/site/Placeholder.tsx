import { SHOW_PLACEHOLDER_MARKERS } from "@/content/site";
import { cn } from "@/lib/utils";

/** Small tag marking content that must be replaced before launch. */
export function PlaceholderTag({ className, label = "Placeholder" }: { className?: string; label?: string }) {
  if (!SHOW_PLACEHOLDER_MARKERS) return null;
  return (
    <span
      className={cn(
        "ml-2 inline-flex items-center rounded-sm border border-champagne/50 px-1.5 py-0.5 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-champagne",
        className,
      )}
    >
      {label}
    </span>
  );
}
