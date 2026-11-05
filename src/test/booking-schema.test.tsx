import { describe, expect, it } from "vitest";

import { bookingSchema, contactSchema, todayInSA } from "@/lib/schemas";

const valid = {
  fullName: "Test Customer",
  phone: "082 000 0000",
  email: "test@example.com",
  vehicleMakeModel: "Toyota Corolla",
  vehicleSize: "Sedan",
  service: "Full Car Wash",
  preferredDate: "2999-01-01",
  preferredTime: "09:30",
  address: "1 Example Street",
  instructions: "",
  website: "",
};

describe("booking request rules", () => {
  it("accepts a complete request", () => {
    expect(bookingSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a preferred date in the past", () => {
    expect(bookingSchema.safeParse({ ...valid, preferredDate: "2000-01-01" }).success).toBe(false);
  });

  it("accepts today's date in South Africa", () => {
    expect(bookingSchema.safeParse({ ...valid, preferredDate: todayInSA() }).success).toBe(true);
  });

  it("rejects a service that isn't offered", () => {
    expect(bookingSchema.safeParse({ ...valid, service: "Engine Rebuild" }).success).toBe(false);
  });

  it("requires a service address", () => {
    expect(bookingSchema.safeParse({ ...valid, address: "" }).success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(bookingSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
});

describe("contact form rules", () => {
  it("allows phone to be left empty", () => {
    expect(
      contactSchema.safeParse({ name: "Jo", email: "jo@example.com", phone: "", message: "Hello there" }).success,
    ).toBe(true);
  });

  it("requires a message", () => {
    expect(contactSchema.safeParse({ name: "Jo", email: "jo@example.com", message: "" }).success).toBe(false);
  });
});

describe("South African date", () => {
  it("rolls over to the next day after 22:00 UTC", () => {
    expect(todayInSA(new Date("2026-11-05T22:30:00Z"))).toBe("2026-11-06");
  });
});
