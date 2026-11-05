import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { z } from "zod";

import { BookingForm } from "@/components/site/BookingForm";
import { images } from "@/components/site/images";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { business, services, whatsappLink } from "@/content/site";

const searchSchema = z.object({
  service: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Mobile Car Wash — Sable Auto Care" },
      {
        name: "description",
        content:
          "Request a Sable Auto Care booking online. Choose your service, preferred date, time and location — we'll confirm your appointment.",
      },
      { property: "og:title", content: "Book Your Wash — Sable Auto Care" },
      {
        property: "og:description",
        content: "Request a premium mobile car wash at your home or workplace in about two minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { service } = Route.useSearch();
  const preselected = services.find((s) => s.slug === service)?.name;

  return (
    <>
      <PageHero
        eyebrow="Book now"
        title={<>Request your <em className="text-silver">booking.</em></>}
        intro="Tell us about your vehicle and where you'd like us to meet it. We'll get back to you to confirm your appointment."
        image={images.interior}
        imageAlt="Immaculate car interior after cleaning"
      />

      <section className="section-y pt-12 md:pt-16">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <BookingForm defaultService={preselected} />
          </div>

          <aside className="space-y-8 lg:col-span-4">
            <div className="border border-border bg-card p-8 lg:sticky lg:top-28">
              <p className="eyebrow-accent">Prefer to chat?</p>
              <h2 className="mt-4 text-3xl text-foreground">Book via WhatsApp</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Send us a message with your vehicle, service and preferred time, and we'll arrange
                everything with you directly.
              </p>
              <Button asChild variant="whatsapp" size="lg" className="mt-8 w-full">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Message us
                </a>
              </Button>
              <div className="hairline my-8" />
              <p className="eyebrow">How booking works</p>
              <ol className="mt-5 space-y-4 text-sm text-silver">
                <li className="flex gap-3"><span className="text-champagne">1.</span> Send your request.</li>
                <li className="flex gap-3"><span className="text-champagne">2.</span> We confirm the time, place and price.</li>
                <li className="flex gap-3"><span className="text-champagne">3.</span> We arrive and take care of your car.</li>
              </ol>
              <div className="hairline my-8" />
              <p className="text-xs text-muted-foreground">
                Questions? Call {business.phoneDisplay} or email {business.email}.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
