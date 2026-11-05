import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { submitContact } from "@/lib/submissions.functions";

import { Field, Honeypot, TextArea, TextInput } from "./FormField";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setServerError(null);
    try {
      const res = await send({ data: values });
      if (res.ok) {
        setSent(true);
        reset();
      } else setServerError(res.error);
    } catch {
      setServerError("Something went wrong. Please check your details and try again.");
    }
  };

  if (sent) {
    return (
      <div className="border border-border bg-card p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-8 w-8 text-champagne" />
        <h3 className="mt-5 text-3xl text-foreground">Message received.</h3>
        <p className="mt-3 text-sm text-muted-foreground">Thank you for getting in touch. We'll reply as soon as we can.</p>
        <Button variant="heroOutline" className="mt-8" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  const aria = (k: keyof ContactInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `c-${k}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-8">
      <Honeypot {...register("website")} />
      <Field id="c-name" label="Name" error={errors.name?.message}>
        <TextInput id="c-name" autoComplete="name" {...aria("name")} {...register("name")} />
      </Field>
      <div className="grid gap-8 md:grid-cols-2">
        <Field id="c-email" label="Email" error={errors.email?.message}>
          <TextInput id="c-email" type="email" autoComplete="email" {...aria("email")} {...register("email")} />
        </Field>
        <Field id="c-phone" label="Phone number" optional error={errors.phone?.message}>
          <TextInput id="c-phone" type="tel" autoComplete="tel" {...aria("phone")} {...register("phone")} />
        </Field>
      </div>
      <Field id="c-message" label="Message" error={errors.message?.message}>
        <TextArea id="c-message" rows={5} {...aria("message")} {...register("message")} />
      </Field>
      {serverError && (
        <p role="alert" className="border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
        </p>
      )}
      <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="animate-spin" />}
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
