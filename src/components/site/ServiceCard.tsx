import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { formatZAR, type Service } from "@/content/site";

import { serviceImages } from "./images";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-border/70 bg-card transition-colors duration-500 hover:border-silver/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={serviceImages[service.image]}
          alt={`${service.name} by Sable Auto Care`}
          loading="lazy"
          width={1200}
          height={912}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="bg-card-image absolute inset-0" />
        {service.comingSoon && (
          <span className="absolute left-4 top-4 bg-champagne px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            Coming soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-3xl text-foreground">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <div className="mt-auto flex items-end justify-between pt-8">
          <div>
            <p className="eyebrow">{service.priceFrom ? "From" : "Pricing"}</p>
            <p className="mt-2 font-display text-2xl text-foreground">
              {service.priceFrom ? formatZAR(service.priceFrom) : "To be confirmed"}
            </p>
          </div>
          <Link
            to="/book"
            search={{ service: service.slug }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-silver transition-colors hover:text-foreground"
            aria-label={`${service.comingSoon ? "Register interest in" : "Book"} ${service.name}`}
          >
            {service.comingSoon ? "Enquire" : "Book"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
