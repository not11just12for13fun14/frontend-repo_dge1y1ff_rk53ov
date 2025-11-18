import Hero from './components/Hero'
import Why from './components/Why'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import FAQContact from './components/FAQContact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-cyan-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">brushly</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#why" className="hover:text-slate-900">Waarom</a>
            <a href="#how" className="hover:text-slate-900">Hoe</a>
            <a href="#pricing" className="hover:text-slate-900">Pakketten</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#cta" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm">Start</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="why">
          <Why />
        </div>
        <HowItWorks />
        <Pricing />
        <Reviews />
        <FAQContact />
      </main>

      <footer className="py-10 bg-white border-t border-cyan-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} brushly</div>
          <a href="#cta" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow">Begin vandaag – eerste maand korting!</a>
        </div>
      </footer>
    </div>
  )
}

export default App
