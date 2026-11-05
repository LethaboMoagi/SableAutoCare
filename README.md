# Sable Auto Care — Website

Premium mobile car wash website: Home, About, Services, Book Now, Contact and FAQ.
Built with React (TanStack Start), Tailwind CSS v4 and Lovable Cloud for storing
booking requests and contact messages.

## Run locally

Requirements: [Bun](https://bun.sh) 1.1+ (or Node 20+ with npm).

```bash
bun install
bun run dev        # http://localhost:8080
bun run test       # form validation and routing tests
bun run build      # production build
```

The `.env` file (created by Lovable Cloud) holds the public backend URL and key.
Server-side keys are injected automatically in the hosted environment.

## Deploy

- **Lovable:** click **Publish** in the editor. You can connect a custom domain
  (e.g. `sableautocare.co.za`) under Project Settings → Domains.
- **Elsewhere:** the app builds for edge/serverless runtimes (`bun run build`).
  Booking and contact forms need the Lovable Cloud backend environment
  variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, plus the `VITE_` ones)
  to be available on the host.

## Where form submissions go

| Form | Stored in | How to view |
| --- | --- | --- |
| Booking request (`/book`) | `booking_requests` table | Lovable → Cloud → Database → `booking_requests` |
| Contact form (`/contact`) | `contact_submissions` table | Lovable → Cloud → Database → `contact_submissions` |

Bookings are **requests**, not confirmed appointments. Each new row has
`status = 'new'`.

### Integrations not yet connected

- **Email notifications** to the business when a booking/message arrives —
  needs a verified sending domain (paid plan). Not active yet.
- **Booking management / calendar** (confirming, rescheduling, availability) —
  not built; bookings are handled manually.
- **Online payments** — not included.
- **WhatsApp** — uses standard `wa.me` links (no API needed). Set the real number.
- **Google Maps** — paste an embed URL into `business.mapEmbedUrl`.

## Customise before launch

All editable content lives in **`src/content/site.ts`**.

- [ ] Phone number (`phoneDisplay`, `phoneHref`)
- [ ] WhatsApp number (`whatsappDisplay`, `whatsappNumber` — digits only, e.g. `27821234567`)
- [ ] Business email (`email`)
- [ ] Operating hours (`hours`)
- [ ] Service areas (`serviceAreas`)
- [ ] Google Maps embed URL (`mapEmbedUrl`)
- [ ] Social media links (`social`)
- [ ] Service prices in ZAR (`services[].priceFrom`)
- [ ] Estimated durations (`services[].duration`)
- [ ] What's included per service (`services[].includes`)
- [ ] Testimonials — replace sample text with genuine reviews (`testimonials`)
- [ ] FAQ answers on water/electricity and payment methods (`faqs`)
- [ ] Photographs — replace generated images in `src/assets/` with your own work
- [ ] Favicon (`public/favicon.ico`)
- [ ] When everything is real, set `SHOW_PLACEHOLDER_MARKERS = false` to hide the
      "Placeholder" tags on the site.
