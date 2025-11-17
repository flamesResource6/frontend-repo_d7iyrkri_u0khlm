import { useState } from 'react'
import { Menu, Watch, Phone, ShoppingBag, Globe } from 'lucide-react'
import { locales } from '../i18n'
import { useLocale } from '../locale'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()

  const navLink = (
    <nav className="hidden md:flex items-center gap-8 text-sm">
      <a href="#featured" className="hover:text-black/80 transition-colors">{t.featured}</a>
      <a href="#collection" className="hover:text-black/80 transition-colors">{t.collection}</a>
      <a href="#about" className="hover:text-black/80 transition-colors">{t.about}</a>
      <a href="#contact" className="hover:text-black/80 transition-colors">{t.contact}</a>
    </nav>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Watch className="h-6 w-6 text-red-600" />
            <span className="tracking-[0.3em] text-sm font-semibold">{t.brand}</span>
          </a>
          {navLink}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <select aria-label="Language" className="appearance-none bg-transparent pr-6 pl-8 py-2 rounded-full border border-black/10 hover:bg-black/5 text-sm"
                value={locale} onChange={(e)=>setLocale(e.target.value)}>
                {locales.map((l)=> <option key={l} value={l}>{l.toUpperCase()}</option>)}
              </select>
              <Globe className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-black/60" />
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-colors">
              <Phone className="h-4 w-4" /> {t.book}
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#featured" className="block py-2">{t.featured}</a>
            <a href="#collection" className="block py-2">{t.collection}</a>
            <a href="#about" className="block py-2">{t.about}</a>
            <a href="#contact" className="block py-2">{t.contact}</a>
            <a href="#contact" className="block py-2 font-medium flex items-center gap-2"><ShoppingBag className="h-4 w-4"/> Boutique</a>
          </div>
        )}
      </div>
    </header>
  )
}
