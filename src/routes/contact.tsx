import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { images } from "@/components/site/images";
import { MapPanel } from "@/components/site/MapPanel";
import { PageHero } from "@/components/site/PageHero";
import { PlaceholderTag } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { business, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sable Auto Care — Mobile Car Wash Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with Sable Auto Care by phone, WhatsApp, email or our contact form. View our operating hours and service areas.",
      },
      { property: "og:title", content: "Contact Sable Auto Care" },
      {
        property: "og:description",
        content: "Questions about our mobile car care services? Call, WhatsApp or send us a message.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: business.whatsappDisplay, href: whatsappLink(), external: true },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <em className="text-silver">hear from you.</em></>}
        intro="Whether you have a question about our services or would like a quote for several vehicles, we're here to help."
        image={images.detailing}
        imageAlt="Detail brush cleaning an alloy wheel"
      />

      <section className="section-y pt-12 md:pt-16">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-12 lg:col-span-5">
            <div>
              <p className="eyebrow flex items-center">
                Get in touch <PlaceholderTag />
              </p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {details.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-5 py-5"
                    >
                      <d.icon className="h-5 w-5 text-champagne" strokeWidth={1.4} />
                      <span className="flex-1">
                        <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.label}</span>
                        <span className="mt-1 block text-foreground transition-colors group-hover:text-champagne">{d.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild variant="whatsapp" size="lg" className="mt-8">
                <a href={whatsappLink("Hello Sable Auto Care, I have a question.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div>
              <p className="eyebrow flex items-center">
                <Clock className="mr-2 h-3.5 w-3.5" /> Operating hours <PlaceholderTag />
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {business.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span className="text-silver">{h.days}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow flex items-center">
                <MapPin className="mr-2 h-3.5 w-3.5" /> Service areas <PlaceholderTag label="Editable" />
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {business.serviceAreas.map((a) => (
                  <li key={a} className="border border-border px-4 py-2 text-sm text-silver">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Not sure if we cover your area? Send us a message.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-border bg-card p-8 md:p-12">
              <h2 className="text-4xl text-foreground">Send us a message</h2>
              <p className="mt-3 text-sm text-muted-foreground">We'll reply as soon as possible.</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <MapPanel />
        </div>
      </section>
    </>
  );
}
