import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { business } from "@/content/site";

import { PlaceholderTag } from "./Placeholder";
import { Logo } from "./SiteHeader";

const icons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin };

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-page grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{business.tagline}</p>
          <div className="mt-8 flex items-center gap-3">
            {business.social.map((s) => {
              const Icon = icons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (placeholder link)`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-silver transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <PlaceholderTag />
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Explore</p>
          <ul className="mt-6 space-y-3 text-sm">
            {(
              [
                ["/about", "About"],
                ["/services", "Services"],
                ["/book", "Book Now"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ] as const
            ).map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="link-underline text-silver hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-6 space-y-3 text-sm text-silver">
            <li>
              <a href={business.phoneHref} className="link-underline hover:text-foreground">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="link-underline hover:text-foreground">
                {business.email}
              </a>
            </li>
            <li>
              <PlaceholderTag className="ml-0" />
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Hours</p>
          <ul className="mt-6 space-y-3 text-sm text-silver">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-foreground">{h.time}</span>
              </li>
            ))}
            <li>
              <PlaceholderTag className="ml-0" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-border/60 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Sable Auto Care. All rights reserved.</p>
        <p>Premium mobile car care · South Africa</p>
      </div>
    </footer>
  );
}
