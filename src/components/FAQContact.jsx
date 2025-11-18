export default function FAQContact() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cyan-50" id="faq">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">FAQ</h2>
            <div className="mt-6 space-y-6">
              <details className="group rounded-2xl bg-white p-6 border border-cyan-100 open:shadow-md">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-slate-900">Kan ik pauzeren of wijzigen?</span>
                  <span className="text-cyan-600 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm">Ja, je kunt op elk moment pauzeren, overslaan of je interval aanpassen.</p>
              </details>
              <details className="group rounded-2xl bg-white p-6 border border-cyan-100 open:shadow-md">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-slate-900">Past het door de brievenbus?</span>
                  <span className="text-cyan-600 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm">Zeker. Onze verpakking is ontworpen voor standaard brievenbussen.</p>
              </details>
              <details className="group rounded-2xl bg-white p-6 border border-cyan-100 open:shadow-md">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-slate-900">Welke borstels zijn compatibel?</span>
                  <span className="text-cyan-600 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm">Compatibel met de meeste elektrische merken. Kies jouw type bij het aanmelden.</p>
              </details>
            </div>
          </div>
          <div id="cta" className="rounded-3xl p-8 bg-white border border-cyan-100 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Start vandaag – eerste maand korting</h3>
            <p className="mt-2 text-slate-600">Laat je e‑mail achter en we sturen je de deal.</p>
            <form className="mt-6 flex gap-3">
              <input type="email" placeholder="jouw@email.nl" className="flex-1 px-4 py-3 rounded-xl border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow">Ontvang korting</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">Door je in te schrijven ga je akkoord met onze voorwaarden.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
