import { addOns, formatPrice } from "@/lib/addons";

type Pkg = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  bestFor: string;
  carPrice: string;
  suvPrice: string;
  features: string[];
  addOnId?: string;
  highlight?: boolean;
  badge?: string;
};

const packages: Pkg[] = [
  {
    id: "exterior",
    name: "Exterior Detailing",
    tagline: "A showroom shine, restored.",
    duration: "2-3 hours",
    bestFor: "Weekly drivers, sale prep, and maintenance washes",
    carPrice: "$125",
    suvPrice: "$150",
    features: [
      "Premium foam soap hand wash",
      "Full wheel & tire deep cleaning",
      "Tire dressing & shine",
      "Hand-applied carnauba wax",
      "Windows cleaned inside-out (exterior)",
      "Door jambs wiped down",
    ],
    addOnId: "headlight",
  },
  {
    id: "interior",
    name: "Interior Detailing",
    tagline: "Deep clean. Like-new feel.",
    duration: "3-5 hours",
    bestFor: "Families, commuters, pet owners, and rideshare vehicles",
    carPrice: "$200",
    suvPrice: "$250",
    features: [
      "Full vacuum (carpets, seats, trunk)",
      "Steam cleaning on upholstery & carpet",
      "Leather conditioning & treatment",
      "Dashboard, console & trim shine",
      "Interior glass cleaning",
      "Air vents & crevice detailing",
    ],
    addOnId: "ozone",
  },
  {
    id: "show-off",
    name: "Full Show-Off Package",
    tagline: "Interior + exterior, head to toe.",
    duration: "4-6 hours",
    bestFor: "The best all-around reset for daily drivers",
    carPrice: "$270",
    suvPrice: "$300",
    features: [
      "Everything in Exterior Detailing",
      "Everything in Interior Detailing",
      "Best value bundle - save vs. a la carte",
      "Full inside-and-out transformation",
      "Ideal for showings, sales, or treating yourself",
      "Top-to-bottom finishing touches",
    ],
    highlight: true,
    badge: "Best Value",
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "2-year protection. Liquid armor.",
    duration: "1 day",
    bestFor: "Long-term gloss, easier washing, and UV protection",
    carPrice: "$450",
    suvPrice: "$650",
    features: [
      "Full clay-bar treatment",
      "Paint decontamination & prep",
      "Professional ceramic coating application",
      "2-year hydrophobic protection",
      "UV & contaminant resistance",
      "Deep, glossy mirror finish",
    ],
    badge: "2-Year Protection",
  },
  {
    id: "paint-1",
    name: "Paint Correction - 1-Step",
    tagline: "Remove swirls & light defects.",
    duration: "1 day",
    bestFor: "Swirl removal and gloss restoration",
    carPrice: "$600+",
    suvPrice: "$600+",
    features: [
      "Removes ~70% of swirls & light scratches",
      "Single-stage machine polish",
      "Restores clarity & depth",
      "Refines paint surface",
      "Boosts resale value",
      "Pairs perfectly with ceramic coating",
    ],
  },
  {
    id: "paint-2",
    name: "Paint Correction - 2-Step",
    tagline: "Maximum gloss. Maximum value.",
    duration: "1-2 days",
    bestFor: "Deeper defects, show finishes, and ceramic prep",
    carPrice: "$1000+",
    suvPrice: "$1000+",
    features: [
      "Removes ~90%+ of paint defects",
      "Compound + polish two-stage process",
      "Eliminates deeper scratches & oxidation",
      "Concours-level gloss & reflection",
      "Significant resale value increase",
      "Recommended before ceramic coating",
    ],
    badge: "Premium",
  },
];

function Check() {
  return (
    <svg
      className="w-5 h-5 text-coral flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PriceCard({ pkg }: { pkg: Pkg }) {
  return (
    <div
      className={`relative card-base p-6 lg:p-8 flex flex-col h-full ${
        pkg.highlight
          ? "border-coral ring-2 ring-coral/30 shadow-glow"
          : ""
      }`}
    >
      {pkg.badge && (
        <span
          className={`absolute -top-3 left-6 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
            pkg.highlight
              ? "bg-coral text-white shadow-glow"
              : "bg-mist-100 text-navy-700 border border-mist-200"
          }`}
        >
          {pkg.badge}
        </span>
      )}

      <h3 className="text-2xl font-bold text-navy-800 mb-1">{pkg.name}</h3>
      <p className="text-sm text-slate-500 mb-4">{pkg.tagline}</p>

      <div className="grid grid-cols-1 gap-2 mb-5 text-xs text-slate-600">
        <div className="flex items-center justify-between gap-3 rounded-lg bg-shell-100/70 px-3 py-2">
          <span className="font-bold uppercase tracking-wider text-navy-700">
            Typical Time
          </span>
          <span className="font-semibold text-navy-800">{pkg.duration}</span>
        </div>
        <div className="rounded-lg bg-shell-100/70 px-3 py-2">
          <span className="font-bold uppercase tracking-wider text-navy-700">
            Best For
          </span>
          <p className="mt-1 leading-relaxed">{pkg.bestFor}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-mist-50 border border-mist-200 rounded-lg p-3 text-center">
          <div className="text-xs uppercase tracking-wider text-navy-700 font-semibold mb-1">
            Car
          </div>
          <div className="text-2xl font-display font-bold text-navy-800">
            {pkg.carPrice}
          </div>
        </div>
        <div className="bg-mist-50 border border-mist-200 rounded-lg p-3 text-center">
          <div className="text-xs uppercase tracking-wider text-navy-700 font-semibold mb-1">
            SUV / Truck
          </div>
          <div className="text-2xl font-display font-bold text-navy-800">
            {pkg.suvPrice}
          </div>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-slate-700">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {pkg.addOnId && (() => {
        const addOn = addOns.find((a) => a.id === pkg.addOnId);
        if (!addOn) return null;
        return (
          <div className="mb-5 border-t border-mist-200 pt-4">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-coral">
                + Add {addOn.label}
              </span>
              <span className="text-sm font-display font-bold text-navy-800">
                {formatPrice(addOn.price)}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Select in booking form. {addOn.description}
            </p>
          </div>
        );
      })()}

      <a
        href="#booking"
        className={`mt-auto inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
          pkg.highlight
            ? "bg-coral text-white hover:bg-coral-dark shadow-glow"
            : "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
        }`}
      >
        Book This Package
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-shell-100 relative">
      <div className="container-narrow relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-3">Services &amp; Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Detailing Packages
          </h2>
          <p className="text-slate-600">
            Transparent pricing for every level of care. Mobile service across
            Central Texas. We bring the shine to your driveway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((p) => (
            <PriceCard key={p.id} pkg={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
