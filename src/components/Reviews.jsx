import { Star } from 'lucide-react'
import { messages } from '../i18n'

const ReviewCard = ({name, text}) => (
  <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({length:5}).map((_,i)=> <Star key={i} className="h-4 w-4 fill-amber-400" />)}
    </div>
    <p className="mt-3 text-sm text-black/80">“{text}”</p>
    <p className="mt-2 text-xs text-black/50">— {name} (Trustpilot)</p>
  </div>
)

export default function Reviews(){
  const t = messages['en']
  const reviews = [
    {name:'A. Laurent', text:'Service impeccable et montre sublime.'},
    {name:'S. Müller', text:'Beratung auf höchstem Niveau, sehr empfehlenswert.'},
    {name:'J. Carter', text:'Exceptional craftsmanship and concierge experience.'},
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif">{t.reviews_title}</h3>
            <p className="text-sm text-black/60">{t.reviews_sub}</p>
          </div>
          <a href="https://www.trustpilot.com/" target="_blank" className="text-sm underline underline-offset-4">View on Trustpilot</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx)=> <ReviewCard key={idx} {...r} />)}
        </div>
      </div>
    </section>
  )
}
