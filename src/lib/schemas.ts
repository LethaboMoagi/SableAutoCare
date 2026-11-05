import { z } from "zod";

import { services, vehicleSizes } from "@/content/site";

const serviceNames = services.map((s) => s.name) as [string, ...string[]];

/** Today's date in South Africa (UTC+2) as YYYY-MM-DD. */
export function todayInSA(now: Date = new Date()) {
  const sa = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  return sa.toISOString().slice(0, 10);
}

const phone = z
  .string()
  .trim()
  .min(7, { message: "Please enter a valid contact number" })
  .max(20, { message: "Contact number is too long" })
  .regex(/^[+()\d\s-]+$/, { message: "Use digits, spaces, +, ( ) or - only" });

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be under 100 characters" }),
  phone,
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  vehicleMakeModel: z
    .string()
    .trim()
    .min(2, { message: "Please enter your vehicle's make and model" })
    .max(100, { message: "Must be under 100 characters" }),
  vehicleSize: z.enum(vehicleSizes, { message: "Please choose a vehicle size" }),
  service: z.enum(serviceNames, { message: "Please choose a service" }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Please choose a date" })
    .refine((d) => d >= todayInSA(), { message: "Please choose today or a future date" }),
  preferredTime: z.string().regex(/^\d{2}:\d{2}$/, { message: "Please choose a time" }),
  address: z
    .string()
    .trim()
    .min(5, { message: "Please enter the service address" })
    .max(300, { message: "Address must be under 300 characters" }),
  instructions: z
    .string()
    .trim()
    .max(1000, { message: "Instructions must be under 1000 characters" })
    .optional()
    .or(z.literal("")),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: phone.optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, { message: "Please enter a message" })
    .max(1000, { message: "Message must be under 1000 characters" }),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
