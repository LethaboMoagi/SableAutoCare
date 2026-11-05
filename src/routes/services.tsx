import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { images, serviceImages } from "@/components/site/images";
import { PageHero } from "@/components/site/PageHero";
import { PlaceholderTag } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { formatZAR, services } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Sable Auto Care Mobile Car Wash" },
      {
        name: "description",
        content:
          "Exterior wash, interior cleaning, full car wash and premium wash — delivered to your home or workplace. View what's included and prices in ZAR.",
      },
      { property: "og:title", content: "Services & Pricing — Sable Auto Care" },
      {
        property: "og:description",
        content: "Premium mobile car care services with clear inclusions and pricing in South African Rand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Every service, <em className="text-silver">at your doorstep.</em></>}
        intro="Choose the level of care your vehicle needs. Every service is carried out on location, by hand, with quality products."
        image={images.full}
        imageAlt="Car covered in snow foam on a home driveway"
      />

      <section className="section-y">
        <div className="container-page space-y-24 md:space-y-36">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-10 md:grid-cols-12 md:gap-16">
              <Reveal className={cn("md:col-span-6", i % 2 === 1 && "md:order-2 md:col-start-7")}>
                <div className="relative overflow-hidden">
                  <img
                    src={serviceImages[s.image]}
                    alt={`${s.name} service`}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {s.comingSoon && (
                    <span className="absolute left-5 top-5 bg-champagne px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
              </Reveal>
              <Reveal delay={120} className={cn("md:col-span-5", i % 2 === 1 ? "md:order-1" : "md:col-start-8")}>
                <p className="eyebrow">0{i + 1} — Service</p>
                <h2 className="mt-5 text-5xl text-foreground md:text-6xl">{s.name}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">{s.description}</p>

                <h3 className="eyebrow mt-10">What's included</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-silver">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <dl className="mt-10 grid grid-cols-2 border-y border-border">
                  <div className="py-5 pr-4">
                    <dt className="eyebrow flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" /> Duration
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-foreground">
                      {s.duration}
                      <PlaceholderTag label="Estimate" />
                    </dd>
                  </div>
                  <div className="border-l border-border py-5 pl-6">
                    <dt className="eyebrow">{s.priceFrom ? "Price from" : "Price"}</dt>
                    <dd className="mt-2 font-display text-2xl text-foreground">
                      {s.priceFrom ? formatZAR(s.priceFrom) : "To be confirmed"}
                      {s.priceFrom && <PlaceholderTag label="Editable" />}
                    </dd>
                  </div>
                </dl>

                <Button asChild variant={s.comingSoon ? "heroOutline" : "hero"} size="lg" className="mt-10">
                  <Link to="/book" search={{ service: s.slug }}>
                    {s.comingSoon ? "Register interest" : `Book ${s.name}`}
                  </Link>
                </Button>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-14">
        <div className="container-page">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Please note:</span> prices shown are starting
            prices in South African Rand (ZAR) and may vary depending on vehicle size and condition.
            Your final price will be confirmed before your appointment. Multi-vehicle and corporate
            fleet pricing is available on request.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
