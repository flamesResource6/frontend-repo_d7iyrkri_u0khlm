import { messages } from '../i18n'

export default function CTA() {
  const t = messages['en']
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-red-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif">{t.cta_title}</h3>
            <p className="text-white/80 mt-2 max-w-xl">{t.cta_sub}</p>
          </div>
          <a href="#" className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors">{t.cta_primary}</a>
        </div>
      </div>
    </section>
  )
}
