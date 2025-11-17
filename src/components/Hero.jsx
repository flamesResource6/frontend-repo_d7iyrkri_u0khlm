import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-amber-300 to-rose-300" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-300 to-emerald-300" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-4xl md:text-6xl font-serif tracking-tight text-black">
            Monaco Watch Company
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.1}}
            className="mt-4 text-lg text-black/70">
            Timeless elegance, crafted on the Riviera. Explore a curated selection of fine timepieces with Swiss movements and modern sophistication.
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.2}}
            className="mt-8 flex items-center gap-4">
            <a href="#featured" className="px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors">Discover collection</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-black/20 hover:bg-black/5 transition-colors">Book an appointment</a>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, scale: 0.98}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, delay: 0.1}}
          className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-neutral-50">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop"
              alt="Monaco Heritage Chronograph"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur shadow-lg border border-black/10 rounded-2xl px-4 py-3">
            <p className="text-sm tracking-wide">Heritage Chronograph</p>
            <p className="text-xs text-black/60">Automatic • 39mm • 100m</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
