import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Collection from './components/Collection'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen text-black bg-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Collection />
        <CTA />
        <section id="about" className="py-16 border-t border-black/5">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif">A legacy of precision</h3>
              <p className="mt-3 text-black/70">Rooted in the principality, Monaco Watch Company blends Swiss craftsmanship with Mediterranean spirit. Each piece is designed for enduring performance and timeless style.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-neutral-50">
              <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop" alt="Boutique" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-black/60 border-t border-black/5">
        © {new Date().getFullYear()} Monaco Watch Company. All rights reserved.
      </footer>
    </div>
  )
}

export default App
