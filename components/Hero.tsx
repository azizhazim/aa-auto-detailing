import Image from "next/image";

const stats = [
  { value: "5-star", label: "Rated local service" },
  { value: "Mobile", label: "Home and office appointments" },
  { value: "CTx", label: "Austin to San Marcos" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-navy-900 text-white">
      <Image
        src="/gallery/35.jpg"
        alt="A&A Auto Detailing finished exterior detail"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/68 to-navy-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/82 via-transparent to-navy-900/35" />

      <div className="container-narrow relative z-10 w-full px-4 pb-12 pt-28 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16 lg:pt-36">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-coral pl-4 text-xs font-bold uppercase tracking-[0.22em] text-mist-200">
            Central Texas Premium Mobile Detailing
          </p>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            A&amp;A Auto Detailing
          </h1>

          <p className="mb-4 max-w-2xl text-xl font-semibold text-mist-100 sm:text-2xl lg:text-3xl">
            Renew Your Ride, Refresh Your Drive.
          </p>
          <p className="mb-9 max-w-2xl text-base leading-8 text-mist-200 sm:text-lg">
            Professional interior, exterior, ceramic coating, and paint
            correction services for Austin, Buda, Kyle, San Marcos, and nearby
            Central Texas communities.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="btn-primary">
              Request Appointment
            </a>
            <a
              href="tel:+15122298145"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-900"
            >
              Call (512) 229-8145
            </a>
          </div>
        </div>

        <div className="mt-10 grid max-w-4xl grid-cols-1 gap-3 border-y border-white/20 py-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-mist-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
