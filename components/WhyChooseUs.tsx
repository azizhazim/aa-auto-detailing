import Image from "next/image";

const reasons = [
  {
    title: "Mobile Convenience",
    text: "Service at your driveway, office, or approved location across the Central Texas service area.",
  },
  {
    title: "Upfront Packages",
    text: "Clear car and SUV pricing, visible add-ons, and condition-based notes before you submit.",
  },
  {
    title: "Paint-Safe Care",
    text: "Foam wash, careful contact methods, and protection options matched to the vehicle.",
  },
  {
    title: "Text Confirmation",
    text: "Every request is reviewed and confirmed by text so timing, location, and scope are clear.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-narrow grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative min-h-[440px]">
          <div className="absolute left-0 top-0 h-[68%] w-[78%] overflow-hidden rounded-lg border border-mist-200 shadow-card">
            <Image
              src="/gallery/26.jpg"
              alt="Detailed vehicle interior by A&A Auto Detailing"
              fill
              sizes="(max-width: 1024px) 80vw, 38vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[54%] w-[62%] overflow-hidden rounded-lg border-4 border-white shadow-card">
            <Image
              src="/gallery/04.jpg"
              alt="Clean vehicle exterior detail finish"
              fill
              sizes="(max-width: 1024px) 65vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Why Customers Book</p>
          <h2 className="mb-5 text-4xl font-bold text-navy-800 sm:text-5xl">
            Professional Detail, Simple Experience
          </h2>
          <p className="mb-8 max-w-xl text-slate-600">
            A detail should feel easy to schedule and clear before work starts.
            Choose a package, add specialty services, and get a confirmation
            before the appointment window.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-lg border border-mist-200 bg-shell-50 p-5"
              >
                <h3 className="mb-2 text-lg font-bold text-navy-800">
                  {reason.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
