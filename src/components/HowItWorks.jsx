import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-step]').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 80%' }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how" ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-10">Hoe werkt het?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div data-step className="rounded-3xl p-8 bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 shadow-sm">
            <div className="text-sm text-cyan-600">Stap 1</div>
            <h3 className="mt-2 font-medium text-slate-900">Kies je borstelkop</h3>
            <p className="mt-2 text-sm text-slate-600">Sensitive, Deep Clean of Whitening – wat past bij jouw gebit.</p>
          </div>
          <div data-step className="rounded-3xl p-8 bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 shadow-sm">
            <div className="text-sm text-cyan-600">Stap 2</div>
            <h3 className="mt-2 font-medium text-slate-900">Kies je interval</h3>
            <p className="mt-2 text-sm text-slate-600">Elke 1, 2 of 3 maanden automatisch vernieuwd.</p>
          </div>
          <div data-step className="rounded-3xl p-8 bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 shadow-sm">
            <div className="text-sm text-cyan-600">Stap 3</div>
            <h3 className="mt-2 font-medium text-slate-900">Thuisbezorgd</h3>
            <p className="mt-2 text-sm text-slate-600">Past door de brievenbus. Track & trace inbegrepen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
