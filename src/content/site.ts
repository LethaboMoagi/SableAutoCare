/**
 * SABLE AUTO CARE — editable site content.
 *
 * Everything the business needs to customise before launch lives in this file.
 * Items marked `placeholder: true` (or listed under PLACEHOLDER comments) are
 * NOT real business information yet. Replace them, then set
 * `SHOW_PLACEHOLDER_MARKERS` to false to hide the on-page "Placeholder" tags.
 */

export const SHOW_PLACEHOLDER_MARKERS = true;

export const business = {
  name: "Sable Auto Care",
  legalName: "SABLE AUTO CARE",
  tagline: "Exceptional Care. Delivered to Your Doorstep.",
  // PLACEHOLDER — replace with real details before launch.
  phoneDisplay: "+27 (0)71 755 8999",
  phoneHref: "tel:+270000000000",
  whatsappDisplay: "+27 (0)00 000 0000",
  /** International format, digits only, no "+" (e.g. 27821234567). */
  whatsappNumber: "270000000000",
  email: "hello@yourdomain.co.za",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 17:00" },
    { days: "Saturday", time: "08:00 – 14:00" },
    { days: "Sunday & public holidays", time: "By arrangement" },
  ],
  serviceAreas: ["Service area 1", "Service area 2", "Service area 3", "Service area 4"],
  /**
   * Google Maps embed URL for the service area. Leave empty to show the
   * "map coming soon" panel. Get one from Google Maps → Share → Embed a map.
   */
  mapEmbedUrl: "",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  ] as const,
};

export function whatsappLink(message = "Hello Sable Auto Care, I'd like to book a wash.") {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ServiceSlug =
  | "exterior-wash"
  | "interior-cleaning"
  | "full-car-wash"
  | "premium-wash"
  | "vehicle-detailing";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  includes: string[];
  /** PLACEHOLDER — estimated duration. */
  duration: string;
  /** PLACEHOLDER — starting price in ZAR, editable. */
  priceFrom: number | null;
  image: "exterior" | "interior" | "full" | "premium" | "detailing";
  comingSoon?: boolean;
};

export const services: Service[] = [
  {
    slug: "exterior-wash",
    name: "Exterior Wash",
    short: "A careful hand wash that restores your car's shine.",
    description:
      "A meticulous two-bucket hand wash using pH-neutral shampoo and soft microfibre, finished with a streak-free dry. Ideal for keeping a well-kept car looking its best between deeper cleans.",
    includes: [
      "Pre-rinse and snow-foam pre-wash",
      "Two-bucket hand wash",
      "Wheels, tyres and arches cleaned",
      "Tyre dressing",
      "Exterior glass and mirrors",
      "Microfibre hand dry",
    ],
    duration: "± 45 minutes",
    priceFrom: 250,
    image: "exterior",
  },
  {
    slug: "interior-cleaning",
    name: "Interior Cleaning",
    short: "A fresh, tidy cabin — every surface considered.",
    description:
      "A thorough clean of your vehicle's cabin, from the carpets to the console. We vacuum, wipe and refresh so that every journey feels a little more pleasant.",
    includes: [
      "Full vacuum of seats, carpets and boot",
      "Dashboard, console and door panels wiped",
      "Interior glass cleaned",
      "Floor mats cleaned",
      "Air vents dusted",
      "Light fragrance (optional)",
    ],
    duration: "± 60 minutes",
    priceFrom: 300,
    image: "interior",
  },
  {
    slug: "full-car-wash",
    name: "Full Car Wash",
    short: "Inside and out, in one convenient visit.",
    description:
      "Our most popular service combines the Exterior Wash and Interior Cleaning, leaving your car clean throughout — without you having to leave home or the office.",
    includes: [
      "Everything in the Exterior Wash",
      "Everything in Interior Cleaning",
      "Door shuts and sills wiped",
      "Final quality inspection",
    ],
    duration: "± 1 hour 45 minutes",
    priceFrom: 450,
    image: "full",
  },
  {
    slug: "premium-wash",
    name: "Premium Wash",
    short: "Our most thorough wash, with added protection.",
    description:
      "For those who want more than clean. A complete inside-and-out service with decontamination, protective sealant and conditioned trims for a deeper, longer-lasting finish.",
    includes: [
      "Everything in the Full Car Wash",
      "Paint decontamination",
      "Spray sealant for gloss and protection",
      "Leather or fabric seats conditioned",
      "Plastics and trims dressed",
      "Wheel faces sealed",
    ],
    duration: "± 3 hours",
    priceFrom: 850,
    image: "premium",
  },
  {
    slug: "vehicle-detailing",
    name: "Vehicle Detailing",
    short: "Paint correction and restoration — coming soon.",
    description:
      "A comprehensive detailing service, including machine polishing and paint correction, is in development. Register your interest and we'll be in touch when bookings open.",
    includes: [
      "Machine polishing and paint correction",
      "Deep interior shampoo",
      "Engine bay clean",
      "Long-term paint protection",
    ],
    duration: "To be confirmed",
    priceFrom: null,
    image: "detailing",
    comingSoon: true,
  },
];

export const vehicleSizes = [
  "Hatchback / small car",
  "Sedan",
  "SUV / crossover",
  "Bakkie / double cab",
  "Large SUV / 7-seater",
  "Van / minibus",
] as const;

export function formatZAR(amount: number) {
  return `R${amount.toLocaleString("en-ZA")}`;
}

/** PLACEHOLDER testimonials — sample text only. Replace with genuine reviews. */
export const testimonials = [
  {
    quote:
      "Sample review — replace with a genuine customer testimonial. A short sentence about how convenient it was to have the car washed at home.",
    name: "Customer name",
    detail: "Suburb · Full Car Wash",
  },
  {
    quote:
      "Sample review — replace with a genuine customer testimonial. A comment on the attention to detail and the friendly, professional team.",
    name: "Customer name",
    detail: "Suburb · Premium Wash",
  },
  {
    quote:
      "Sample review — replace with a genuine customer testimonial. A note from a business client about having several vehicles cleaned at the office.",
    name: "Company name",
    detail: "Corporate client · Fleet",
  },
];

export const faqs = [
  {
    q: "How does the mobile car wash service work?",
    a: "Choose a service and request a booking online or via WhatsApp. We confirm your date, time and location, then arrive fully equipped to clean your vehicle wherever it's parked — at home, at work or another convenient spot.",
  },
  {
    q: "Which areas do you service?",
    a: "We currently service selected areas, listed on our Contact page. If you're unsure whether we cover your location, send us a message and we'll let you know.",
  },
  {
    q: "Do I need to provide water or electricity?",
    a: "Please confirm this with us when booking. Let us know in the additional instructions whether there is a water point or power outlet available at your location.",
  },
  {
    q: "How long does a wash take?",
    a: "It depends on the service and the size and condition of your vehicle. An Exterior Wash typically takes under an hour, while our Premium Wash can take around three hours. Estimated durations are shown on each service.",
  },
  {
    q: "How do I make a booking?",
    a: "Use the booking form on our website, or message us on WhatsApp. Online bookings are received as requests — we'll contact you to confirm the appointment before your wash.",
  },
  {
    q: "Can I book at my workplace?",
    a: "Yes. Many customers have their car cleaned while they work. Please make sure we're permitted to access the parking area, and include any gate or parking details in your booking.",
  },
  {
    q: "Do you offer services for multiple vehicles?",
    a: "Yes. We welcome households with more than one vehicle, as well as businesses and corporate fleets. Get in touch for a tailored quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Accepted payment methods will be confirmed with your booking. Please contact us if you have a specific preference.",
  },
];
