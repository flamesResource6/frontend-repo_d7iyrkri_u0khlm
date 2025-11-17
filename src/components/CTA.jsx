import { motion } from 'framer-motion'
import { useLocale } from '../locale'

export default function CTA() {
  const { t } = useLocale()
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-red-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-serif">{t.cta_title}</h3>
            <p className="text-white/80 mt-2 max-w-xl">{t.cta_sub}</p>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            {t.cta_primary}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
