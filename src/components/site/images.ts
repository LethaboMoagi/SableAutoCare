import heroCar from "@/assets/hero-car.jpg";
import headlight from "@/assets/headlight.jpg";
import exterior from "@/assets/exterior-wash.jpg";
import interior from "@/assets/interior-cleaning.jpg";
import full from "@/assets/full-wash.jpg";
import premium from "@/assets/premium-polish.jpg";
import detailing from "@/assets/detailing.jpg";

import type { Service } from "@/content/site";

export const images = { heroCar, headlight, exterior, interior, full, premium, detailing };

export const serviceImages: Record<Service["image"], string> = {
  exterior,
  interior,
  full,
  premium,
  detailing,
};
