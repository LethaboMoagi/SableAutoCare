import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden pb-16 pt-36 md:min-h-[70vh] md:pb-24">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="bg-fade-bottom absolute inset-0 -z-10" />
      <div className="container-page">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl animate-rise text-5xl text-foreground [animation-delay:120ms] md:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-silver [animation-delay:240ms] md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
