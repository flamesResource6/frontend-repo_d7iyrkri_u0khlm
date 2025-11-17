import { useState } from 'react'
import { Menu, Watch, Phone, Info, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (
    <nav className="hidden md:flex items-center gap-8 text-sm">
      <a href="#featured" className="hover:text-black/80 transition-colors">Featured</a>
      <a href="#collection" className="hover:text-black/80 transition-colors">Collection</a>
      <a href="#about" className="hover:text-black/80 transition-colors">About</a>
      <a href="#contact" className="hover:text-black/80 transition-colors">Contact</a>
    </nav>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Watch className="h-6 w-6" />
            <span className="tracking-[0.3em] text-sm font-semibold">MONACO WATCH CO.</span>
          </a>
          {navLink}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-colors">
              <Phone className="h-4 w-4" /> Book an appointment
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#featured" className="block py-2">Featured</a>
            <a href="#collection" className="block py-2">Collection</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
            <a href="#contact" className="block py-2 font-medium flex items-center gap-2"><ShoppingBag className="h-4 w-4"/> Boutique</a>
            <a href="#about" className="block py-2 font-medium flex items-center gap-2"><Info className="h-4 w-4"/> Our story</a>
          </div>
        )}
      </div>
    </header>
  )
}
