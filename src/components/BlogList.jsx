import { useEffect, useState } from 'react'
import { messages } from '../i18n'

export default function BlogList(){
  const [posts, setPosts] = useState([])
  const [locale, setLocale] = useState('en')
  const t = messages[locale]

  useEffect(()=>{
    const load = async () =>{
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blogs?locale=${locale}&limit=6`)
        const data = await res.json()
        setPosts(data)
      }catch(e){ console.error(e) }
    }
    load()
  },[locale])

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-serif">{t.blogs_title}</h3>
          <select value={locale} onChange={(e)=>setLocale(e.target.value)} className="text-sm border border-black/10 rounded-full px-3 py-2 bg-white">
            {['en','de','fr'].map(l=> <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p=> (
            <article key={p.id} className="rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-xl transition-shadow duration-300">
              {p.hero_image && <img src={p.hero_image} alt={p.title} className="aspect-[16/9] w-full object-cover" />}
              <div className="p-4">
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm text-black/60 line-clamp-3">{p.excerpt}</p>
                <a href={`#/blog/${p.slug}`} className="text-sm text-red-700 underline underline-offset-4">{t.read_more}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
