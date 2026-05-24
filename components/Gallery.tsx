const items = [
  { tag: "Ceramic Coating", label: "2022 Tesla Model 3", tone: "from-mist-300 to-navy-700" },
  { tag: "Full Show-Off", label: "2019 Ford F-150", tone: "from-coral-light to-coral-dark" },
  { tag: "Paint Correction", label: "2020 BMW M340i", tone: "from-navy-700 to-navy-900" },
  { tag: "Interior Detail", label: "2021 Toyota 4Runner", tone: "from-shell-200 to-mist-300" },
  { tag: "Exterior Detail", label: "2018 Honda Civic", tone: "from-mist-200 to-navy-700" },
  { tag: "Ceramic + Correction", label: "2023 Audi RS5", tone: "from-coral to-coral-deep" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-shell-100">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Recent Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
              Built On Results
            </h2>
            <p className="text-slate-600">
              A look at recent transformations across Austin, Buda, Kyle, and
              San Marcos. Photos and full case studies coming soon.
            </p>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start lg:self-auto"
          >
            Follow Us On Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative aspect-square rounded-2xl overflow-hidden border border-mist-200 shadow-soft bg-gradient-to-br ${item.tone} hover:shadow-card transition-all`}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center text-white/40">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M5 17l3-4 4 5 4-6 3 5" />
                  <rect x="2" y="3" width="20" height="18" rx="2" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wider text-white font-bold mb-1 bg-coral px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
                <div className="text-sm sm:text-base text-white font-semibold drop-shadow">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
