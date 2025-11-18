import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const reviews = [
  { name: 'Sanne', text: 'Elke twee maanden een nieuwe kop – zo makkelijk! Tanden voelen schoner.', rating: 5 },
  { name: 'Jeroen', text: 'Premium uitstraling en topkwaliteit haren. Aanrader.', rating: 5 },
  { name: 'Mila', text: 'Geen gedoe meer in de drogist. Pakket past door de bus.', rating: 4 },
  { name: 'Ravi', text: 'Plus pakket is perfect. Betaalbaar en hygiënisch.', rating: 5 }
]

export default function Reviews() {
  const controls = useAnimation()
  const containerRef = useRef(null)

  useEffect(() => {
    controls.start({ x: ['0%', '-50%'] , transition: { duration: 20, repeat: Infinity, ease: 'linear' } })
  }, [controls])

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Reviews</h2>
          <div className="text-sm text-slate-600">Trustpilot‑stijl • 4.8/5</div>
        </div>
        <div ref={containerRef} className="overflow-hidden">
          <motion.div animate={controls} className="flex gap-6 w-[200%]">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="min-w-[320px] rounded-2xl p-6 bg-white border border-cyan-100 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-100" />
                  <div className="font-medium text-slate-900">{r.name}</div>
                </div>
                <div className="mt-3 text-slate-700">{r.text}</div>
                <div className="mt-3 text-cyan-600">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
