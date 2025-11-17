import { useEffect, useState } from 'react'
import { useLocale } from '../locale'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [currency, setCurrency] = useState('USD')
  const { t } = useLocale()

  const rates = { USD: 1, EUR: 0.93, CHF: 0.9 }

  const price = (p, cur) => {
    const v = (Number(p) || 0) * (rates[cur] || 1)
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: cur }).format(v)
  }

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/watches?featured=true&limit=6`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif">{t.featured_title}</h2>
            <p className="text-black/60">{t.reviews_sub}</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-black/60">Currency</label>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className="text-sm border border-black/10 rounded-full px-3 py-2">
              {['USD','EUR','CHF'].map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        {loading ? (
          <p className="text-black/60">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((w) => (
              <article key={w.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-neutral-50">
                <div className="aspect-square overflow-hidden">
                  <img src={w.thumbnail || w.images?.[0]} alt={w.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{w.name}</h3>
                  <p className="text-sm text-black/60">{w.movement || 'Automatic'} • {w.case || '41mm'}</p>
                  <p className="mt-2 font-semibold text-red-700">{price(w.price, currency)}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
