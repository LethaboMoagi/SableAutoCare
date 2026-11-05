import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { services, vehicleSizes, whatsappLink } from "@/content/site";
import { bookingSchema, todayInSA, type BookingInput } from "@/lib/schemas";
import { submitBooking } from "@/lib/submissions.functions";

import { Field, Honeypot, SelectInput, TextArea, TextInput } from "./FormField";

export function BookingForm({ defaultService }: { defaultService?: string | undefined }) {
  const send = useServerFn(submitBooking);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => setMinDate(todayInSA()), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: defaultService ?? "",
      instructions: "",
      website: "",
    },
  });

  const onSubmit = async (values: BookingInput) => {
    setServerError(null);
    try {
      const res = await send({ data: values });
      if (res.ok) {
        setStatus("sent");
        reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
        setServerError(res.error);
      }
    } catch {
      setStatus("error");
      setServerError("Something went wrong. Please check your details and try again, or book via WhatsApp.");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-border bg-card p-10 text-center md:p-16" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-champagne" />
        <h2 className="mt-6 text-4xl text-foreground md:text-5xl">Thank you — request received.</h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Your booking request has been sent. This is not yet a confirmed appointment; we'll be in
          touch to confirm your date, time and price.
        </p>
        <Button variant="heroOutline" size="lg" className="mt-10" onClick={() => setStatus("idle")}>
          Make another request
        </Button>
      </div>
    );
  }

  const err = (k: keyof BookingInput) => errors[k]?.message as string | undefined;
  const aria = (k: keyof BookingInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-14">
      <Honeypot {...register("website")} />

      <fieldset className="space-y-8">
        <legend className="mb-8 font-display text-3xl text-foreground">Your details</legend>
        <div className="grid gap-8 md:grid-cols-2">
          <Field id="fullName" label="Full name" error={err("fullName")} className="md:col-span-2">
            <TextInput id="fullName" autoComplete="name" {...aria("fullName")} {...register("fullName")} />
          </Field>
          <Field id="phone" label="Contact number" error={err("phone")}>
            <TextInput id="phone" type="tel" autoComplete="tel" placeholder="e.g. 082 000 0000" {...aria("phone")} {...register("phone")} />
          </Field>
          <Field id="email" label="Email address" error={err("email")}>
            <TextInput id="email" type="email" autoComplete="email" {...aria("email")} {...register("email")} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-8">
        <legend className="mb-8 font-display text-3xl text-foreground">Your vehicle</legend>
        <div className="grid gap-8 md:grid-cols-2">
          <Field id="vehicleMakeModel" label="Make and model" error={err("vehicleMakeModel")}>
            <TextInput id="vehicleMakeModel" placeholder="e.g. Toyota Fortuner" {...aria("vehicleMakeModel")} {...register("vehicleMakeModel")} />
          </Field>
          <Field id="vehicleSize" label="Vehicle size / type" error={err("vehicleSize")}>
            <SelectInput id="vehicleSize" defaultValue="" {...aria("vehicleSize")} {...register("vehicleSize")}>
              <option value="" disabled>
                Select a size
              </option>
              {vehicleSizes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field id="service" label="Service" error={err("service")} className="md:col-span-2">
            <SelectInput id="service" {...aria("service")} {...register("service")}>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                  {s.comingSoon ? " (coming soon — register interest)" : ""}
                </option>
              ))}
            </SelectInput>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-8">
        <legend className="mb-8 font-display text-3xl text-foreground">When and where</legend>
        <div className="grid gap-8 md:grid-cols-2">
          <Field id="preferredDate" label="Preferred date" error={err("preferredDate")}>
            <TextInput id="preferredDate" type="date" min={minDate} {...aria("preferredDate")} {...register("preferredDate")} />
          </Field>
          <Field id="preferredTime" label="Preferred time" error={err("preferredTime")}>
            <TextInput id="preferredTime" type="time" step={900} {...aria("preferredTime")} {...register("preferredTime")} />
          </Field>
          <Field id="address" label="Service location / address" error={err("address")} className="md:col-span-2" hint="Home, office or complex address, including unit or parking bay if relevant.">
            <TextInput id="address" autoComplete="street-address" {...aria("address")} {...register("address")} />
          </Field>
          <Field id="instructions" label="Additional instructions" optional error={err("instructions")} className="md:col-span-2" hint="Gate codes, access details, water or power availability, or anything else we should know.">
            <TextArea id="instructions" {...aria("instructions")} {...register("instructions")} />
          </Field>
        </div>
      </fieldset>

      {serverError && (
        <p role="alert" className="border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Submitting sends a booking request, not a confirmed appointment. We'll contact you to
          confirm availability and pricing.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </a>
          </Button>
          <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="animate-spin" />}
            {isSubmitting ? "Sending…" : "Send booking request"}
          </Button>
        </div>
      </div>
    </form>
  );
}
