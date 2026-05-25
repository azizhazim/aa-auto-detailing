export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mist-200 bg-white/95 px-3 py-3 shadow-card backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="sms:+15122298145"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-mist-200 text-sm font-bold uppercase tracking-wider text-navy-800"
        >
          Text
        </a>
        <a
          href="tel:+15122298145"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-mist-200 text-sm font-bold uppercase tracking-wider text-navy-800"
        >
          Call
        </a>
        <a
          href="#booking"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-coral text-sm font-bold uppercase tracking-wider text-white shadow-glow"
        >
          Book
        </a>
      </div>
    </div>
  );
}
