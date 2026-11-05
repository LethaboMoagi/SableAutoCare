import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { images } from "@/components/site/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sable Auto Care — Our Story, Mission and Vision" },
      {
        name: "description",
        content:
          "Sable Auto Care was founded around convenience, quality and making vehicle care easier. Learn about our story, mission and commitment to every customer.",
      },
      { property: "og:title", content: "About Sable Auto Care" },
      {
        property: "og:description",
        content: "Founded on convenience and quality — premium mobile car care delivered to your doorstep.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    eyebrow: "Our mission",
    title: "To make exceptional vehicle care effortless.",
    body: "We deliver professional, thorough car care at the places our customers already are — so that keeping a vehicle in excellent condition never has to compete with a busy life.",
  },
  {
    eyebrow: "Our vision",
    title: "To be the most trusted name in mobile car care.",
    body: "We aim to set the standard for what a mobile car wash can be: reliable, refined and consistently excellent, recognised by our customers for the care we show their vehicles and their time.",
  },
];

const commitments = [
  "Careful hand-wash techniques that respect your paintwork",
  "Quality, purpose-made cleaning products",
  "Punctual, courteous and professional team members",
  "Clear communication from booking to completion",
  "A final inspection on every vehicle before we leave",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Built around <em className="text-silver">convenience and quality.</em></>}
        intro="Sable Auto Care brings premium vehicle cleaning to your doorstep, so you can enjoy a cared-for car without giving up your time."
        image={images.headlight}
        imageAlt="Close-up of a polished headlight with water beads"
      />

      <section className="section-y">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow="Who we are" title="A different kind of car wash." />
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Sable Auto Care is a premium mobile car wash and vehicle care service. We serve private
              vehicle owners, busy professionals, families, residents of apartments and estates, and
              businesses with one vehicle or many.
            </p>
            <p>
              Our approach is simple: arrive on time, treat every vehicle with care, and leave it
              looking its very best — all without our customers needing to leave home or the office.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border/60 bg-card/40">
        <div className="container-page grid items-center gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <img
              src={images.exterior}
              alt="Technician washing a car with a microfibre mitt"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <SectionHeading
              eyebrow="Our story"
              title="Vehicle care, made easier."
              intro="Sable Auto Care was established with one idea in mind: looking after your car shouldn't take up your weekend."
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Too often, a clean car means queuing at a wash bay or rushing between errands. We set out
              to change that by bringing a careful, professional service directly to our customers —
              combining the convenience of a mobile service with the standards of a dedicated detailer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-px bg-border md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.eyebrow} delay={i * 120} className="bg-background p-8 md:p-14">
              <p className="eyebrow-accent">{p.eyebrow}</p>
              <h3 className="mt-6 text-4xl text-foreground md:text-5xl">{p.title}</h3>
              <p className="mt-6 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory section-y">
        <div className="container-page grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionHeading
              tone="light"
              eyebrow="Our commitment"
              title="Quality you can see. Service you can trust."
              intro="Every booking is handled with the same standard of care, whether it's a single family car or an entire company fleet."
            />
          </Reveal>
          <ul className="md:col-span-6 md:col-start-7">
            {commitments.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 80} className="flex items-baseline gap-6 border-b border-ivory-border py-6">
                <span className="font-display text-xl text-ivory-muted">0{i + 1}</span>
                <span className="text-lg text-ivory-foreground">{c}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
