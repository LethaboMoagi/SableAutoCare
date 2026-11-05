import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/content/site";

/** Floating WhatsApp shortcut shown on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sable Auto Care on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary shadow-elegant transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
