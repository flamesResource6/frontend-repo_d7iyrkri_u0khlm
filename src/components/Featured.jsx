import { useEffect, useState } from 'react'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

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
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif">Featured timepieces</h2>
          <a href="#collection" className="text-sm underline underline-offset-4">View full collection</a>
        </div>
        {loading ? (
          <p className="text-black/60">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((w) => (
              <article key={w.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-neutral-50">
                <div className="aspect-square overflow-hidden">
                  <img src={w.thumbnail || w.images?.[0]} alt={w.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{w.name}</h3>
                  <p className="text-sm text-black/60">{w.movement || 'Automatic'} • {w.case?.split(' ')[-1] || '41mm'}</p>
                  <p className="mt-2 font-semibold">{w.currency} {Number(w.price).toLocaleString()}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
