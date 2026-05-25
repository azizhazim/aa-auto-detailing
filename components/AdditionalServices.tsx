type Extra = {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
};

const extras: Extra[] = [
  {
    name: "Ozone Odor Removal",
    description:
      "Eliminates smoke, pet, food, and mildew odors at the molecular level.",
    price: "$60",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M7 12c1-2 3-3 5-3s4 1 5 3" />
        <path d="M7 15c1-1 3-2 5-2s4 1 5 2" />
      </svg>
    ),
  },
  {
    name: "Headlight Restoration",
    description:
      "Removes haze and yellowing to restore nighttime visibility and curb appeal.",
    price: "$75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="9" ry="6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Engine Bay Detailing",
    description:
      "Safe degrease, steam clean, and dressing for a showroom-fresh engine bay.",
    price: "$80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="11" rx="1" />
        <path d="M7 7V4h10v3M3 12h18M9 18v2M15 18v2" />
      </svg>
    ),
  },
  {
    name: "Pet Hair Removal",
    description:
      "Surcharge for heavy pet hair embedded in carpets and upholstery.",
    price: "+$145",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="9" r="2" />
        <circle cx="10" cy="6" r="2" />
        <circle cx="14" cy="6" r="2" />
        <circle cx="18" cy="9" r="2" />
        <path d="M8 14c0-2 1.8-4 4-4s4 2 4 4-2 6-4 6-4-4-4-6z" />
      </svg>
    ),
  },
  {
    name: "Excessive Mess Surcharge",
    description:
      "Applied to heavily soiled vehicles requiring extended cleaning time.",
    price: "+$120",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M5 8l3 3M19 8l-3 3M3 14h4M17 14h4" />
        <circle cx="12" cy="16" r="4" />
      </svg>
    ),
  },
  {
    name: "Clay-Bar Treatment",
    description:
      "Removes embedded contaminants for a glass-smooth paint surface.",
    price: "$90",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16c2-4 6-6 10-6s5 3 6 6" />
        <path d="M4 16c0 2 2 4 8 4s8-2 8-4" />
      </svg>
    ),
  },
];

export default function AdditionalServices() {
  return (
    <section
      id="extras"
      className="section-padding bg-gradient-to-b from-shell-100 via-mist-50 to-shell-100"
    >
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Add-Ons</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Extras &amp; Specialty Services
          </h2>
          <p className="text-slate-600">
            Customize your detail with these popular add-ons and specialty
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {extras.map((e) => (
            <div
              key={e.name}
              className="card-base p-6 flex gap-4 items-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-mist-50 border border-mist-200 flex items-center justify-center text-navy-700 group-hover:bg-coral/10 group-hover:text-coral group-hover:border-coral/30 transition-all">
                <div className="w-6 h-6">{e.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-lg font-bold text-navy-800 leading-tight">
                    {e.name}
                  </h3>
                  <span className="text-coral font-display font-bold text-lg whitespace-nowrap">
                    {e.price}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
