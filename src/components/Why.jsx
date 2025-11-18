import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Why() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-why-card]', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      })

      // old->new transform indicator
      gsap.fromTo('#oldNew', { xPercent: -20, rotate: -6 }, {
        xPercent: 0, rotate: 0, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Waarom een abonnement?</h2>
            <p className="mt-4 text-slate-600">Elke 3 maanden vervangen is wat tandartsen adviseren. Wij doen het automatisch voor je.</p>
            <div className="mt-8 space-y-4">
              <div data-why-card className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-700 grid place-items-center">🦷</div>
                <div>
                  <h3 className="font-medium text-slate-900">Hygiëne</h3>
                  <p className="text-slate-600 text-sm">Altijd frisse, schone borstelharen. Minder bacteriën, betere mondzorg.</p>
                </div>
              </div>
              <div data-why-card className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-700 grid place-items-center">📦</div>
                <div>
                  <h3 className="font-medium text-slate-900">Gemak</h3>
                  <p className="text-slate-600 text-sm">Automatisch aan huis bezorgd. Geen winkelbezoeken meer.</p>
                </div>
              </div>
              <div data-why-card className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-700 grid place-items-center">💶</div>
                <div>
                  <h3 className="font-medium text-slate-900">Voordelig</h3>
                  <p className="text-slate-600 text-sm">Tot 20% goedkoper dan losse aankopen, zonder verzendkosten.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div id="oldNew" className="rounded-3xl p-8 bg-white shadow-xl shadow-cyan-500/10 border border-cyan-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-2">Oud</div>
                  <div className="w-24 h-24 rounded-2xl bg-slate-100 mx-auto" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-2">Nieuw</div>
                  <div className="w-24 h-24 rounded-2xl bg-cyan-100 mx-auto" />
                </div>
              </div>
              <p className="mt-6 text-center text-slate-600 text-sm">Van oud naar nieuw – automatisch om de paar maanden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
