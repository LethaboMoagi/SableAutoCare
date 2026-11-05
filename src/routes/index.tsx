import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Clock, Gem, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { images } from "@/components/site/images";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import { services } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sable Auto Care — Premium Mobile Car Wash at Your Doorstep" },
      {
        name: "description",
        content:
          "A cleaner car without leaving your driveway. Sable Auto Care brings premium mobile car washing to your home or workplace. Book online in minutes.",
      },
      { property: "og:title", content: "Sable Auto Care — A Cleaner Car. Without Leaving Your Driveway." },
      {
        property: "og:description",
        content: "Premium mobile car care, delivered directly to your doorstep — at home or at work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const steps = [
  { n: "01", title: "Choose your service", body: "Select from exterior, interior, full or premium care — whatever your car needs." },
  { n: "02", title: "Book your time and place", body: "Tell us when and where suits you. Home, office or another convenient location." },
  { n: "03", title: "Sit back and relax", body: "We arrive fully equipped and take care of everything while you get on with your day." },
];

const reasons = [
  { icon: MapPin, title: "Convenience at your doorstep", body: "No queues, no driving across town. We come to you." },
  { icon: Gem, title: "Attention to detail", body: "Careful hand techniques and quality products on every vehicle." },
  { icon: ShieldCheck, title: "Professional service", body: "Courteous, reliable and respectful of your property." },
  { icon: CalendarCheck, title: "Flexible bookings", body: "Choose a date, time and location that fits your schedule." },
  { icon: Star, title: "Customer satisfaction", body: "We're not finished until you're happy with the result." },
];

const gallery = [
  { src: images.headlight, alt: "Close-up of a headlight with water beads on black paint", className: "md:row-span-2" },
  { src: images.exterior, alt: "Technician hand-washing a car on a home driveway" },
  { src: images.interior, alt: "Leather seat being wiped down during an interior clean" },
  { src: images.premium, alt: "Machine polisher on glossy black paintwork" },
  { src: images.detailing, alt: "Brush cleaning an alloy wheel and brake caliper" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 md:items-center md:pb-0">
        <img
          src={images.heroCar}
          alt="A freshly washed dark sedan parked on a residential driveway at dusk"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover object-[70%_center]"
        />
        <div className="bg-hero-overlay absolute inset-0 -z-10" />
        <div className="bg-fade-bottom absolute inset-0 -z-10" />
        <div className="container-page">
          <p className="eyebrow animate-rise">Premium mobile car care</p>
          <h1 className="mt-6 max-w-3xl animate-rise text-5xl text-foreground [animation-delay:120ms] sm:text-6xl md:text-8xl">
            A Cleaner Car. <em className="text-silver">Without Leaving Your Driveway.</em>
          </h1>
          <p className="mt-8 max-w-lg animate-rise text-base leading-relaxed text-silver [animation-delay:240ms] md:text-lg">
            Premium mobile car care, delivered directly to your doorstep. Enjoy professional vehicle
            cleaning at your home or workplace.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">Book Your Wash</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-y">
        <div className="container-page grid items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <SectionHeading
              eyebrow="Introducing Sable"
              title={<>Exceptional care, <em className="text-silver">wherever you are.</em></>}
              intro="Sable Auto Care is a premium mobile car wash and vehicle care service. Rather than taking your car to a wash bay, we bring the wash to you — arriving at your home, office or residential estate with everything needed to clean your vehicle properly."
            />
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              You simply book a time, tell us where your car will be, and carry on with your day.
              We take care of the rest, with the patience and attention your vehicle deserves.
            </p>
            <Link to="/about" className="link-underline mt-10 inline-block pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Our story
            </Link>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:col-start-8">
            <div className="relative">
              <img
                src={images.exterior}
                alt="Sable Auto Care technician washing a car at a client's home"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/5] w-full object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 hidden border border-border bg-card px-6 py-5 md:block">
                <p className="eyebrow-accent">Mobile service</p>
                <p className="mt-2 font-display text-2xl text-foreground">We come to you.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-y border-t border-border/60 bg-card/40">
        <div className="container-page">
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Care, tailored to your vehicle."
              intro="From a quick exterior refresh to our most thorough premium wash."
            />
            <Button asChild variant="heroOutline" size="lg" className="self-start md:self-end">
              <Link to="/services">View all services</Link>
            </Button>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((s) => !s.comingSoon)
              .map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Prices are indicative placeholders and may vary depending on vehicle size and condition.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading align="center" eyebrow="How it works" title="Three simple steps." />
          </Reveal>
          <ol className="mt-20 grid gap-12 md:grid-cols-3 md:gap-0">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 150} className="relative md:px-10 md:first:pl-0 md:last:pr-0">
                {i > 0 && <span aria-hidden="true" className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />}
                <span className="font-display text-7xl text-champagne/80">{s.n}</span>
                <h3 className="mt-6 text-3xl text-foreground">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-y border-t border-border/60">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <img
              src={images.headlight}
              alt="Close-up of a car headlight with water droplets"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <SectionHeading eyebrow="Why Sable" title="Why choose Sable Auto Care?" />
            </Reveal>
            <ul className="mt-12 divide-y divide-border border-y border-border">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 80} className="flex gap-6 py-6">
                  <r.icon className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.4} />
                  <div>
                    <h3 className="font-sans text-base font-semibold text-foreground">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />

      <Testimonials />

      {/* Gallery */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Gallery" title="The details matter." />
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-champagne" /> Illustrative imagery — replace with your own work.
            </p>
          </Reveal>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 80} className={`group overflow-hidden ${g.className ?? ""}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing strip */}
      <section className="border-t border-border/60 py-12">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="font-display text-3xl text-foreground md:text-4xl">
            Discover. Choose. Book. <em className="text-silver">We come to you.</em>
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> Booking takes about two minutes.
          </div>
        </div>
      </section>
    </>
  );
}
