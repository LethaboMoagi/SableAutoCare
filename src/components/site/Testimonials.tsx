import { testimonials } from "@/content/site";

import { PlaceholderTag } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-ivory section-y">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading tone="light" eyebrow="Testimonials" title="Kind words from our customers." />
          <PlaceholderTag label="Sample reviews — replace before launch" className="ml-0 self-start md:self-end" />
        </Reveal>
        <div className="mt-16 grid gap-px bg-ivory-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120} as="figure" className="flex flex-col bg-ivory p-8 md:p-10">
              <span aria-hidden="true" className="font-display text-6xl leading-none text-champagne">
                “
              </span>
              <blockquote className="mt-2 font-display text-2xl leading-snug text-ivory-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-10">
                <p className="text-sm font-semibold text-ivory-foreground">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory-muted">{t.detail}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
