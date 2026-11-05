import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { images } from "@/components/site/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Sable Auto Care" },
      {
        name: "description",
        content:
          "Answers to common questions about Sable Auto Care's mobile car wash: how it works, service areas, booking, duration, workplace washes and fleets.",
      },
      { property: "og:title", content: "FAQ — Sable Auto Care" },
      {
        property: "og:description",
        content: "Everything you need to know about our premium mobile car wash service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, <em className="text-silver">answered.</em></>}
        intro="Everything you need to know about how our mobile service works."
        image={images.premium}
        imageAlt="Polisher on glossy black paint"
      />
      <section className="section-y pt-12 md:pt-16">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Still curious?</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              If your question isn't covered here, we're happy to help.
            </p>
            <Link to="/contact" className="link-underline mt-6 inline-block pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact us
            </Link>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q-${i}`} className="border-border">
                  <AccordionTrigger className="py-7 font-display text-2xl font-normal text-foreground hover:no-underline md:text-3xl [&>svg]:text-champagne">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-8 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
