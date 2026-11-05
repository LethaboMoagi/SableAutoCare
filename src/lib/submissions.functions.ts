import { createServerFn } from "@tanstack/react-start";

import { bookingSchema, contactSchema } from "./schemas";

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently accept bot submissions caught by the honeypot.
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("booking_requests").insert({
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      vehicle_make_model: data.vehicleMakeModel,
      vehicle_size: data.vehicleSize,
      service: data.service,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      address: data.address,
      instructions: data.instructions || null,
    });

    if (error) {
      console.error("booking insert failed", error);
      return { ok: false as const, error: "We couldn't send your request. Please try again or use WhatsApp." };
    }
    return { ok: true as const };
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });

    if (error) {
      console.error("contact insert failed", error);
      return { ok: false as const, error: "We couldn't send your message. Please try again or use WhatsApp." };
    }
    return { ok: true as const };
  });
