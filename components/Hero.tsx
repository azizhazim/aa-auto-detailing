import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-shore-gradient">
      {/* Subtle mist wash — top right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-mist-200/60 blur-3xl"
      />

      {/* Soft coral halo (very subtle warmth) */}
      <div
        aria-hidden
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-coral/10 blur-3xl"
      />

      <div className="container-narrow relative z-10 px-4 sm:px-6 lg:px-8 py-32 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white border border-mist-200 px-4 py-2 rounded-full mb-8 shadow-soft animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-coral" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy-800">
                Central Texas Premium Detailing
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy-800 leading-[0.95] mb-6 animate-fade-in-up">
              A&amp;A <span className="text-coral">Auto</span>
              <br />
              Detailing
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-navy-700 mb-4 max-w-2xl font-semibold animate-fade-in-up">
              Renew Your Ride, Refresh Your Drive.
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl animate-fade-in-up">
              Professional Car Detailing in Austin, Buda, Kyle, San Marcos, and
              Central Texas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <a href="#booking" className="btn-primary">
                Book Your Appointment
              </a>
              <a href="#gallery" className="btn-secondary">
                View Our Recent Work
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
              {[
                { v: "5★", l: "Rated Service" },
                { v: "100+", l: "Happy Clients" },
                { v: "2-Yr", l: "Ceramic Warranty" },
                { v: "Mobile", l: "We Come To You" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white border border-mist-200 rounded-xl px-4 py-3 shadow-soft"
                >
                  <div className="text-2xl font-display font-bold text-navy-800">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-600 font-semibold">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — photo composition (desktop only) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[560px] xl:h-[620px] animate-fade-in-up">
            {/* Decorative coral disc behind */}
            <div
              aria-hidden
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-coral-gradient shadow-[0_8px_40px_-4px_rgba(242,108,79,0.45)] z-0"
            />

            {/* Primary photo — large, right-anchored */}
            <div className="absolute top-0 right-0 w-[78%] h-[68%] rounded-3xl overflow-hidden shadow-card border border-white/40 z-10">
              <Image
                src="/gallery/35.jpg"
                alt="Recent A&A Auto Detailing work — premium finish"
                fill
                sizes="(max-width: 1024px) 0px, 35vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Secondary photo — bottom-left, overlapping */}
            <div className="absolute bottom-0 left-0 w-[62%] h-[48%] rounded-3xl overflow-hidden shadow-card border-4 border-shell-100 z-20">
              <Image
                src="/gallery/26.jpg"
                alt="A&A Auto Detailing — interior and exterior detail"
                fill
                sizes="(max-width: 1024px) 0px, 28vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge card */}
            <div className="absolute bottom-4 right-2 bg-white rounded-2xl px-4 py-3 shadow-card border border-mist-200 z-30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26C4F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-navy-800 leading-tight">5-Star Rated</div>
                <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Central Texas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle wave divider — soft mist into next section */}
      <div className="absolute bottom-0 inset-x-0 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16"
        >
          <path
            d="M0,80 C240,40 480,100 720,70 C960,40 1200,90 1440,60 L1440,120 L0,120 Z"
            fill="#EAE3D2"
            opacity="0.5"
          />
          <path
            d="M0,100 C240,80 480,110 720,90 C960,75 1200,105 1440,85 L1440,120 L0,120 Z"
            fill="#F5F1E8"
          />
        </svg>
      </div>
    </section>
  );
}
