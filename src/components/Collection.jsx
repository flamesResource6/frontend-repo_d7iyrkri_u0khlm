import { useEffect, useState } from 'react'

export default function Collection() {
  const [items, setItems] = useState([])

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
    <section id="collection" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-8">The collection</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((w) => (
            <article key={w.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={w.thumbnail || w.images?.[0]} alt={w.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{w.name}</h3>
                <p className="text-sm text-black/60">{w.movement || 'Automatic'} • {w.case || 'Stainless steel'}</p>
                <p className="mt-2 font-semibold">{w.currency} {Number(w.price).toLocaleString()}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
