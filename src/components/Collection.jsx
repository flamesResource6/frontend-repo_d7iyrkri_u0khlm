import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from '../locale'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function Collection() {
  const [items, setItems] = useState([])
  const [currency, setCurrency] = useState('USD')
  const { t } = useLocale()

  const rates = { USD: 1, EUR: 0.93, CHF: 0.9 }
  const price = (p, cur) => new Intl.NumberFormat(undefined, { style: 'currency', currency: cur }).format((Number(p)||0) * (rates[cur]||1))

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/watches?limit=12`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <motion.section
      id="collection"
      className="py-20 bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <motion.h2 className="text-2xl md:text-3xl font-serif" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>{t.collection_title}</motion.h2>
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
            <label className="text-sm text-black/60">Currency</label>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className="text-sm border border-black/10 rounded-full px-3 py-2 bg-white">
              {['USD','EUR','CHF'].map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {items.map((w) => (
            <motion.article key={w.id} variants={item} className="group rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={w.thumbnail || w.images?.[0]} alt={w.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{w.name}</h3>
                <p className="text-sm text-black/60">{w.movement || 'Automatic'} • {w.case || 'Stainless steel'}</p>
                <p className="mt-2 font-semibold text-red-700">{price(w.price, currency)}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
