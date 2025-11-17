import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocale } from '../locale'

const ReviewCard = ({name, text, delay=0}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
  >
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({length:5}).map((_,i)=> <Star key={i} className="h-4 w-4 fill-amber-400" />)}
    </div>
    <p className="mt-3 text-sm text-black/80">“{text}”</p>
    <p className="mt-2 text-xs text-black/50">— {name} (Trustpilot)</p>
  </motion.div>
)

export default function Reviews(){
  const { t } = useLocale()
  const reviews = [
    {name:'A. Laurent', text:'Service impeccable et montre sublime.'},
    {name:'S. Müller', text:'Beratung auf höchstem Niveau, sehr empfehlenswert.'},
    {name:'J. Carter', text:'Exceptional craftsmanship and concierge experience.'},
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <motion.div initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl md:text-3xl font-serif">{t.reviews_title}</h3>
            <p className="text-sm text-black/60">{t.reviews_sub}</p>
          </motion.div>
          <motion.a href="https://www.trustpilot.com/" target="_blank" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-sm underline underline-offset-4">View on Trustpilot</motion.a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx)=> <ReviewCard key={idx} {...r} delay={idx*0.08} />)}
        </div>
      </div>
    </section>
  )
}
