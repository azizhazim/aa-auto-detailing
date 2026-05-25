type Review = {
  name: string;
  quote: string;
  date: string;
  localGuide?: boolean;
};

const reviews: Review[] = [
  {
    name: "Lisa Hicks",
    date: "2 weeks ago",
    quote:
      "Lyndon did an amazing job. He was punctual, super friendly and professional, accommodating to my schedule, and left my car looking brand new! I will absolutely use him again!",
  },
  {
    name: "Breanne Loving-Mendez",
    date: "Oct 2024",
    localGuide: true,
    quote:
      "Aziz did an excellent job detailing my vehicle. He's one of the few detailers that answered his phone. Scheduling was easy and the work spoke for itself.",
  },
  {
    name: "Emmanuel Cabello",
    date: "Jul 2024",
    quote:
      "My daughter spilled a protein shake in the back of my car leaving a terrible smell and stain. They had my car looking and smelling new. Very professional — highly recommend.",
  },
  {
    name: "Trace DeBerry",
    date: "Mar 2025",
    localGuide: true,
    quote:
      "Excellent service. Friendly and professional. They answered the phone, they were ready for me at my appointment time, and the result was outstanding.",
  },
  {
    name: "Mitch Cowen",
    date: "Aug 2024",
    quote:
      "They did an awesome job. I smoke and they got the smoke smell out, wheels look great, the whole truck looks great. Thanks A&A.",
  },
  {
    name: "Darren Hilton",
    date: "Jul 2024",
    quote:
      "Donovan did a superb job. He spent over 4 hours getting tough stains out — stains that another prominent detailer couldn't touch.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=A%26A+Auto+Detailing+Buda+TX";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#FBBC04"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.2-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-b from-shell-100 via-mist-50 to-shell-100"
    >
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">What Customers Say</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
              Trusted by Central Texas
            </h2>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-navy-800 font-bold">5.0</span>
              <span className="text-slate-600 text-sm">on Google Reviews</span>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start lg:self-auto inline-flex items-center gap-2"
          >
            <GoogleG />
            Read All Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="card-base p-6 flex flex-col h-full relative"
            >
              <div className="absolute top-5 right-5 opacity-70">
                <GoogleG />
              </div>
              <div className="mb-3">
                <Stars />
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-mist-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-navy-800 font-bold text-sm">{r.name}</div>
                  {r.localGuide && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-coral bg-coral/10 px-2 py-0.5 rounded-full">
                      Local Guide
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{r.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
