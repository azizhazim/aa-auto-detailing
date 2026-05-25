const faqs = [
  {
    q: "Do you come to my location?",
    a: "Yes. A&A provides mobile detailing across Austin, Buda, Kyle, San Marcos, and nearby Central Texas areas. Add your service address or city in the booking form so travel can be confirmed.",
  },
  {
    q: "How long does a detail take?",
    a: "Exterior details usually take 2-3 hours, interiors 3-5 hours, and full details 4-6 hours. Paint correction and ceramic coating can take a full day or longer depending on condition.",
  },
  {
    q: "Do you need water or power?",
    a: "If water or power is available, mention it in the notes. If not, submit the request anyway and A&A will confirm what is needed for your location and package.",
  },
  {
    q: "Can every stain, odor, or scratch be removed?",
    a: "No detailer can honestly guarantee every defect will disappear. The booking notes help identify pet hair, smoke, stains, oxidation, or scratches so expectations can be set before work begins.",
  },
  {
    q: "Are the prices final?",
    a: "Published package prices cover standard vehicle condition. Heavy soil, pet hair, excessive contamination, or paint correction needs can change the final quote and will be confirmed before the appointment.",
  },
  {
    q: "What happens if the weather is bad?",
    a: "Mobile detailing depends on safe working conditions. If weather affects the appointment, A&A will text to reschedule or adjust the service window.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="mb-4 text-4xl font-bold text-navy-800 sm:text-5xl">
            Before You Book
          </h2>
          <p className="max-w-md text-slate-600">
            Find the details most customers ask about before choosing a
            package or sending an appointment request.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-mist-200 bg-shell-50 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy-800">
                {item.q}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-mist-200 text-coral transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
