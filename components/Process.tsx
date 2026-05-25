const steps = [
  {
    step: "01",
    title: "Request",
    text: "Send your vehicle, package, preferred date, and service address.",
  },
  {
    step: "02",
    title: "Confirm",
    text: "A&A reviews the request, confirms the scope, and texts your appointment window.",
  },
  {
    step: "03",
    title: "Detail",
    text: "Your vehicle gets the selected interior, exterior, coating, or correction service.",
  },
  {
    step: "04",
    title: "Walkaround",
    text: "You get a final review of the work, care notes, and any maintenance recommendations.",
  },
];

const prepItems = [
  "Remove personal items before interior services.",
  "Park near safe access to the vehicle.",
  "Share pet hair, stains, smoke, or paint concerns in the notes.",
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-navy-900 text-mist-200">
      <div className="container-narrow">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              From Request To Finished Detail
            </h2>
            <p className="text-mist-300/85">
              A straightforward process helps customers know what happens after
              they submit the form.
            </p>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-900"
          >
            Start Booking
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-6 font-display text-4xl font-bold text-coral">
                {item.step}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-mist-300/85">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <h3 className="mb-4 text-xl font-bold text-white">
            Quick Prep Before We Arrive
          </h3>
          <ul className="grid grid-cols-1 gap-3 text-sm text-mist-300/90 md:grid-cols-3">
            {prepItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-coral" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
