import { motion } from 'framer-motion'

const plans = [
  { name: 'Basic', price: '€6,90', features: ['1 kop per 3 maanden', 'Standaard haren', 'Gratis verzending'], highlight: false },
  { name: 'Plus', price: '€9,90', features: ['1 kop per 2 maanden', 'Premium haren', 'Antibacterieel'], highlight: true },
  { name: 'Premium', price: '€12,90', features: ['1 kop per maand', 'Ultra-fijn + Whitening', 'Prioriteit verzending'], highlight: false }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Kies je pakket</h2>
          <p className="text-slate-600 mt-3">Flexibel wijzigen of pauzeren wanneer je wilt.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-6 border ${p.highlight ? 'bg-white shadow-xl border-cyan-200' : 'bg-white/70 backdrop-blur border-cyan-100'} `}
              whileHover={{ rotateX: 6, rotateY: -6, translateY: -6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {p.highlight && <div className="absolute -top-3 right-6 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow">Meest gekozen</div>}
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-slate-900">{p.price}<span className="text-base font-normal text-slate-500"> /mnd</span></div>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#cta" className="mt-6 inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow hover:shadow-lg">Start {p.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
