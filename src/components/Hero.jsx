import { motion } from 'framer-motion'
import { useLocale } from '../locale'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative pt-24 md:pt-32 pb-24 bg-black text-white overflow-hidden">
      {/* Luxury red accents */}
      <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:0.4, scale:1}} transition={{duration:1.2}}
        className="absolute -top-40 -right-20 w-[700px] h-[700px] rounded-full blur-3xl bg-red-700/40" />
      <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:0.2, scale:1}} transition={{duration:1.4, delay:0.1}}
        className="absolute -bottom-32 -left-10 w-[600px] h-[600px] rounded-full blur-3xl bg-white/10" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className="text-4xl md:text-6xl font-serif tracking-tight">
            {t.hero_title}
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.1}}
            className="mt-4 text-lg text-white/80">
            {t.hero_sub}
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="mt-8 flex items-center gap-4">
            <a href="#featured" className="px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-500 transition-colors">{t.discover}</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">{t.book}</a>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, scale: 0.98}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.9, delay: 0.1}}
          className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop"
              alt="Monaco Heritage Chronograph"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, delay:0.4}}
            className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur shadow-lg border border-white/10 rounded-2xl px-4 py-3">
            <p className="text-sm tracking-wide text-white">Heritage Chronograph</p>
            <p className="text-xs text-white/70">Automatic • 39mm • 100m</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
