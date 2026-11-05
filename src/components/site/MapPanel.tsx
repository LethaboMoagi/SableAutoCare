import { MapPin } from "lucide-react";

import { business } from "@/content/site";

import { PlaceholderTag } from "./Placeholder";

/** Google Maps embed — shows a placeholder panel until a map URL is set in content. */
export function MapPanel() {
  if (business.mapEmbedUrl) {
    return (
      <iframe
        title="Sable Auto Care service area map"
        src={business.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border border-border grayscale md:h-96"
      />
    );
  }
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-4 border border-dashed border-border bg-card text-center md:h-96">
      <MapPin className="h-6 w-6 text-champagne" />
      <p className="font-display text-2xl text-foreground">Service area map</p>
      <p className="max-w-xs text-sm text-muted-foreground">
        A map of our service areas will appear here once they are confirmed.
      </p>
      <PlaceholderTag className="ml-0" />
    </div>
  );
}
