import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

import { images } from "./images";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Your Car Deserves Better Care.",
  button = "Book Your Wash Today",
}: {
  title?: string;
  button?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.premium}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1200}
        height={912}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-overlay/75" />
      <div className="container-page section-y text-center">
        <Reveal>
          <p className="eyebrow-accent">We come to you</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-5xl text-foreground md:text-7xl">{title}</h2>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">{button}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
