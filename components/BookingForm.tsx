"use client";

import { useState, FormEvent } from "react";

const timeSlots = [
  "12 PM – 3 PM",
  "3 PM – 6 PM",
  "6 PM – 9 PM",
  "9 PM – 11 PM",
];

const packageOptions = [
  "Exterior Detailing — Car ($125)",
  "Exterior Detailing — SUV/Truck ($150)",
  "Interior Detailing — Car ($200)",
  "Interior Detailing — SUV/Truck ($250)",
  "Full Show-Off — Car ($270)",
  "Full Show-Off — SUV/Truck ($300)",
  "Ceramic Coating — Car ($450)",
  "Ceramic Coating — SUV/Truck ($650)",
  "Paint Correction — 1-Step ($600+)",
  "Paint Correction — 2-Step ($1000+)",
];

type FormState = {
  name: string;
  phone: string;
  date: string;
  carYear: string;
  carMake: string;
  carModel: string;
  timeSlot: string;
  packageSel: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  date: "",
  carYear: "",
  carMake: "",
  carModel: "",
  timeSlot: "",
  packageSel: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

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
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="section-padding bg-gradient-to-b from-mist-50 via-white to-shell-100 relative overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-mist-300/40 blur-3xl pointer-events-none" />

      <div className="container-narrow relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3">Book Your Detail</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
              Reserve Your Appointment
            </h2>
            <p className="text-slate-600 mb-8 max-w-md">
              Tell us about your vehicle and preferred time. We&apos;ll confirm
              your booking by text within a few hours.
            </p>

            <ul className="space-y-4">
              {[
                { t: "Mobile service", d: "We come to your home or office." },
                { t: "Flexible windows", d: "Daytime and evening slots available." },
                { t: "Honest pricing", d: "No surprises — quoted up front." },
              ].map((i) => (
                <li key={i.t} className="flex gap-3">
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-coral flex-shrink-0 shadow-glow" />
                  <div>
                    <div className="text-navy-800 font-semibold">{i.t}</div>
                    <div className="text-slate-600 text-sm">{i.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div className="card-base p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-coral/15 border-2 border-coral flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">
                  Request Received
                </h3>
                <p className="text-slate-600 mb-6">
                  Thanks, {form.name || "friend"}! We&apos;ll text you shortly
                  to confirm your appointment.
                </p>
                <button
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-base" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="input-base"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="label-base" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      className="input-base"
                      placeholder="(512) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-base" htmlFor="date">Preferred Date</label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={update("date")}
                      className="input-base"
                    />
                  </div>
                  <div>
                    <label className="label-base" htmlFor="time">Time Slot</label>
                    <select
                      id="time"
                      required
                      value={form.timeSlot}
                      onChange={update("timeSlot")}
                      className="input-base"
                    >
                      <option value="">Select a window</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-base">Vehicle</label>
                  <div className="grid grid-cols-3 gap-3">
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
                  <label className="label-base" htmlFor="pkg">Package</label>
                  <select
                    id="pkg"
                    required
                    value={form.packageSel}
                    onChange={update("packageSel")}
                    className="input-base"
                  >
                    <option value="">Select a package</option>
                    {packageOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-base" htmlFor="notes">Notes (Optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={update("notes")}
                    className="input-base resize-none"
                    placeholder="Pet hair, smoke, specific concerns, location, etc."
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
                  className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Request Appointment"}
                </button>
                <p className="text-xs text-slate-500 text-center">
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
