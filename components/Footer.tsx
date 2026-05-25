const serviceAreas = [
  "Austin",
  "Buda",
  "Kyle",
  "San Marcos",
  "Wimberley",
  "Dripping Springs",
  "Manor",
  "Pflugerville",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-mist-200">
      <div className="container-narrow relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-white tracking-wider">
                A&amp;A
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-semibold border-l border-navy-700 pl-2">
                Auto Detailing
              </span>
            </div>
            <p className="text-mist-300/80 text-sm max-w-md mb-6">
              Premium mobile auto detailing serving Central Texas. Renew Your
              Ride, Refresh Your Drive.
            </p>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-start gap-2.5 text-mist-300/90">
                <svg className="w-4 h-4 mt-0.5 text-coral flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+15122298145" className="hover:text-coral transition-colors">
                  (512) 229-8145
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-mist-300/90">
                <svg className="w-4 h-4 mt-0.5 text-coral flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:610aaautodetailing@gmail.com" className="hover:text-coral transition-colors break-all">
                  610aaautodetailing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-mist-300/90">
                <svg className="w-4 h-4 mt-0.5 text-coral flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>477 Suffield Dr #619, Buda, TX 78610</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/AA-Auto-Detailing/100089112146854/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-mist-300 hover:border-coral hover:text-coral hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7H7.9v-2.94h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.94h-2.33v7C18.34 21.21 22 17.06 22 12.06z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/austinautodetailer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-mist-300 hover:border-coral hover:text-coral hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { h: "#services", l: "Services" },
                { h: "#why-us", l: "Why Us" },
                { h: "#extras", l: "Extras" },
                { h: "#process", l: "Process" },
                { h: "#gallery", l: "Recent Work" },
                { h: "#reviews", l: "Reviews" },
                { h: "#faq", l: "FAQ" },
                { h: "#booking", l: "Book Now" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="text-mist-300/80 hover:text-coral transition-colors">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((a) => (
                <li key={a} className="text-mist-300/80">
                  {a}, TX
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700/60 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-xs text-mist-300/70">
            Copyright {year} A&amp;A Auto Detailing. All rights reserved.
          </p>
          <p className="text-xs text-mist-300/70">
            Serving Austin, Buda, Kyle, San Marcos, and Central Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
