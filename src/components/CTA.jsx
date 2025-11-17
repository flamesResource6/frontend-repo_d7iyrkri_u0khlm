export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-black text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif">Visit our boutique in Monaco</h3>
            <p className="text-white/70 mt-2 max-w-xl">Schedule a private appointment with our concierge team. Experience our timepieces in person and discover your perfect fit.</p>
          </div>
          <a href="#" className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors">Book appointment</a>
        </div>
      </div>
    </section>
  )
}
