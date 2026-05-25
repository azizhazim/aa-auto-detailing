"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { addOns, formatPrice } from "@/lib/addons";

const timeSlots = [
  "12 PM - 3 PM",
  "3 PM - 6 PM",
  "6 PM - 9 PM",
  "9 PM - 11 PM",
];

type PackageOption = {
  value: string;
  label: string;
  price: number;
  startingAt?: boolean;
};

const packageOptions: PackageOption[] = [
  {
    value: "Exterior Detailing - Car ($125)",
    label: "Exterior Detailing - Car",
    price: 125,
  },
  {
    value: "Exterior Detailing - SUV/Truck ($150)",
    label: "Exterior Detailing - SUV/Truck",
    price: 150,
  },
  {
    value: "Interior Detailing - Car ($200)",
    label: "Interior Detailing - Car",
    price: 200,
  },
  {
    value: "Interior Detailing - SUV/Truck ($250)",
    label: "Interior Detailing - SUV/Truck",
    price: 250,
  },
  {
    value: "Full Show-Off - Car ($270)",
    label: "Full Show-Off - Car",
    price: 270,
  },
  {
    value: "Full Show-Off - SUV/Truck ($300)",
    label: "Full Show-Off - SUV/Truck",
    price: 300,
  },
  {
    value: "Ceramic Coating - Car ($450)",
    label: "Ceramic Coating - Car",
    price: 450,
  },
  {
    value: "Ceramic Coating - SUV/Truck ($650)",
    label: "Ceramic Coating - SUV/Truck",
    price: 650,
  },
  {
    value: "Paint Correction - 1-Step ($600+)",
    label: "Paint Correction - 1-Step",
    price: 600,
    startingAt: true,
  },
  {
    value: "Paint Correction - 2-Step ($1000+)",
    label: "Paint Correction - 2-Step",
    price: 1000,
    startingAt: true,
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  serviceAddress: string;
  date: string;
  carYear: string;
  carMake: string;
  carModel: string;
  timeSlot: string;
  packageSel: string;
  addOnIds: string[];
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  serviceAddress: "",
  date: "",
  carYear: "",
  carMake: "",
  carModel: "",
  timeSlot: "",
  packageSel: "",
  addOnIds: [],
  notes: "",
};

function getTodayInputValue() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (key: Exclude<keyof FormState, "addOnIds">) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setForm((current) => ({ ...current, [key]: e.target.value }));

  const selectedPackage = useMemo(
    () => packageOptions.find((pkg) => pkg.value === form.packageSel),
    [form.packageSel]
  );

  const selectedAddOns = useMemo(
    () => addOns.filter((addOn) => form.addOnIds.includes(addOn.id)),
    [form.addOnIds]
  );

  const addOnTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
  const estimatedTotal = selectedPackage
    ? selectedPackage.price + addOnTotal
    : addOnTotal;
  const today = getTodayInputValue();

  const toggleAddOn = (id: string) =>
    setForm((current) => ({
      ...current,
      addOnIds: current.addOnIds.includes(id)
        ? current.addOnIds.filter((value) => value !== id)
        : [...current.addOnIds, id],
    }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Network error. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-mist-50 via-white to-shell-100"
    >
      <div className="container-narrow relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3">Book Your Detail</p>
            <h2 className="mb-4 text-4xl font-bold text-navy-800 sm:text-5xl">
              Reserve Your Appointment
            </h2>
            <p className="mb-8 max-w-md text-slate-600">
              Tell us about the vehicle, location, and preferred time. We will
              confirm the appointment by text within a few hours.
            </p>

            <ul className="space-y-4">
              {[
                { t: "Mobile service", d: "We come to your home or office." },
                {
                  t: "Flexible windows",
                  d: "Daytime and evening slots are available.",
                },
                {
                  t: "Honest pricing",
                  d: "Package pricing and add-ons are visible before sending.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral shadow-glow" />
                  <div>
                    <div className="font-semibold text-navy-800">{item.t}</div>
                    <div className="text-sm text-slate-600">{item.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-coral bg-coral/15">
                  <svg
                    className="h-8 w-8 text-coral"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-navy-800">
                  Request Received
                </h3>
                <p className="mb-6 text-slate-600">
                  Thanks, {form.name || "friend"}! We will text you shortly to
                  confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initial);
                    setSubmitted(false);
                    setError(null);
                  }}
                  className="btn-secondary"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-base" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      className="input-base"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="label-base" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className="input-base"
                      placeholder="(512) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-base" htmlFor="email">
                      Email Optional
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      className="input-base"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="label-base" htmlFor="serviceAddress">
                      Service Address / City
                    </label>
                    <input
                      id="serviceAddress"
                      required
                      autoComplete="street-address"
                      value={form.serviceAddress}
                      onChange={update("serviceAddress")}
                      className="input-base"
                      placeholder="Buda, TX or full address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-base" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      min={today}
                      value={form.date}
                      onChange={update("date")}
                      className="input-base"
                    />
                  </div>
                  <div>
                    <label className="label-base" htmlFor="time">
                      Time Slot
                    </label>
                    <select
                      id="time"
                      required
                      value={form.timeSlot}
                      onChange={update("timeSlot")}
                      className="input-base"
                    >
                      <option value="">Select a window</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-base">Vehicle</label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <input
                      required
                      value={form.carYear}
                      onChange={update("carYear")}
                      className="input-base"
                      placeholder="Year"
                      inputMode="numeric"
                    />
                    <input
                      required
                      value={form.carMake}
                      onChange={update("carMake")}
                      className="input-base"
                      placeholder="Make"
                    />
                    <input
                      required
                      value={form.carModel}
                      onChange={update("carModel")}
                      className="input-base"
                      placeholder="Model"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-base" htmlFor="pkg">
                    Package
                  </label>
                  <select
                    id="pkg"
                    required
                    value={form.packageSel}
                    onChange={update("packageSel")}
                    className="input-base"
                  >
                    <option value="">Select a package</option>
                    {packageOptions.map((pkg) => (
                      <option key={pkg.value} value={pkg.value}>
                        {pkg.label} ({formatPrice(pkg.price)}
                        {pkg.startingAt ? "+" : ""})
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className="label-base mb-2">Add-Ons Optional</legend>
                  <div className="space-y-2">
                    {addOns.map((addOn) => {
                      const checked = form.addOnIds.includes(addOn.id);
                      return (
                        <label
                          key={addOn.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                            checked
                              ? "border-coral bg-coral/5"
                              : "border-mist-200 bg-white hover:border-mist-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleAddOn(addOn.id)}
                            className="mt-1 h-4 w-4 cursor-pointer accent-coral"
                          />
                          <span className="flex-1">
                            <span className="flex items-baseline justify-between gap-2">
                              <span className="text-sm font-semibold text-navy-800">
                                {addOn.label}
                              </span>
                              <span className="font-display text-sm font-bold text-navy-800">
                                +{formatPrice(addOn.price)}
                              </span>
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {addOn.description}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {(selectedPackage || addOnTotal > 0) && (
                  <div className="rounded-lg border border-mist-200 bg-shell-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-bold uppercase tracking-wider text-navy-700">
                        {selectedPackage?.startingAt
                          ? "Starting Estimate"
                          : "Estimated Total"}
                      </span>
                      <span className="font-display text-3xl font-bold text-navy-800">
                        {formatPrice(estimatedTotal)}
                        {selectedPackage?.startingAt ? "+" : ""}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Final quote is confirmed by text after vehicle size,
                      condition, location, and selected add-ons are reviewed.
                    </p>
                  </div>
                )}

                <div>
                  <label className="label-base" htmlFor="notes">
                    Notes Optional
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={update("notes")}
                    className="input-base resize-none"
                    placeholder="Pet hair, smoke, stains, scratches, water/power access, gate code, etc."
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral-deep"
                  >
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full !py-4 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request Appointment"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to be contacted about your booking.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
