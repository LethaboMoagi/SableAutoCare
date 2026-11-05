import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex flex-col leading-none", className)} aria-label="Sable Auto Care — home">
      <span className="font-display text-2xl tracking-[0.32em] text-foreground">SABLE</span>
      <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.5em] text-silver">AUTO CARE</span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border/60 bg-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className={cn("container-page flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20 md:h-24")}>
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline pb-1 text-xs font-medium uppercase tracking-[0.2em] text-silver transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/book">Book Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col border-border bg-background sm:max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="pt-2">
                <Logo />
              </div>
              <nav aria-label="Mobile" className="mt-12 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-4 font-display text-3xl text-silver transition-colors hover:text-foreground"
                    activeProps={{ className: "text-foreground" }}
                    activeOptions={{ exact: true }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild variant="hero" size="lg" className="mt-auto">
                <Link to="/book" onClick={() => setOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
